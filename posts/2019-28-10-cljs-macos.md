# React Native + macOS + Clojurescript

![image](https://i.imgur.com/Wo1XreN.gif)

# Project Catalyst

Since the recent release of Catalina, macOS has shipped with the ability to allow iOS/iPAD apps to run on macOS without any modification via a featureset known as [Project Catalyst](https://developer.apple.com/mac-catalyst/).

This is exciting, as writing React Native + Clojurescript apps as a target for the desktop is much more compelling than a pure Electron app (imo).

While there is still the overhead of a JS runtime, React Native's core is a much lighter weight alternative to Electron's re-packaged browser runtime.

For my particular use case, here's what I hope React Native for the desktop will bring to the table:

- Native UI components
- High level UI/business logic written in Clojure
- Ability to leverage Swift/Objective-C modules for low level/performance heavy code (in my particular app, [coremidi](https://developer.apple.com/documentation/coremidi) support)
- If I ever want to target iOS, this should theoretically be the same codebase

# Current Status

At this point in time, React Native support for Project Catalyst is in its early stages, and there aren't too many resources floating around.

However, [this](https://github.com/react-native-community/discussions-and-proposals/issues/131) discussion has some insight on how to get React Native apps running on macOS with a few tweaks:

- You need RN >= `0.61.2`
- You have to disable React Native Core's WebSockets module
- You have to compile your builds as `release`

Bummer. WebSockets is a pretty crucial component to Clojurescript's development lifecycle if you are using [shadow-cljs](https://github.com/thheller/shadow-cljs) or [figwheel](https://github.com/bhauman/lein-figwheel).

With the steps posted [here](https://github.com/react-native-community/discussions-and-proposals/issues/131#issuecomment-544190522), I was able to get my "hello world" app running on macOS with a `shadow-cljs release app` build. Eg, a production build without any dependency on `js/WebSocket`.

But what about development? This post shows the hacky way I was able to get React Native WebSockets support working in Clojurescript for a reasonable dev environment!

The best thing about this code is that it's all (thankfully) throw-away. Once React Native properly supports Project Catalyst, you can simply delete all of this code!

# The solution

The (hacky) solution I have come up with here is overloading the `js/WebSocket` variable at runtime with a working implementation. 

`shadow-cljs` [:preload](https://shadow-cljs.github.io/docs/UsersGuide.html#_preloads) functionality gets evaluated before WebSocket initialization happens, meaning we can overload the `js/WebSocket` variable before `shadow-cljs` requires it.

The solution involves writing some Swift code to build a native WebSockets module that can be used from our JS runtime as a shim for the currently broken implementation on macOS.

This solution works as Clojurescript apps do not typically depend on React Native's provided functionality for hot reloading. Eg, typically you would disable React Native's hot reload functionality in the simulator, as it conflicts with the (superior) functionality provided by `shadow-cljs`.  

A solution in Javascript would likely mean fixing the broken module, which tbh is a better way to solve the problem. But I ain't got time to learn Objective-C!

Solving the problem this way has taught me:

- Using React Native without expo
- The implementation details of `shadow-cljs`
- The Swift programming language
- How to write React Native modules in Swift
- When in doubt, you can always hack Javascript to get your ways

# Prerequisites

This code makes the assumption that you are building your Clojurescript assets using `shadow-cljs` without [expo](https://github.com/expo/expo).

You will also need macOS running Catalina or later, and Xcode >= 11.1

A simple place to start is something like:

```
npm install -g shadow-cljs
npm install -g react-native-cli
react-native init app --version react-native@0.61.2
shadow-cljs init
```

There is a Git repo at the bottom, if you wish to skip the journey.

# Hello world

After creating your new React Native project, let's setup the Clojurescript side of things.

If you already have an existing `shadow-cljs` project, targeting `:react-native`, then you should be able to skip this section.

A `shadow-cljs.edn` file with basic config like:

```clojure
{:deps {:aliases [:dev]}
 :nrepl {:port 9000}

 :builds
 {:app
  {:target :react-native
   :init-fn example.app/main
   :output-dir "app"
   :devtools {:preloads []}}}}
```

A `deps.edn` file consiting of:

```clojure
{:paths   ["src/main"
           "src/test"]

 :deps    {thheller/shadow-cljs      {:mvn/version "2.8.52"}
           org.clojure/clojurescript {:mvn/version "1.10.520"}
           wavejumper/rehook         {:mvn/version "1.0.0"}}

 :aliases {:dev {:extra-paths ["src/test" "src/dev"]}}}
```

The contents of namespace `src/main/example/app.cljs` could look something like:

```clojure
(ns example.app
  (:require
   [rehook.core :as rehook]
   ["react-native" :as rn :refer [AppRegistry]]
   ["react" :as react]))

(def react-native-components
  {:Text rn/Text
   :View rn/View})

(defn handle-component [component]
  (if (keyword? component)
    (get react-native-components component)
    component))

(defn $
  ([elem]
   (react/createElement (handle-component elem)))
  ([elem args]
   (react/createElement (handle-component elem) (clj->js args)))
  ([elem args & children]
   (apply react/createElement (handle-component elem) (clj->js args) children)))

(defn app []
  ($ :View {:style #js {:flex           1
                        :justifyContent "center"
                        :alignItems     "center"}}
     ($ :Text {}
        "Hello from Clojurescript!")))

;; Release builds don't like to remount components, AppRegistry.unmountApplicationComponentAtRootTag
;; woefully underdocumented.
(defonce root-component
  (atom {:root app}))

(defn dominant-component []
  ;; rehook/use-atom is similar to reagent.core/ratom, except leverging react hooks.
  (let [[{:keys [root]} _] (rehook/use-atom root-component)]
    ($ root)))

(defn ^:dev/after-load relaod []
  (reset! root-component {:root app}))

(defn main []
  (.registerComponent AppRegistry "app" (constantly #($ dominant-component))))
```

You'll need an `index.js` file to bootstrap the Clojurescript:

```javascript
import "./app/index.js"
```

If `index.js` already exists, replace it with the above line.

Now you can run `shadow-cljs watch app` in one terminal window, and `react-native run-ios` in another and you should see `Hello from Clojurescript!` from the iPhone simulator.

Now let's get the above code running on macOS!

# Swift modules

Note: I have had 10 minutes of experience total with the Swift language, and know next to nothing about it... sorry if this code can be expressed better!

## Dependencies

Figuring out Swift/Obj-C dependencies was honestly the most difficult time I had coming up with this solution. 

Anyways... we're going to need to include one extra dependency in our `ios/Podfile`:

```
  pod 'SwiftWebSocket', :git => 'https://github.com/tidwall/SwiftWebSocket.git', :branch => 'master'
```

You're going to have to explicitly point to `master` (or the most recent commit), because the `cocoapods` repository doesn't have the latest version of this library, and the Git repo hasn't tagged the latest release...

I also had to add this line to the top of my `Podfile`: 

```
project 'app.xcodeproj'
```

## Swift WebSockets module

### XCode

Note: from this point on I had to create all Obj-C/Swift files from within Xcode...

Following this [post](https://teabreak.e-spres-oh.com/swift-in-react-native-the-ultimate-guide-part-1-modules-9bb8d054db03#4377), we the following files:

- `ios/WebSockets.m` macros for exposing our native module
- `ios/WebSockets.swift` the implementation of our WebSockets module 
- `ios/app-Bridging-Header.h` the bridging headers for our Swift code

In Xcode, and within the context of the app dir, create a Swift file named `WebSockets` and when prompted click "Add bridging header".

Once again, within the context of the app dir, create an Objective C file also named `WebSockets`

### Swift impl

The limitations imposed by React Native extern modules is that there is no way to instantiate a unique instance of your class, and all return values are passed through a callback.

The solution I came up with was to have our `connect` function return in the callback an `id` of the new connection. All other functions like `sendMessage`, `close`, etc then take in `id` as an argument.

The event emitter (which emits events like `onMessage` etc) dispatches events with an `id` key, relating to the particular conneciton.

Our `ios/WebSockets.m` file looks like:

```objc
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(WebSockets, RCTEventEmitter)

RCT_EXTERN_METHOD(connect:(NSString *)uri callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(close:(NSString *)id callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(sendEvent:(NSString *)id msg:(NSString *)msg callback:(RCTResponseSenderBlock)callback)

@end
```


Our `ios/WebSockets.swift` file looks like:

```swift
import Foundation
import SwiftWebSocket

@objc(WebSockets)
class WebSockets: RCTEventEmitter {
  
  private var connections: [String: WebSocket]! = [:]
  
  func initEvents(id: String, ws: WebSocket) -> Void {
    ws.event.open = {
      self.sendEvent(withName: "onConnect", body: ["id": id])
    }
    ws.event.error = { error in
      self.sendEvent(withName: "onError", body: ["id": id, "error": error])
    }
    ws.event.message = { message  in
      self.sendEvent(withName: "onMessage", body: ["id": id, "data": message])
    }
    ws.event.close = { code, reason, clean in
      self.sendEvent(withName: "onClose", body: ["id": id, "code": code, "reason": reason, "clean": clean])
    }
  }
  
  override func constantsToExport() -> [AnyHashable : Any]! {
    return [:]
  }
  
  override func supportedEvents() -> [String]! {
    return ["onConnect", "onError", "onMessage", "onClose"]
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc(sendEvent:msg:callback:)
  func sendEvent(id: String, msg: String,  _ callback: RCTResponseSenderBlock) -> Void {
    if let ws = self.connections[id] {
      let event = ["id": id, "success": true] as [String : Any];
      ws.send(msg)
      callback([event])
    } else {
      let event = ["id": id, "success": false] as [String : Any];
      callback([event])
    }
  }
  
  @objc(close:callback:)
  func close(id: String, _ callback: RCTResponseSenderBlock) -> Void {
    if let ws = self.connections.removeValue(forKey: id) {
      let event = ["id": id, "success": true] as [String : Any];
      ws.close()
      callback([event])
    }
    else {
      let event = ["id": id, "success": false] as [String : Any];
      callback([event])
    }
  }
  
  @objc(connect:callback:)
  func connect(uri: String, _ callback: RCTResponseSenderBlock) -> Void {
    let id = UUID().uuidString;
    let ws = WebSocket(uri);
    connections[id] = ws;
    initEvents(id: id, ws: ws);
    callback([id])
  }
}
```

And our `ios/app-Bridging-Header.h` file looks like:

```objc
//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"
```

# Clojurescript interop

Ok, this is ugly code, and you should never write anything like this in production... But this is the type of code that is extremely fun to write, abusing all the weird edges of Javascript.

Basically, my intent here is to replicate the `js/WebSocket` class, and the code here is structured in such a way to only make the `shadow.cljs.devtools.client.react-native` namespace happy.

You certainly could make this a 1:1 implementation, but I'm lazy...  

Add the namespace `src/dev/websocket.cljs`:

```clojure 
(ns websocket
  (:require
   ["react-native" :refer [NativeModules NativeEventEmitter]]))

(def ^:private ws
  (aget NativeModules "WebSockets"))

(def ^:private ws-events
  (NativeEventEmitter. ws))

(defn- add-listener! [id f]
  (.addListener ws-events id f))

(defonce ^:private connections
  (atom {}))

(defn- send-event [id msg cb]
  (let [f (aget ws "sendEvent")]
    (f id msg cb)))

(defn- close! [id cb]
  (let [f (aget ws "close")]
    (f id cb)))

(defn WebSocket
  [uri opts]
  (let [noop (constantly nil)
        self (clj->js (merge {:send      noop
                              :close     noop
                              :onclose   noop
                              :onconnect noop
                              :onerror   noop
                              :onmessage noop}
                             opts))]
    (.connect ws uri
              (fn [id]
                (set! (.-send self) #(send-event id % noop))
                (set! (.-close self) #(close! id noop))
                (swap! connections assoc id self)))
    self))

(defn handle-event [handler-id event]
  (let [event-id (aget event "id")]
    (if-let [socket (get @connections event-id)]
      (if-let [f (aget socket handler-id)]
        (f event)
        (js/console.log "No event handler registered for" handler-id))
      (js/console.warn "No socket found for event" event-id))))

(add-listener!
 "onMessage"
 (partial handle-event "onmessage"))

(add-listener!
 "onError"
 (partial handle-event "onerror"))

(add-listener!
 "onConnect"
 (partial handle-event "onopen"))

(add-listener!
 "onClose"
 (partial handle-event "onclose"))

(set! js/WebSocket WebSocket)
```

# Wrapping it up. 

Now that we have our `js/WebSocket` shim, the next step is to include our freshly created namespace in our `shadow-cljs.edn` [preloads](https://shadow-cljs.github.io/docs/UsersGuide.html#_preloads)

```clojure 
{:devtools {:preloads [websocket]}}
```

That's it! Once a proper solution comes out for React Native, we can simply delete our pre loaded namespace shim!

Within XCode, assuming you have followed [these](https://github.com/react-native-community/discussions-and-proposals/issues/131#issuecomment-544190522) steps, you should be able to run a build targeting `My Mac`, and see your app running :)

To enable logging for release builds, simply follow [this](https://stackoverflow.com/questions/39089772/release-mode-diagnostics-in-react-native) Stack Overflow post. 

All stdout will now appear in XCode's output, not the terminal running metro.

As the resulting artifact is a production build, error handling and debugging is compiled out from React Native runtime.

However, I am finding the resulting setup productive enough for me to get started with Clojurescript on macOS :)

The demo repo can be found at https://github.com/wavejumper/react-native-cljs-macos

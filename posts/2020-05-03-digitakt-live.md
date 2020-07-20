{:title "Effect parameter mapping for the Digitakt in Ableton Live"
 :layout :post
 :tags  ["max for live" "patches"]}

### Overview

With [overbridge](https://www.elektron.se/overbridge/) finally coming out of beta, Elektron devices (such as the [Digitakt](https://www.elektron.se/products/digitakt/)) have become even more versatile, seamlessly integrating with DAWs.

One of the greatest features of overbridge (imo) is audio over USB. All 8 tracks of the Digitakt are available as individual channels within Ableton. Meaning you can sketch out ideas on the Digitakt and finally arrange them in Ableton. 

The drawback? Each channel of audio does not include the tracks effects (such reverb, delay, overdrive, panning). This is because each individual channel is mono, and the effects are sends to the master channel. 

This patch aims to address the above "pitfall" by mapping the Digitakt's track effects to Ableton sends and device parameters. 

Note: this solution should work for other overbridge-enabled Elektron products too!

### Installation + prerequisites + notes

This patch has been tested in Ableton Live 10 Suite with Max for Live at version `8.1.1` on MacOS. I am using Overbridge engine `2.0.37.3` with the Digitakt's firmware at `1.11`

The latest version of this patch is `1.0` and is available to download [here](https://github.com/wavejumper/digitakt-live/archive/1.0.zip)

All previous versions of the patch are available [here](https://github.com/wavejumper/digitakt-live/releases)

For all discussion on this patch, check [this](https://www.elektronauts.com/t/max-patch-for-effect-parameter-mapping-in-ableton-live/130406) post on the elektronauts forum

This patch is licensed under the MIT License

### Usage

#### Step one - load the Digitakt VST

* Create a new MIDI track and load the Digitakt VST into it
* Unflod the Digitakt device (the caret `>` icon) and click the `Configure` button
* With the VST's interface open, select each track's parameters that you wish to map by moving them around
* Mute this track, as it will output the Digitakt's master audio

<img src="https://i.imgur.com/H3J2bIM.png" width="250" height="210"></img>

The above screenshot shows track one's parameters mapped. Repeat for all seven remaining tracks!

Sorry, this is kind of verbose - but you can save as default configuration for future use :)

#### Step two - load the Max For Live plugin

* Create a new audio track 
* Load the `Digitakt.amxd` plugin into the audio track
* Set the tracks `Audio from` to your Digitakt's VST track
* Set the tracks channel to an indidivudal channel on the Digitakt, eg.  `Track 1 - L/-Dig`
* Set the tracks `Monitor` to `In`
* Inside the device, select the `Digitakt` device from the dropdown (hit `Refresh` if you cannot see the device in the list)
* Here, we can individually map each paramter on the Digitakt to their Ableton equivilant. 
* **Tip**: Overdrive can be mapped to any parameter of the first effect after the `Digitakt Mapper` patch!

<img src="https://i.imgur.com/ZOqly5p.png" height="200px" width="500px"></img>

The above screenshot shows the parameters mapped for track 1 of the Digitakt. Repeat for all seven remaining tracks!

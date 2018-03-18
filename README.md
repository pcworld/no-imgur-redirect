When a referrer on an `i.imgur.com` request is set (i.e. when opening such a link from another website), Imgur sometimes redirects to the slower HTML page on `imgur.com`, e.g. `i.imgur.com/xyz.png` to `imgur.com/xyz`, which loads many scripts/resources/ads and does not show the picture in full size.

This [WebExtension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) prevents Imgur from performing these redirects. It is tested in Chromium and Firefox, and should probably work in all browsers implementing the WebExtensions spec (such as Edge and Opera).

As a side effect, `i.imgur.com/xyz.mp4` URLs are not redirected to `i.imgur.com/xyz.gifv`.

## How to install

### Chromium

Clone this repo or [download a zip](https://github.com/pcworld/no-imgur-redirect/archive/master.zip) and extract it.
Open `chrome://extensions/` (or hamburger icon -> More tools -> Extensions), tick "Developer mode", press "Load unpacked extension" and choose the extension folder.

### Firefox

Download a [signed xpi extension file from the releases page](https://github.com/pcworld/no-imgur-redirect/releases) and open it with Firefox.

Alternatively for developers, clone this repo, open `about:debugging`, press "Load Temporary Add-on" and choose the `manifest.json` of this extension. However, this way the extension will only persist until the browser is closed.

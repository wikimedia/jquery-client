3.0.0 / UNRELEASED
==================

### Added

* Add Chrome for iOS browser as `crios`, previously misidentified as Safari 2.0. (Ed Sanders) [T262223](http://phabricator.wikimedia.org/T262223)
* Add the iPad platform as `ipad`, previously `unknown`. (Timo Tijhof)

### Changed

* Identify Mobile Safari browser as `safari`, instead of `iphone` or `ipod`. (Timo Tijhof)
* Identify BlackBerry browser as `safari` or `unknown`, instead of `blackberry`.
  Its layout engine continues to be recognised as `webkit`.
* Identify PlayStation as `unknown`, instead of `ps3`.
  Its layout engine continues to be recognised as `webkit`.

### Fixed

* Use plain objects and precompiled regexes for improved performance. (Timo Tijhof)
* Document that the `edge` browser and engine refer to legacy EdgeHTML.
  Latest Edge is recognised as `chrome`.

### Removed

* Drop support for the Camino browser, discontinued in 2012.
  Previously identified as `camino`, and now likely `unknown`.

* Drop support for the Lynx browser, not expected to run client-side
  JavaScript. Previously identified as `lynx`, and now likely `unknown`.

* Drop support for the Netscape browser, discontinued many years ago.
  Previously identified as `netscape`, and now likely `unknown`.

* Drop support for Firefox 4 nightly "Minefield" builds.
  This was never a consumer product, and discontinued over 10 years ago.
  Previously identified as `firefox`, and now likely `unknown`.

2.0.2 / 2019-02-09
==================

### Fixed

* Firefox Mobile browser on Android was wrongly identified as `android` (legacy Android browser),
  this is now identified as `firefox`. (Ed Sanders) [T101483](https://phabricator.wikimedia.org/T101483)

2.0.1 / 2018-10-15
==================

### Fixed

* Minor source code reformatting to satisfy ESLint in downstream MediaWiki.

2.0.0 / 2015-05-06
==================

### Changed

* Identify the new Microsoft Edge browser as `edge` instead of `msie`. (Brion Vibber)

1.0.0 / 2015-03-11
==================

First stable release. (Timo Tijhof)

# WeBWork Userscript

`webwork.user.js` adds keyboard shortcuts to [WeBWork], a [wonderful][1] "online homework delivery system" used mainly for [college][2] [Calculus][3] [classes][4] which happens to have no keyboard accessibility whatsoever, apart from the standard Tab-until-you-die approach.

  [WeBWork]: http://en.wikipedia.org/wiki/WeBWorK
  [1]: https://math.webwork.rochester.edu/webwork2/spring11mth162
  [2]: http://homework.ps.uci.edu/webwork/
  [3]: http://homework.math.ucsb.edu/webwork2
  [4]: https://webwork.csun.edu/

It also autofocuses the first field in a problem as soon as it runs.

## Installation

If you have Google Chrome or Opera, just download [webwork.user.js] and accept when they ask if you want to install the extension. If you have Firefox, make sure you have the [Greasemonkey addon] installed first and then download [webwork.user.js], accepting when prompted.

  [webwork.user.js]: https://github.com/ariofrio/webwork.user-js/blob/master/webwork.user.js
  [Greasemonkey addon]: https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/

## Shortcuts

### General Navigation

<dl>
  <dt>Alt+j</dt>
  <dd>Previous problem</dd>
  <dt>Alt+k</dt>
  <dd>Next problem</dd>
  <dt>Alt+u</dt>
  <dd>Up to problem list/homework set list</dd>
  <dt>Alt+Shift+<i>number</i></dt>
  <dd><em>Maintain Alt+Shift pressed down and type the number, then release.</em> Go to the problem specified by the number.</dd>
</dl>

### Entering solutions

<dl>
  <dt>A-Z</dt>
  <dd>Select/deselect the option specified by the letter, if present</dd>
  <dt>Alt-p</dt>
  <dd>Preview answer</dd>
  <dt>Alt-Enter</dt>
  <dd>Submit answer</dd>
</dl>

## To Do

 - Enable moving between homework sets using Ctrl+j and Ctrl+k.
 - Clarify explanation of Alt+Shift+<i>number</i>. Introduce a light visual indicator of the current number. Implement Esc as a Cancel mechanism (and include "Press Esc to cancel" in the visual indicator).
 - Add support for more WeBWork installations apart from UCSB's; some of the linked example websites are not supported.


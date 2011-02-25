// ==UserScript==
// @name        WeBWork Keyboard Shortcuts
// @namespace   http://riofrios.com/userscripts
// @description Add keyboard shortcuts to WeBWork. Try Alt-j for Previous, Alt-k for Next, Alt-u for Up, Alt-p for Preview, Alt-Enter for Submit.
// @include     http://*homework*.*.edu/webwork*
// ==/UserScript==

(function() {

// Auxiliary functions
var $ = function(sel) { return document.querySelector(sel); };
var $$ = function(sel) { return document.querySelectorAll(sel); };
function createClickEvent() {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    return evt;
}

// Our namespace for auxiliary global variables
var namespace = "_WeBWorkKeyboardShortcuts";
window[namespace] = {};

document.addEventListener("keydown", function(e) {
    var el;
    
    // Navigation and submitting. Usage: Alt+<?>, where ? is... TODO
    if(e.altKey) {
        if(e.which == 106-32) { // j
            console.debug("down: Alt+j");
            el = $("a > img[alt='Previous Problem']");
            if(el) el.parentNode.dispatchEvent(createClickEvent());
        } else if(e.which == 107-32) { // k
            console.debug("down: Alt+k");
            el = $("a > img[alt='Next Problem']");
            if(el) el.parentNode.dispatchEvent(createClickEvent());
        } else if(e.which == 112-32) { // p
            console.debug("down: Alt+p");
            el = $("input[type=submit][name=previewAnswers]");
            if(el) el.dispatchEvent(createClickEvent());
        } else if(e.which == 117-32) { // u
            console.debug("down: Alt+u");
            el = $("a > img[alt='Problem List']") || $("a > img[alt='Homework Sets']");
            if(el) el.parentNode.dispatchEvent(createClickEvent());
        } else if(e.which == 13) { // Enter
            console.debug("down: Alt+Enter");
            el = $("input[type=submit][name=submitAnswers]");
            if(el) el.dispatchEvent(createClickEvent());
        }   
    }
    
    // Editing your answer: multiple choice. Usage: A, B, or C.
    if(document.activeElement = document.body || // focused on nothing
    document.activeElement.tagName.toLowerCase() == 'a') { // or on a link
        var ch = String.fromCharCode(e.which+32);
        if(ch) {
            var el = $("input[value='"+ ch +"']") || $("input[value='"+ ch.toLowerCase() +"']") || $("input[value='"+ ch.toUpperCase() +"']");
            if(el) {
                if(el.type == 'checkbox' || el.type == 'radio') {
                    el.click();
                }
            }
        }
    }
}, false);

window[namespace].problem_id = "";
document.addEventListener("keyup", function(e) {
    // Navigation between problems by id. Usage: Alt-Shift 12
    if(e.altKey && e.shiftKey) {
        if(e.which >= 48 && e.which <= 57) { // 0-9
            console.debug("up: Alt+Shift+{0-9}");
            window[namespace].problem_id += String.fromCharCode(e.which);
        }
    } else if (e.which == 18 || e.which == 16) { // Alt or Shift, since sometimes one doesn't trigger in Chrome.
        console.debug("up: Alt", "Time to rumble.", window[namespace].problem_id);
        var problem_id = window[namespace].problem_id;
        window[namespace].problem_id = "";
        
        var links = $$("a[href]");
        for(var i=0; i<links.length; i++) {
            if(links[i].textContent == "Problem "+problem_id) {
                links[i].dispatchEvent(createClickEvent());
                break; // Just in case, for sanity's sake.
            }
        }
    }
}, false);

// Focus the first input element in a problem.
var first_input = $("form[name=problemMainForm] input:not([type=hidden])");
if(first_input) first_input.focus();

})();

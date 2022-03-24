# Scroll to set position

When an element with a class `jscrollto` is clicked, the page scrolls automatically to the set point. `jscrollto` has several properties, some of which are optional.

First, apply the `jscrollto` class name to an element.

Then, in the same element’s class name, enter the id (not class name!) of the element that you wish to scroll to.

The following properties are optional:

If you wish for the scroll to be smooth, apply a third class name `jsmooth`.

If you wish to scroll to a set amount of pixels above the selected element, add two more class names. `jsetpx` and the number of pixels.

## Usage

```html
<p>check</p>
<p class="jscrollto elmn jsmooth jsetpx 70">check</p>
<p>check</p>
<p class="jscrollto elmn">check</p>
<p>check</p>
<p class="jscrollto elmn jsetpx 150">check</p>
<p>check</p>
<p>check</p>
<p>check</p>
<p>check</p>
<p>check</p>
<p id="elmn">check</p>
<p>check</p>
<p>check</p>
<p>check</p>
```

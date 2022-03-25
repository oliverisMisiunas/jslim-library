# Apply class while scrolling

`jscrollpos` applies a class name to an element when the window object reaches a set point (measured in pixels) and removes that class name when the window object reaches another set point.

To use this function you will need to set four classes to your selected element:

`jscrollpos` initiates the function.

Then two numbers are passed. The first number sets a point, when the window’s Y-axis passes that point (while scrolling) a class name is added to that element. The second number is another point, when the window’s Y-axis passes it, that same class name is removed from the element.

The class name is also removed if the user scrolls back (the window’s Y-axis is less than the first number).

The class name, that will be added to the element, has to be applied to the same element but it has to start with the letter `j`. For example, if you want to set the class name `container` to an element, you would need to write `jcontainer`.

## Usage

```html
<div>

    <h1>title</h1>

    <p>some text</p>

    <div class="jscrollpos 250 350 jcontainer">
        <p>even more text!</p>
    </div>

    <p>even more text!</p>
</div>
```

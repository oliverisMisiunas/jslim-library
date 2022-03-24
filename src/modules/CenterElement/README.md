# Center elements

`jfcol` or `jfrow` classes apply flexbox with `center` properties to the selected elements. In other words, it centers the elements horizontally and vertically inside another element or body.

The only difference between jfcol and jfrow is flex-direction. jfcol’s flex-direction is set to column and jfrow’s is set to row.

You should only apply flexbox to the HTML elements that are parent elements. Its children will be centered vertically and horizontally inside it. It is highly recommended to use jfcol and jfrow only if you are familiar with flexbox

## Usage

```html
<div class="container jfcol">
    <div class="jfrow">
        <h1>check</h1>
    </div>

    <div class="jfrow">
        <h2>check</h2>
    </div>
</div>
```

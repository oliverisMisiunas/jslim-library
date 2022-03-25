# Create a variable

`jget` class assigns the elements (containing this class name) to the variables that become accessible in your JavaScript file.

The variable name is set by writing another class name after `jget` (that class name becomes the new variable name)

## Usage

```html
<p class="jget textElement">text</p>
```

```js
console.log(textElement);

textElement.style.color = 'red';
```

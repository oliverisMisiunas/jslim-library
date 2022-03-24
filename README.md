# [JSlim library](https://www.jslim.org/)

## Install JSLim

Ensure that Node is installed on your system.

`npm i jslim-library`

## Using JSlim in your code

Include it in your HTML

```html
<body>

    <script type="module" src="/node_modules/jslim-library/src/index.js"></script>
</body>
```

## Contributing

Fork the repo and submit a pull request when your changes are ready.

Make sure to follow the existing project structure, for example, by creating a new module in `/src/modules/YourNewModule/YourNewModule.js` and then **importing** your new module in `/src/plugin/JSlim.js`.

Make sure to add a README in your new module directory following the documentation structure that the exising modules use so that new developers have a good idea of what each module does.

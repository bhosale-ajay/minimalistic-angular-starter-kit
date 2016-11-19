# Minimalistic Angular Starter Kit

This starter kit have following dependencies, and based on [Angular Webpack Setup](https://angular.io/docs/ts/latest/guide/webpack.html)

1. Angular 2
2. TypeScript
3. Webpack - For bundling
4. Karma and Jasmine - For Testing
5. TSLint and [codelyzer](https://github.com/mgechev/codelyzer) - For Linting, Codelyzer provides Angular specific linting rules
6. Istanbul - For code coverage
 
### NPM Commands
- `npm run lint` : Lints source code
- `npm test` : Tests the application with Karma, Jasmine and Phantomjs by executing test cases, and generates code coverage report
- `npm build:dev` : Builds chunks, extracts all the dependencies, bundles and minifies 
- `npm build:prod` : Builds chunks, extracts all the dependencies, bundles and minifies, file names contains hash value which is useful for cache busting.

### Build Output

1. Assets

    Contains images which are used by Angular Templates, Build process extracts the images, copies them to assets folder with a hash based name.

    Source Template (relative path to image)
    ```html
    <img src="../content/images/box.png"/>
    ```
    Final Output
    ```html
    <img src="/static/assets/box.a4116360ad7b34f5becb9b3964e6fdb7.png">
    ```

2. Chunks
    - CSS Chunk : Contains references to all the css files extracted during build process
    ```html
    <link href="static/css/app.521d2ef912fab45e5682.css" rel="stylesheet">
    ```
    - JS Chunk : Contains references to all the JS files extracted during build process
    ```html
    <script src="static/js/polyfills.521d2ef912fab45e5682.js"></script>
    <script src="static/js/vendor.521d2ef912fab45e5682.js"></script>
    <script src="static/js/app.521d2ef912fab45e5682.js"></script>
    ```

    For Asp .NET MVC applications, these chunks can be included in _Layout.cshtml using @RenderPage
    ```
    <!DOCTYPE html>
    <html>
    <head>
        ...
        @RenderPage("~/static/chunks/chunk-css.cshtml")
    </head>
    <body>
        ...
        @RenderPage("~/static/chunks/chunk-js.cshtml")
    </body>
    </html>
    ```

    For other applications, like node, one can use tools like [cheerio](https://github.com/cheeriojs/cheerio) to alter template/layout page at build time.

3. CSS
    Contains css which is extracted from templates or referenced by templates.

4. JS
    Contains three js files (Poylfill, Vendor, and App) which are three entry points for app (Refer module.exports.entry in webpack.common.js).


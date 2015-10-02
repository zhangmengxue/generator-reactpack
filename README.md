### Generate Your React+Webpack+ES6  Playground
----------------------------------------------

[中文版文档](https://github.com/zhangmengxue/generator-reactpack/blob/master/README-zh.md)

Let's begin:


Ensure you have been installed yo：

    npm install -g yo

Then install generator-reactpack:

    npm install -g generator-reactpack

In your blank project , run:

    yo reactpack

And you will get this:

      .
    ├── css
    │   └── main.css
    ├── index.html
    ├── js
    │   ├── app.js
    │   └── hello.js
    ├── node_modules
    │   ├── babel-core
    │   ├── babel-loader
    │   ├── css-loader
    │   ├── lodash
    │   ├── react
    │   ├── react-hot-loader
    │   ├── react-kendo
    │   ├── react-router
    │   ├── webpack
    │   └── webpack-dev-server
    ├── package.json
    └── webpack.config.js

After generating , then you have webpack-dev-server in your project, just run:

    npm start

Let's try [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

Hello world!


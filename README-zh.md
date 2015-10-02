### React+Webpack+ES6开发模式脚手架
--------------------------------
在确保自己已经安装了nodejs 和yeoman的情况下，否则(ensure you have been installed yeoman)：

    npm install -g yo

然后安装脚手架（install generator-reactpack）：

    npm install -g generator-reactpack

在自己的空项目中执行(In your blank project run)：

    yo reactpack

得到的脚手架应该是这样的：

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

脚手架内部配置了webpack-dev-server，在项目中运行：

    npm start

然后访问[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) 就可以开启你的React+Webpack+ES6模式的开发之旅啦！


var path = require('path');
var chalk = require('chalk');

var util = require('util');
var genUtils = require('../../util.js');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactpackGenerator = yeoman.generators.Base.extend({
  info:function(){
    this.log(chalk.yellow(
      'I am going to build your app!'
    ));
  },
  generateBasic:function(){
    this.copy('package.json','package.json');
    this.copy('index.html','index.html');
    this.copy('webpack.config.js','webpack.config.js');
    this.copy('js/app.js','js/app.js');
    this.copy('js/hello.js','js/hello.js');
    this.copy('css/main.css','css/main.css');
  },
  generateClient:function(){
    this.sourceRoot(path.join(__dirname,'templates'));

    this.destinationPath('./')
  },
  end:function(){
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});

module.exports = ReactpackGenerator;

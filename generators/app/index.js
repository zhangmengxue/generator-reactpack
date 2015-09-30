var path = require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

// describe('backbone:app',function(){
//   describe('when using index.js',function(){
//     before(function(done){
//       helpers.run(path.join(__dirname,'../generators/app'))
//       .on('ready',function(generator){
//         if(assert.file(['index.html','package.json','webpack.config.js','js/app.js','css/main.css'])){
//           this.log('请清空文件夹后再使用脚手架构建，否则会有文件冲突');
//           return;
//         }
//       })
//       .on('end',done);
//     });
//   })
// });


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

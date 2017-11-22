module.exports = function (grunt) {
    "use strict";
  
    require('load-grunt-tasks')(grunt);
  
    grunt.initConfig({
      ts: {
        app: {
          files: [{
            src: ["src/\*\*/\*.ts"],
            dest: "./dist/"
          }],
          options: {
            rootDir: "./src/",
            module: "commonjs",
            noLib: false,
            target: "es6",
            sourceMap: false
          }
        }
      },
      tslint: {
        options: {
          configuration: "tslint.json"
        },
        files: {
          src: ["src/\*\*/\*.ts"]
        }
      },
      watch: {
        files: ["src/\*\*/\*.ts"],
        tasks: ["default"]
      }
    });
  
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
  
    grunt.registerTask("default", [
      "ts",
      "tslint"
    ]);
  
  };

'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['app/scripts/**/*.js'],
                tasks: ['jshint', 'concat:js']
            },
            stylesheets:{
                files: ['public/stylesheets/**/*.less'],
                tasks: ['less:development']
            }
        },
        shell: {
            express: {
                command: 'npm start'
            },
            bower: {
                command: 'bower install'
            }
        },
        concat: {
            options: {
//                separator: ';',
                sourceMap: true
            },
            js: {
                src: ['app/scripts/**/*.js'],
                dest: 'public/javascripts/built.js'
            }
        },
        less: {
            development: {
                files: {
                    "public/stylesheets/style.css": "public/stylesheets/style.less"
                }
            },
//            production: {
//                options: {
//                    paths: ["assets/css"],
//                    plugins: [
//                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
//                        new (require('less-plugin-clean-css'))(cleanCssOptions)
//                    ],
//                    modifyVars: {
//                        imgPath: '"http://mycdn.com/path/to/images"',
//                        bgColor: 'red'
//                    }
//                },
//                files: {
//                    "path/to/result.css": "path/to/source.less"
//                }
//            }
        },
        jshint: {
            default: {
//                options: {
//                    '-W015': true,
//                },
                src: ['app/scripts/**/*.js']
            }
        }
    });


	grunt.registerTask('default', ['build']);

    grunt.registerTask('server', [
        'shell:express',
    ]);

    grunt.registerTask('build', [
//        'express:dev'
    ]);
};


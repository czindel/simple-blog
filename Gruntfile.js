
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
            }
        },
        jshint: {
            default: {
                src: ['app/scripts/**/*.js']
            }
        }
    });


	grunt.registerTask('default', ['server']);

    grunt.registerTask('server', [
        'shell:install',
        'shell:express'
    ]);
};


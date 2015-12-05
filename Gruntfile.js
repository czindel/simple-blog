
'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['app/scripts/**/*.js'],
                tasks: ['concat:js'],
                options: {
                    spawn: true
                }
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


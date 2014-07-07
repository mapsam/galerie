'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: {
        src: ['src/*.js']
      }
    },
    jshint: {
      files: ['src/*.js']
    },
    browserify: {
      dist: {
        src: ['src/*.js'],
        dest: 'dist/<%= pkg.name%>-<%= pkg.version%>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version%> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name%>.js']
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/*.*',
        tasks: ['lint', 'clean'],
        options: {
          event: [ 'changed', 'added', 'deleted'],
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['jshint' ,'uglify']);
  grunt.registerTask('watcher', ['watch']);

};

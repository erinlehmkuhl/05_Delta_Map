module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
          target: {
          files: {
              'js/app.min.js': ['js/src/app.js'],
              'js/app_aboveTheFold.min.js': ['js/src/app_aboveTheFold.js']
          }
      }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/src',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/'
            }]
        }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
              'css/style.min.css': ['css/style.css'],
              'css/inline.min.css': ['css/inline.css']
          }
      }
    },

    htmlmin: {                                     // Task 
        dist: {                                      // Target 
          options: {                                 // Target options 
            removeComments: true,
              collapseWhitespace: true
            },
          files: {                                   // Dictionary of files 
              'index.html': 'src/index.html',     // 'destination': 'source' 
            }
        }
      },

      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['js/jquery.min.js', 'js/knockout.min.js', 'js/app_aboveTheFold.min.js'],
          dest: 'js/concat.min.js',
        },
      }

    // gzip assets 1-to-1 for production
    // compress: {
    //   main: {
    //     options: {
    //       mode: 'gzip'
    //     },
    //     expand: true,
    //     src: ['**/*'],
    //     dest: 'public/'
    //   }
    // }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-compress');


    grunt.registerTask('default', ['uglify', 'imagemin', 'cssmin', 'htmlmin', 'concat']);

};
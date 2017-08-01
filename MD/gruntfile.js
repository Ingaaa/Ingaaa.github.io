module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: {
                src: ['dist']
            }
        },
        uglify: {
            main: {
                /*options: {
                    mangle: false
                },*/
                files: {
                    'dist/main.min.js': [
                        'src/scripts/app.js'
                    ]
                }
            },
            libraries: {
                files: {
                    'dist/libraries.min.js': [
                        'src/libs/angular/angular.js',
                        'src/libs/angular-animate/angular-animate.js',
                        'src/libs/angular-route/angular-route.js',
                        'src/libs/ui-bootstrap-custom-build/ui-bootstrap-custom-tpls-2.5.0.js'
                    ]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/style.min.css': ['src/style.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        cwd: 'src/',
                        src: [
                            'libs/bootstrap/**'
                        ],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'index.html': 'src-index.html',     // 'destination': 'source'
                    'dist/pages/about.html': 'src/pages/about.html',
                    'dist/pages/galery.html': 'src/pages/galery.html',
                    'dist/pages/home.html': 'src/pages/home.html',
                    'dist/pages/news.html': 'src/pages/news.html',
                    'dist/pages/timeline.html': 'src/pages/timeline.html',
                    'dist/templates/footer.html': 'src/templates/footer.html',
                    'dist/templates/menu.html': 'src/templates/menu.html'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Tasks to create build
    grunt.registerTask('build', ['clean', 'uglify', 'copy', 'cssmin', 'htmlmin']);
}

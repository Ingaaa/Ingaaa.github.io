module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: {
                src: ['dist']
            }
        },
        uglify: {
            main: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/main/webapp/app/main.min.js': [
                        'src/main/webapp/app/common.js',
                        'src/main/webapp/app/config.js',
                        'src/main/webapp/app/app.js',
                        'src/main/webapp/app/controllers/*.js'
                    ]
                }
            },
            libraries: {
                files: {
                    'dist/main/webapp/static/libraries.min.js': [
                        'src/main/webapp/static/bower_components/jquery/dist/jquery.js',
                        'src/main/webapp/static/bower_components/angular/angular.js',
                        'src/main/webapp/static/bower_components/angular-translate/angular-translate.js',
                        'src/main/webapp/static/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
                        'src/main/webapp/static/bower_components/angular-sanitize/angular-sanitize.js',
                        'src/main/webapp/static/bower_components/spin.js/spin.js',
                        'src/main/webapp/static/bower_components/angular-spinner/angular-spinner.js',
                        'src/main/webapp/static/bower_components/ui-bootstrap-custom-build/ui-bootstrap-tpls.js'
                    ]
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/main/webapp/static',
                    src: ['style.css', 'img/**/*.css'],
                    dest: 'dist/main/webapp/static',
                    ext: '.min.css'
                }]
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
                            'main/java/**',
                            'main/webapp/META-INF/**',
                            'main/webapp/WEB-INF/**',
                            'main/webapp/app/pages/**',
                            'main/webapp/app/tiles/tiles.xml',
                            'main/webapp/app/tiles/template/**',
                            'main/webapp/static/i18n/**',
                            'main/webapp/static/img/**',
                            '!main/webapp/static/img/**/*.css',
                            'main/webapp/static/bower_components/angular-i18n/angular-locale_en.js',
                            'main/webapp/static/bower_components/angular-i18n/angular-locale_lv.js',
                            'main/webapp/static/bower_components/bootstrap/dist/**',
                            'main/webapp/static/*.*',
                            '!main/webapp/static/*.css',
                        ],
                        dest: 'dist/'
                    }
                ],
            },
            layout: {
                files: [
                    {
                        src: 'src/main/webapp/app/tiles/layouts/defaultLayout_dist.jsp',
                        dest: 'dist/main/webapp/app/tiles/layouts/defaultLayout.jsp'
                    }
                ],
            },
        },

        'json-minify': {
            build: {
                files: 'dist/main/webapp/static/i18n/**/*.json'
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-json-minify');

    // Tasks to create build
    grunt.registerTask('build', ['clean', 'uglify', 'copy', 'cssmin', 'json-minify']);
}

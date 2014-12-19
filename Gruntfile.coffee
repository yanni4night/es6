module.exports = (grunt) ->
    (require "time-grunt") grunt
    (require "load-grunt-tasks") grunt
    grunt.initConfig
        watch:
            js:
                files: ["cases/{,*/}*.js", "index.js"]
                tasks: ["shell"]
        shell:
            test:
                command: "npm test"

    grunt.registerTask "default", "shell"
    grunt.registerTask "test", "default"
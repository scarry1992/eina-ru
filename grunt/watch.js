module.exports = {
    options: {
        livereload: {
            options: {
                livereload: 35729
            }
        }
    },
    html: {
        files: ['src/assemble/**/*.hbs'],
        tasks: [
            'assemble:dev'
        ]
    },
    //scripts: {},
    sass: {
        files: ['src/sass/**/*.scss'],
        tasks: [
            'sass:dev'
        ]
    }
};
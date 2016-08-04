module.exports = {
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/sass',
            src: ['*.scss'],
            dest: 'dev/assets/style/proto/',
            ext: '.scss.css'
        }]
    }

};
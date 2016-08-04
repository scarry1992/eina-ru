module.exports = {
    dev: {
        files: [{
            expand:true,
            cwd: 'src/',
            src:['img/**/*.{png,jpg,gif}'],
            dest: 'dev/'
        }]
    },
    prod: {
        files: [{
            expand:true,
            cwd: 'src/',
            src:['img/**/*.{png,jpg,gif}'],
            dest: 'prod/'
        }]
    }
};
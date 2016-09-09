module.exports = {
    js: {
        files: [
            {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'dev/assets/scripts/vendor/'},
            {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.min.js'], dest: 'dev/assets/scripts/vendor/'},
            {expand: true, cwd: 'bower_components/jquery-mousewheel/', src: ['jquery.mousewheel.min.js'], dest: 'dev/assets/scripts/vendor/'},
            {expand: true, cwd: 'bower_components/malihu-custom-scrollbar-plugin/', src: ['jquery.mCustomScrollbar.concat.min.js'], dest: 'dev/assets/scripts/vendor/'},
            {expand: true, cwd: 'src/scripts/proto', src: ['slider.js', 'book.js'], dest: 'dev/assets/scripts/proto/'}
        ]
    },
    css: {
        files: [
            {expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: ['bootstrap.min.css'], dest: 'dev/assets/style/vendor/'},
            {expand: true, cwd: 'bower_components/malihu-custom-scrollbar-plugin/', src: ['jquery.mCustomScrollbar.min.css'], dest: 'dev/assets/style/vendor/'}
        ]
    },
    font: {
        files: [
            {expand: true, cwd: 'src/font/', src: ['**'], dest: 'dev/assets/font/'},
            {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'dev/assets/font/'}
        ]
    },
    prod: {
        files: [
            {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'prod/assets/scripts/vendor/'},
            {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.min.js'], dest: 'prod/assets/scripts/vendor/'},
            {expand: true, cwd: 'bower_components/jquery-mousewheel/', src: ['jquery.mousewheel.min.js'], dest: 'prod/assets/scripts/vendor/'},
            {expand: true, cwd: 'bower_components/malihu-custom-scrollbar-plugin/', src: ['jquery.mCustomScrollbar.concat.min.js'], dest: 'prod/assets/scripts/vendor/'},
            {expand: true, cwd: 'src/scripts/proto', src: ['slider.js', 'book.js'], dest: 'prod/assets/scripts/proto/'},
            {expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: ['bootstrap.min.css'], dest: 'prod/assets/style/vendor/'},
            {expand: true, cwd: 'bower_components/malihu-custom-scrollbar-plugin/', src: ['jquery.mCustomScrollbar.min.css'], dest: 'prod/assets/style/vendor/'},
            {expand: true, cwd: 'src/font/', src: ['**'], dest: 'prod/assets/font/'},
            {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'prod/assets/font/'}
        ]
    }
};
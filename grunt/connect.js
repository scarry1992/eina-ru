module.exports = {
    server: {
        options: {
            port:8000,
            hostname:'*',
            livereload: 35729,
            base: {
                path: 'dev/',
                index: 'index.html'
            },
            open: true
        }
    }
};
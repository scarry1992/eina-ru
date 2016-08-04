module.exports = {
    options: {
        layoutdir: 'src/assemble/layouts/',
        layout: 'main.hbs',
        partials: 'src/assemble/partials/**/*.hbs',
        data: 'src/assemble/data/**/*.json'
    },
    dev: {
        expand: true,
        cwd: 'src/assemble/pages/',
        src: "**/*.hbs",
        dest: 'dev/',
        ext: '.html'
    },
    prod: {
        expand: true,
        cwd: 'src/assemble/pages/',
        src: "**/*.hbs",
        dest: 'prod/',
        ext: '.html'
    }
};
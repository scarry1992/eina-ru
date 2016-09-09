module.exports = {
    devCheck: {
        limit: 3,
        tasks: [
            'clean:dev'
        ]
    },
    devCompile: {
        //limit: 4,
        tasks: [
            ['assemble:dev', 'sass:dev', 'imagemin:dev', 'copy']
        ]
    },
    prodCheck: {
        limit: 3,
        tasks: [
            'clean:prod'
        ]
    },
    prodCompile: {
        //limit: 4,
        tasks: [
            ['sass:prod', 'copy:prod']
        ]
    }

};
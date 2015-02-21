module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			basic: {
			  src: ['app/app.js', 'app/**/*.js'],
			  dest: 'build/app.js'
			}
		},
		watch: {
			js: {
				files: [
					'app/**/*.js'
				],
				tasks: [
					//'jshint:work',
					'concat'
				]
			}
		}
	
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch']);
};
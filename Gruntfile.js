/*global module:false*/
module.exports = function (grunt) {

	grunt.initConfig({
		jshint : {
			src : ['Gruntfile.js', 'lib/**/*.js', 'src/config.js', 'test/node/**/*.js'],
			options : {
				node : true,
				expr: true,
				laxcomma : true,
				curly : true,
				eqeqeq : true,
				immed : true,
				latedef : true,
				newcap : true,
				noarg : true,
				sub : true,
				undef : true,
				boss : true,
				eqnull : true,
				browser : true,
				globals : {
					require : true,
					define : true,
					requirejs : true,
					describe : true,
					expect : true,
					it : true
				}
			}
		},
		watch : {
			files : '<%= jshint.src %>',
			tasks : ['jshint']
		},
		mocha : {
			all : ["test/**/.js"]
		}
	});

	// Load JSHint task
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test', ['mocha']);

};

module.exports=function(grunt){
    grunt.initConfig({
        cssmin:{
            target:{
                files:{
                    'src/css/output.css':['src/css/module1.css','src/css/module2.css']
                        }
                    }
             },
     
	 /*uglify{
            target:{
                files:{
                   'src/css/output.css':['src/css/module1.css','src/css/module2.css']
                                                                                
                     }
                         }
                                
							},
      watch{
           target:{
				files:{
                         'src/css/output.css':['src/css/module1.css','src/css/module2.css']
                                                                                
                        }
				}
                                
			},

	jshint{             //
	     target:{
                files:{
                    'src/css/output.css':['src/css/module1.css','src/css/module2.css']
                                                                                
                        }
                }
                                
         },*/
        });

grunt.loadNpmTasks('grunt-contrib-cssmin');
/*grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');*/
//alternative method to register task.
/*grunt.registerTask('default','This is default task',function(){   
                grunt.task.run(['cssmin']);
});*/
//grunt.registerTask('default',['cssmin']);

grunt.registerTask('cssTask','This is cssmin task',function(){   
                grunt.task.run(['cssmin']);
});
}

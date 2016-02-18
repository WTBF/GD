require.config({
  // baseUrl: 'js',
	paths : {
		// 'jquery' : 'lib/jquery-2.2.0.min',
		'tab' : 'components/tab/js/tab'
	},
	map: {
		'*': {
			'css': 'plugins/css.min'
		}
	},
	shim : {
		"tab": ['css!components/tab/css/tab.css']
	}
});

require(['tab'], function(d){
  new d.Tab({
  	name : ['找名企', '找职位', '简历中心', '我的求职'],
  	icon : ['&#xe60d;', '&#xe623;', '&#xe624;', '&#xe61f;'],
  });
});

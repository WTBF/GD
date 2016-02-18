var webpackConfig = function getConfig(opt) {
    var config = {
        watch : true,
        output: {
            filename: '[name].js'
        },
        module: {
            loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: "imports?define=>false" // 屏蔽amd加载方式
            }]
        },
        resolve: {
            //配置别名，在项目中可缩减引用路径
            alias: {
              jquery: "src/js/lib/jquery-2.2.0.min.js"
              // core: "./dest/js/core",
              // ui: "./dest/js/ui"
            },
            extensions: ['', '.js', '.json', '.coffee']
        },
        // plugins: [
        //     //提供全局的变量，在模块中使用无需用require引入
        //     new webpack.ProvidePlugin({
        //       jQuery: "jquery",
        //       $: "jquery"
        //     })
        // ],
        devtool: 'source-map'
    }
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt
    }
    return config
}

module.exports = webpackConfig

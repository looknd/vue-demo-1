var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成带hash的HTML 文件


module.exports = {

    //入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的app.js文件
    entry: path.resolve(__dirname, './src/app.js'),

    // 输出配置
    output: {
        // 输出路径是
        path: path.join(__dirname, '/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },

    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 使用babel,编译ES6语法
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
                // exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            }, {
                test: /\.css$/,
                loader: "css-loader?sourceMap!cssnext-loader"
            }, {
                test: /\.scss$/,
                loader: "css-loader?sourceMap!sass-loader!cssnext-loader"
            }
        ]
    },

    // vue: {
    //     loaders: {
    //         /*js: 'babel!eslint',*/
    //         less: 'vue-style!css!less',
    //         sass: 'vue-style!css!sass'
    //     }
    // },

    // 插件项
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        /*
        版本控制
        模块是把生成的带有md5戳的文件，插入到index.html中。
        通过index.tpl模板，最后在根目录下生成一个index.html
       */
        new HtmlWebpackPlugin({
            title: 'My VueDemo',
            filename: '../index.html',
            template: path.resolve(__dirname, './index.tpl'),
            inject: true
        })
    ],

    stats: {
        // Nice colored output
        colors: true
    },

    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名,require('file') 代替 require('file.coffee')
    resolve: {
        extensions: ['', '.js', '.vue', '.coffee']
    },

    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};

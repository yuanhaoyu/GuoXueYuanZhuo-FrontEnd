var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin(/*chunkName=*/'common', /*filename=*/'common.js');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'material-ui/styles/MuiThemeProvider']
   // vendor: ['material-ui/styles/MuiThemeProvider']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  // //enable dev source map
  // devtool: 'eval-source-map',
  // //enable dev server
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true
  // },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_PATH
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loaders: ['eslint'],
    //     include: APP_PATH
    //   }
    // ],
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //loaders: ['babel'],
        //include: APP_PATH,
        loaders: ['babel', 'babel?presets[]=es2015,presets[]=react,plugins[]=transform-object-rest-spread']
      },
      {
        test: /\.scss$/,
        //loaders: ['style', 'css', 'sass']
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {　　　　　
        test: /\.(png|jpg)$/,
        　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'　　　
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    // commonsPlugin,
    new ExtractTextPlugin("./styles.css"),
    new HtmlwebpackPlugin({
      title: '国学圆桌',
      template: 'my-index.html',
      inject: true,
      hash: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false, // remove all comments
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
}
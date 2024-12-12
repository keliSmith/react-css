import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const initWebpackConfig = (mode: "development" | "production"):Configuration => {
  const isPro:boolean = mode === 'production';

  return {
    target: 'web', // 默认打包成web平台的
    mode,
    devtool: "source-map",
    entry: path.resolve(__dirname, '../src/index.tsx'), // 文件的入口
    output: {
      filename: isPro ? 'js/[name].[chunkhash:8].js' : '[name].[hash:8].js', // 文件名
      path: path.resolve(__dirname, '../build') // 文件输出地址
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/i,
          type: 'asset'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset'
        },
        {
          test: /\.(txt|xml)$/i,
          type: 'asset'
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              }
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [
            isPro ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  // mode: "local",
                  // auto: true,
                  // exportGlobals: true,
                  localIdentName: "[local]_[hash:base64:5]",
                  localIdentContext: path.resolve(__dirname, "src"),
                  // localIdentHashSalt: "my-custom-hash",
                  // namedExport: true,
                  // exportLocalsConvention: "camelCase",
                  // exportOnlyLocals: false,
                },
              },
            },
            'postcss-loader',
          ]
        },
        {
          test: /\.less$/i,
          use: [
            isPro ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  // mode: "local",
                  // auto: true,
                  // exportGlobals: true,
                  localIdentName: "[local]_[hash:base64:5]",
                  localIdentContext: path.resolve(__dirname, "src"),
                  // localIdentHashSalt: "my-custom-hash",
                  // namedExport: true,
                  // exportLocalsConvention: "camelCase",
                  // exportOnlyLocals: false,
                },
              },
            },
            'postcss-loader',
            'less-loader',
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.css', '.less']
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'css-animation',
        filename: 'index.html',
        template: path.resolve(__dirname, './public.ejs'),
        hash: true,
        cache: false,
        inject: true,
        minify: {
          removeComments: true,
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
          minifyCSS: true // 缩小CSS样式元素和样式属性
        },
        nodeModules: path.resolve(__dirname, '../node_modules')
      }),
      new MiniCssExtractPlugin({
        filename: isPro ? 'css/[name].[contenthash:8].css'
          : 'css/[name].css'
      }),
    ]
  }
}

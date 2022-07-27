import Webpack, { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import {initWebpackConfig} from './webpack.config';
import { merge } from 'webpack-merge' // 文件合并

const prodConfig:Configuration = merge(initWebpackConfig('production'), {
    plugins: [
      new CleanWebpackPlugin()
    ]
})

  Webpack(prodConfig, (err:any, state:any) => {
    if (err) {
      console.log(err.stack || err)
    } else if (state.hasErrors()) {
      let err = ''
      state.toString({
        chunks: false,
        colors: true
      }).split(/\r?\n/).forEach((line:any) => {
        err += `    ${line}\n`
      })
      console.warn(err)
    } else {
      console.log(state.toString({
        chunks: false,
        colors: true
      }))
    }
  })
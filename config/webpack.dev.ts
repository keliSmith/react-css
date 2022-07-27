import Webpack, { Configuration } from 'webpack';
import {initWebpackConfig} from './webpack.config';
import WebpackDevServer from 'webpack-dev-server';


const devConfig:Configuration = initWebpackConfig('development');

// 启动dev服务
const compiler = Webpack(devConfig);
const devServerOptions = {
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true, // 热更新
    host: '127.0.0.1', // 地址
    port: '8081', // 端口
    open: true, // 是否自动打开
    setupExitSignals: true,
    compress: true
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
    console.log('Successfully started server on http://localhost:8081');
    await server.start();
};

runServer();
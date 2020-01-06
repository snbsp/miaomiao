module.exports = {
    // 提供一个接口
    devServer: {
        // 开发环境配置
        proxy: {
            // 代理
            '/api': {
                target: 'http://39.97.33.178', // 反向代理地址
                changeOrigin: true // 是否改变反向代理地址
            }
        }
    }
};

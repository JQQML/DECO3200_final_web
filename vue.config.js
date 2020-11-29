// // const PrerenderSpaPlugin = require("prerender-spa-plugin");
// // const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;
// // const path = require("path");

// 之前的源代码 
module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8005,
    // host:'192.168.199.109'
  },
  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
    //   config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    // }

    // config.plugins.push(
    //   new PrerenderSpaPlugin({
    //     // 生成文件的路径，也可以与webpakc打包的一致。
    //     // 下面这句话非常重要！！！
    //     // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
    //     staticDir: path.join(__dirname, "dist"),
    //     // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
    //     routes: ["/WarmTip", "/UserLicense", "/PrivacyPolicy"],
    //     // 这个很重要，如果没有配置这段，也不会进行预编译
    //     renderer: new Renderer({
    //       inject: {
    //         foo: "bar"
    //       },
    //       headless: false,
    //       // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //       renderAfterDocumentEvent: "render-event"
    //     })
    //   })
    // );
  }
}

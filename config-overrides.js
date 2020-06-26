const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
} = require('customize-cra');
const path = require('path');
const { getLessVars } = require('antd-theme-generator');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: getLessVars(path.join(__dirname, './src/styles/default.less')),
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src"),
        ["@common"]: path.resolve(__dirname, "src/common"),
        ["@pages"]: path.resolve(__dirname, "src/pages"),
    })
);
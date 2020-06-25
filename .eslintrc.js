module.exports = {
    // 运行环境极其局全局变量, 这里可以设置环来做区别判断
    env: {
        browser: true, //浏览器环境
        es6: true, // es6语法
        commonjs: true,
        node: true
    },

    // 规则继承  使用的扩展库
    extends: [
        "plugin:react/recommended",
        "eslint:recommended",
        "airbnb"
    ],

    // 指定配置文件根目录：表示当前文件为eslint的根配置文件，逐层查找时无需往更上一级的文件目录中进行搜索
    // root: true,

    // 可以全局使用变量
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        "React": true,
        "Babel": true,
    },

    // 解析器用于解析代码
    parser: "babel-eslint",

    // eslint解析器配置项
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        //指定js的导入方式，module是指通过模块导入，默认值为script(表示通过script标签引入)
        sourceType: "module"
    },

    plugins: [
        //提供插件
        "react", "react-hooks"
    ],

    rules: {
        /**
        *
        * off 或 0：表示不验证规则。
        * warn 或 1：表示验证规则，当不满足时，给警告
        * error 或 2 ：表示验证规则，不满足时报错
        *
        */
        "linebreak-style": ["error", "windows"], // 强制使用一致的换行风格
        // 禁止缩进错误
        "indent": 0,
        quotes: [
            2,
            "double",
            {
                allowTemplateLiterals: true
            }
        ], //引号类型 ``(backtick)  ""(double) ''(single)
        "no-console": 1,
        "semi": 2,  // 强制使用分号
        "camelcase": 2, //强制驼峰法命名

        //////////////
        // React.相关 //
        //////////////
        "react/jsx-uses-react": 2, // 防止React被错误地标记为未使用
        "react/jsx-uses-vars": 2, // 防止将JSX中使用的变量错误地标记为未使用
        "react/prop-types": 1, // 防止在React组件定义中缺少道具验证
        "react/jsx-indent": [2, 4],  // 验证JSX缩进
        "react/jsx-indent-props": [2, "first"],
        "react/jsx-props-no-spreading": [{   // 禁止传播JSX道具
            "html": "ignore",
            "custom": "ignore",
            "explicitSpread": "ignore",
        }],

        "react-hooks/rules-of-hooks": "error"

        //////////////
        // ES6.相关 //
        //////////////
    }
};

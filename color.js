
const { generateTheme } = require("antd-theme-generator");
const path = require("path");

const options = {
    antDir: path.join(__dirname, "./node_modules/antd"),
    stylesDir: path.join(__dirname, "./src/styles"),
    varFile: path.join(__dirname, "./src/styles/default.less"), // default path is Ant Design default.less file
    mainLessFile: path.join(__dirname, "./src/styles/index.less"),
    themeVariables: ["@primary-color"],
    outputFilePath: path.join(__dirname, "./public/color.less"), // if provided, file will be created with generated less/styles
};

generateTheme(options)
    .then(() => {
        console.log("Theme generated successfully");
    })
    .catch((error) => {
        console.log("Error", error);
    });

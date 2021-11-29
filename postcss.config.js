/*
 * @Author: indeex
 * @Date: 2021-01-29 11:35:56
 * @Email: indeex@qq.com
 */
module.exports = {
    "plugins": {
        "postcss-pxtorem": {
            rootValue: 37.5,
            propList: ["*"],
            selectorBlackList: [".norem"],
        }
    }
}
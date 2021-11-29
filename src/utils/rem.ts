/*
 * @Author: indeex
 * @Date: 2021-01-29 11:37:24
 * @Email: indeex@qq.com
 */
const baseSize = 37.5

function setRem(){
    const scale = document.documentElement.clientHeight / 375;
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + "px";
}

setRem();

window.onresize = function(){
    setRem();
}
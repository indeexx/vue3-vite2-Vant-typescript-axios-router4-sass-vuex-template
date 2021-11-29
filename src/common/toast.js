/*
 * @Author: indeex
 * @Date: 2021-08-30 17:27:45
 * @Email: indeex@qq.com
 */
var toast = function(msg, t) {
    var tips = document.getElementById("iTips");
    if (tips) return;
    tips = document.createElement("div");
    tips.setAttribute("id", "iTips");
    tips.innerText = msg || "提示...";
    tips.style.position = "fixed";
    tips.style.padding = "0.4rem 0.3rem";
    tips.style.minWidth = "80%";
    tips.style.fontSize = "0.4rem";
    tips.style.lineHeight = "0.4rem";
    tips.style.textAlign = "center";
    tips.style.backgroundColor = "rgba(0,0,0,0.6)";
    tips.style.zIndex = "1000";
    tips.style.color = "#FFFFFF";
    tips.style.borderRadius = "0.2rem";
    tips.style.top = "50%";
    tips.style.left = "50%";
    tips.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(tips);
    var tim = setTimeout(function() {
        if (tips && document.getElementById("iTips")) document.body.removeChild(tips);
        if (document.getElementById("iTips")) document.body.removeChild(document.getElementById("iTips"));
        tips = null;
        clearTimeout(tim);
    }, t || 3000);
}
export default toast;
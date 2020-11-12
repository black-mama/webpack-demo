import _ from "lodash";
import printMe from "./print";
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack','ok?'], ' ');

    const btn = document.createElement('button');
    btn.innerHTML = "点击此处";
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
import vars from '../_vars';
const {bodyEl, customCursor} = vars;

bodyEl.onmousemove = function (e){
customCursor.style.position = 'fixed';
customCursor.style.left = e.clientX + -10 + 'px';
customCursor.style.top = e.clientY + -10 + 'px';
}
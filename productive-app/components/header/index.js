import './header.css'
import './Logo.svg'
import template from  './markup.jade'

document.addEventListener('DOMContentLoaded',function () {
    var node = document.createElement('div');
    node.innerHTML = template();
    document.body.appendChild(node.firstElementChild)
    console.log(node)
})

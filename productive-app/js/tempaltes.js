console.log(document.getElementsByClassName('button-holder')[0].innerHTML);
document.getElementsByClassName('button-holder')[0].innerHTML = document.getElementById('settings-template-button-next-green').innerHTML;
document.getElementsByClassName('button-holder')[0].appendChild(document.getElementById('settings-template-button-next-green').content.cloneNode(true));


webpackJsonp([0],[function(e,t,n){n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),e.exports=n(15)},,,function(e,t){"use strict";!function(){window.app={},window.app.Renderer={clearContent:function(e,t){if(t)e.parentNode.removeChild(e);else for(;e.firstElementChild;)e.removeChild(e.firstElementChild);app.EventBusLocalTimer.timer&&clearInterval(app.EventBusLocalTimer.timer.timeout)},renderButtons:function(e,t){var n=document.createDocumentFragment(),s=document.createElement("div");t?s.classList.add(t):s.classList.add("button-holder"),n.appendChild(s);for(var i=0;i<e.length;i++){for(var a=0;a<e[i].class.length;a++)e[i].node.classList.add(e[i].class[a]);e[i].node.innerHTML=e[i].innerHtml,s.appendChild(e[i].node),e[i].listener&&e[i].node.addEventListener("click",e[i].listener)}document.getElementById("app-body").appendChild(n)}}}()},function(e,t){"use strict";app.Renderer.helpers={transformTime:function(e){var t="",n="";return e/60>=1&&(t=parseInt(e/60)+"h "),0!==parseInt(e%60)&&(n=parseInt(e%60)+"m"),t+n},arrayToObject:function(e){for(var t={},n=0;n<e.length;n++)t[n]=e[n];return t},objectToArray:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function e(){n(this,e),this.topics={},this.subscribe=function(e,t){this.topics[e]||(this.topics[e]=[]),this.topics[e].push(t)},this.publish=function(e,t){!this.topics[e]||this.topics[e].length<1||this.topics[e].forEach(function(e){e(t||{})})}};!function(){app.EventBus=new s;var e=window.app.EventBus;e.subscribe("login",function(){var e=window.app.Renderer;e.clearContent(document.getElementById("app-body")),e.renderLog()}),e.subscribe("settings",function(){var e=window.app.Renderer;e.clearContent(document.getElementById("app-body")),e.renderHeader(),e.renderTitleSettings(),e.renderSettingsMain();var t=[document.createElement("button"),document.createElement("button")];t=[{node:document.createElement("button"),class:["button-row-2","button-green"],innerHtml:"Save",listener:function(){app.User.saveSettings()}},{node:document.createElement("button"),class:["button-row-2","button-blue"],innerHtml:"Next",listener:function(){app.router.moveTo("tasklist")}}],e.renderButtons(t)}),e.subscribe("settings-2",function(){var e=window.app.Renderer;e.clearContent(document.getElementById("app-body")),e.renderHeader(),e.renderTitleSettings(),e.renderSettingsCategories();var t=[document.createElement("button"),document.createElement("button")];t=[{node:document.createElement("button"),class:["button-row-2","button-blue"],innerHtml:"Back"},{node:document.createElement("button"),class:["button-row-2","button-green"],innerHtml:"Save",listener:function(){User.saveSettings()}}],e.renderButtons(t)}),e.subscribe("reports",function(){var e=window.app.Renderer;e.clearContent(document.getElementById("app-body")),e.renderHeader(),e.renderReports()}),e.subscribe("taskList",function(){var e=window.app.Renderer;e.clearContent(document.getElementById("app-body")),e.renderHeaderDetailed(),e.renderTitleTaskList(),e.renderReportsDaily(),e.renderTitleTaskListGlobal(),e.renderReportsGlobal()}),e.subscribe("goToTimer",function(e){var t=window.app.Renderer;app.EventBusLocalTimer.topics={},t.clearContent(document.getElementById("app-body")),t.renderHeader(),t.renderTimer(e)}),e.subscribe("no-user",function(){app.EventBus.publish("login")}),e.subscribe("notify",function(e){app.Renderer.addNotification(e)}),e.subscribe("initData",function(){var e=window.app.User;e.getData(e.currentLogin,"tasks",function(t){t||(e.dataSnapShot=JSON.parse(localStorage.getItem("prodApp")).dataSnapShot)}),e.getSettings(e.currentLogin,function(t){t||(e.dataSnapShot=JSON.parse(localStorage.getItem("prodApp")).settings)})})}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=function(){function e(){n(this,e),this.currentLogin="",this.settings={},this.trashData=[],this.reportsData={},this.dataSnapShot={}}return s(e,[{key:"getSettings",value:function(e,t){var n=database.ref("users/"+e+"/user_settings");n.on("value",function(e){this.settings=e.val(),t(this.settings)}.bind(this))}},{key:"saveSettings",value:function(){var e=this;database.ref("users/"+this.currentLogin+"/user_settings").set(this.settings).then(function(){app.EventBus.publish("notify",{msg:"Settings saved",type:"info"})}),localStorage.setItem("prodApp",JSON.stringify({dataSnapShot:e.dataSnapShot,settings:e.settings}))}},{key:"getData",value:function(e,t,n){var s=database.ref("users/"+e+"/"+t);s.on("value",function(e){this.dataSnapShot=e.val(),n(this.dataSnapShot)}.bind(this))}},{key:"setData",value:function(e,t,n){database.ref("users/"+e+t).set(n).then(function(){app.EventBus.publish("notify",{msg:"Moved to daily list",type:"info"})})}},{key:"saveData",value:function(e,t,n){database.ref("users/"+e+t).update(n)}},{key:"setTaskData",value:function(e,t,n){database.ref("users/"+e+t).set(function(){return{title:document.getElementById("title-input").value,description:document.getElementById("description-input").value,category:function(){for(var e=document.getElementsByClassName("categories-choose-list")[0],t=0;t<e.children.length;t++)if(e.children[t].firstElementChild.checked)return e.children[t].firstElementChild.value.toLowerCase()}(),deadline:function(){var e=document.getElementById("deadline-input").value,t={fullDate:e,month:e.slice(0,e.indexOf(" ")),day:e.slice(e.indexOf(" ")+1,e.indexOf(",")),year:e.slice(e.indexOf(",")+2)};return t}(),estimation:function(){for(var e=document.getElementsByClassName("estimation-range")[0],t=0,n=0;e.children[t];t++)e.children[t].classList.contains("estimated")&&n++;return"estimate-"+n}(),priority:function(){for(var e=document.getElementsByClassName("categories-choose-list")[1],t=0;t<e.children.length;t++)if(e.children[t].firstElementChild.checked)return e.children[t].firstElementChild.value.toLowerCase()}()}}()).then(function(){app.EventBus.publish("notify",{msg:"Task edited",type:"info"})})}},{key:"deleteTaskData",value:function(e,t){database.ref("users/"+e+t).remove().then(function(){app.EventBus.publish("notify",{msg:"Task deleted",type:"warning"})})}},{key:"updateTasksData",value:function(){var e=this,t="users/"+this.currentLogin+"/tasks",n=database.ref().child(t).push().key;t+="/"+n;var s={title:document.getElementById("title-input").value,description:document.getElementById("description-input").value,category:function(){for(var e=document.getElementsByClassName("categories-choose-list")[0],t=0;t<e.children.length;t++)if(e.children[t].firstElementChild.checked)return e.children[t].firstElementChild.value.toLowerCase()}(),deadline:function(){var e=document.getElementById("deadline-input").value,t={fullDate:e,month:e.slice(0,e.indexOf(" ")),day:e.slice(e.indexOf(" ")+1,e.indexOf(",")),year:e.slice(e.indexOf(",")+2)};return t}(),estimation:"estimate-"+document.getElementsByClassName("estimation-range")[0].estimation,priority:function(){for(var e=document.getElementsByClassName("categories-choose-list")[1],t=0;t<e.children.length;t++)if(e.children[t].firstElementChild.checked)return e.children[t].firstElementChild.value.toLowerCase()}()};database.ref(t).update(s).then(function(){app.EventBus.publish("notify",{msg:"Task added",type:"success"})}),localStorage.setItem("prodApp",JSON.stringify({dataSnapShot:e.dataSnapShot,settings:e.settings}))}}]),e}();!function(){app.User=new i}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=function(){function e(){n(this,e),this.topics={}}return s(e,[{key:"subscribe",value:function(e,t){this.topics[e]||(this.topics[e]=[]),this.topics[e].push(t)}},{key:"publish",value:function(e,t){!this.topics[e]||this.topics[e].length<1||this.topics[e].forEach(function(e){e(t||{})})}},{key:"unsubscribe",value:function(e){delete this.topics[e]}}]),e}();!function(){app.EventBusLocal=new i;var e=window.app.EventBusLocal,t=window.app.User;e.subscribe("trash-drop",function(e){var n=e.e,s=e.context;n.target.classList.contains("category")&&!n.target.classList.contains("toogled")&&n.target.parentNode.classList.contains("trash")?(n.target.innerHTML="&#xe910;",n.target.classList.add("toogled"),s.model.checkTrashBuffer(n.target.parentNode.getAttribute("key"))&&(t.trashData.push(n.target.parentNode.getAttribute("key")),t.trashData.length>0?(document.getElementsByClassName("trash-counter")[0].style.display="inline-block",document.getElementsByClassName("trash-counter")[0].innerHTML=t.trashData.length):document.getElementsByClassName("trash-counter")[0].style.display="none")):n.target.classList.contains("toogled")&&n.target.parentNode.classList.contains("trash")&&(n.target.innerHTML="&#xe912;",n.target.classList.remove("toogled"),t.trashData.splice(t.trashData.indexOf(n.target.parentNode.getAttribute("key")),1),t.trashData.length>0?(document.getElementsByClassName("trash-counter")[0].style.display="inline-block",document.getElementsByClassName("trash-counter")[0].innerHTML=t.trashData.length):document.getElementsByClassName("trash-counter")[0].style.display="none")}),e.subscribe("trash-check-all",function(e){for(var n=document.getElementsByClassName("task"),s=0;s<n.length;s++)if(n[s].parentNode.classList.contains(e)){n[s].firstElementChild.innerHTML="&#xe910;",n[s].firstElementChild.classList.add("toogled");var i=n[s].getAttribute("key");t.trashData.indexOf(i)===-1&&(t.trashData.push(i),t.trashData.length>0?(document.getElementsByClassName("trash-counter")[0].style.display="inline-block",document.getElementsByClassName("trash-counter")[0].innerHTML=t.trashData.length):document.getElementsByClassName("trash-counter")[0].style.display="none")}}),e.subscribe("trash-uncheck-all",function(e){for(var n=document.getElementsByClassName("task"),s=0;s<n.length;s++)if(n[s].parentNode.classList.contains(e)){n[s].firstElementChild.innerHTML="&#xe912;",n[s].firstElementChild.classList.remove("toogled");var i=n[s].getAttribute("key");t.trashData.indexOf(i)!==-1&&(t.trashData.splice(t.trashData.indexOf(i),1),t.trashData.length>0?(document.getElementsByClassName("trash-counter")[0].style.display="inline-block",document.getElementsByClassName("trash-counter")[0].innerHTML=t.trashData.length):document.getElementsByClassName("trash-counter")[0].style.display="none")}}),e.subscribe("trash-refresh",function(e){document.getElementsByClassName("trash-counter")[0].innerHTML=t.trashData.length,document.getElementsByClassName("trash-counter")[0].style.display="none",t.trashData=[]}),e.subscribe("trash-on",function(e){var t=document.getElementsByClassName("task");e.classList.add("active");for(var n=0;n<t.length;n++)t[n].classList.add("trash");var s=document.getElementsByClassName("left-side");for(n=0;n<s.length;n++)s[n].classList.remove("hidden")}),e.subscribe("trash-off",function(e){var t=document.getElementsByClassName("task");e.classList.remove("active");for(var n=0;n<t.length;n++)t[n].classList.remove("trash");var s=document.getElementsByClassName("left-side");for(n=0;n<s.length;n++)s[n].classList.add("hidden")})}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=function(){function e(){n(this,e),this.topics={}}return s(e,[{key:"subscribe",value:function(e,t){this.topics[e]||(this.topics[e]=[]),this.topics[e].push(t)}},{key:"publish",value:function(e,t){!this.topics[e]||this.topics[e].length<1||this.topics[e].forEach(function(e){e(t||{})})}},{key:"unsubscribe",value:function(e){delete this.topics[e]}}]),e}();!function(){app.EventBusLocalTimer=new i}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=function(){function e(){n(this,e),this.routes={login:{module:"no-user",name:"Login",url:"login"},pomodoras:{module:"settings",name:"Pomodoras",url:"settings-pomodoras"},categories:{module:"settings-2",name:"Categories",url:"settings-categories"},tasklist:{module:"taskList",name:"Task List",url:"task-list"},reports:{module:"reports",name:"Reports",url:"report"},timer:{module:"goToTimer",name:"Timer",url:"timer"}},this.defaultState="tasklist",this.currentState="tasklist"}return s(e,[{key:"moveTo",value:function(e,t){var n=this.routes[e];history.pushState({path:e},n.name,n.url),app.EventBus.publish(n.module,t),this.currentState=e}},{key:"replaceState",value:function(e){var t=this.routes[e];return history.replaceState({path:e},t.name,t.url),app.EventBus.publish(t.module),this}},{key:"resetState",value:function(){return history.replaceState("random string","random string","/random string"),this}},{key:"bind",value:function(){var e=this;window.addEventListener("popstate",function(t){app.EventBus.publish(e.routes[t.state.path].module)})}}]),e}();!function(){app.router=new i,app.router.bind()}()},function(e,t){"use strict";!function(e){e.fn.tips=function(t,n){var s,i,a,o=e(this);n?(s=85,n=90):(s=0,n=0),e(".tipp").length?i=e(".tipp"):(i=e('<div class="tipp"><span class="triangle"></span><p class="tip-text"></p></div>'),a=i.find(".triangle"),e("body").append(i),i.css({position:"absolute",width:"113px",padding:"8px 3px",backgroundColor:"#cedeea",zIndex:9999999999,color:"#3c5162",borderRadius:"3px",boxSizing:"border-box",textAlign:"center",display:"none",font:"13px HelveticaBold, sans-serif",fontWeight:"bold"}),a.css({content:"",display:"block",width:"0",height:"0",position:"absolute",borderLeft:"5px solid ",borderRight:"5px solid ",borderBottom:"5px solid ",borderColor:"transparent",borderBottomColor:"#cedeea",left:"8px",top:"-5px"})),a=i.find(".triangle");var r=i.find(".tip-text"),l={mouseEnterListener:function(e){e.target!==i&&e.target!==a&&(i.css({top:e.pageY+12+"px",left:e.pageX-10-n+"px",display:"block"}),a.css({left:8+s+"px"}),r.html(t)),o.mousemove(function(e){e.target!==i&&e.target!==a&&(i.css({top:e.pageY+30+"px",left:e.pageX-10-n+"px"}),a.css({left:"8px"+s}))})},offVision:function(e){o.off("mousemove"),i.css({display:"none"})}};return o.mouseenter(l.mouseEnterListener),o.mouseleave(l.offVision),o.click(l.offVision),this},e.fn.accordeon=function(){var t=e(this),n=t.find(".accordeon-head"),s=function(t){var n=e("#"+e(t.target).attr("linked_block"));n.is(":visible")?n.slideUp("slow"):n.slideDown("slow")};return t.off("click",s),t.on("click",n,s),this}}(window.$)},function(e,t){"use strict";!function(){window.Notifications={spawnNotification:function(e){if("Notification"in window)if("granted"===Notification.permission){var t={body:e.body,icon:e.icon},n=new Notification(e.title,t);setTimeout(n.close.bind(n),5e3)}else"denied"!==Notification.permission&&Notification.requestPermission(function(t){if("granted"===t){var n={body:e.body,icon:e.icon},s=new Notification(e.title,n);setTimeout(s.close.bind(s),5e3)}});else alert("This browser does not support system notifications")}}}()},function(e,t){"use strict";window.addEventListener("offline",function(e){Notifications.spawnNotification({body:"gone offline",title:"msg",icon:"Global/img/question-mark.png"}),app.EventBus.publish("notify",{msg:"Gone offline",type:"fail"})}),window.addEventListener("online",function(e){Notifications.spawnNotification({body:"gone online",title:"msg",icon:"Global/img/question-mark.png"}),app.EventBus.publish("notify",{msg:"Gone online",type:"success"})})},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){this.view=e,this.eBus=t}var a=n(14),o=s(a);i.prototype={init:function(){this.eBus.subscribe("auth",this.view.auth),this.eBus.subscribe("logOut",this.view.logOut),this.eBus.publish("login"),firebase.auth().onAuthStateChanged(function(e){var t=window.app.EventBus,n=window.app.router,s=window.app.User;if(e||n.replaceState("login"),e){s.currentLogin=e.email.slice(0,e.email.search("@"));var i=location.pathname.slice(1);for(var a in n.routes)n.routes.hasOwnProperty(a)&&i===n.routes[a].url&&(i=a);n.routes[i]&&"login"!==i&&"timer"!==i?n.replaceState(n.currentState).moveTo(i):n.resetState().replaceState(n.defaultState),t.publish("initData")}})}},document.addEventListener("DOMContentLoaded",function(){app.loginCtrl=new i(new o.default(app.EventBus),app.EventBus),app.loginCtrl.init()})},function(e,t){"use strict";function n(e){this.eBus=e}Object.defineProperty(t,"__esModule",{value:!0}),n.prototype.auth=function(e){var t=document.getElementById("name_input").value,n=document.getElementById("pw_input").value;firebase.auth().signInWithEmailAndPassword(t,n).catch(function(e){for(var t=document.getElementsByClassName("invalid_msg"),n=0;n<t.length;n++)t[n].style.display="block";app.EventBus.publish("notify",{msg:"Invalid login/password",type:"fail"})})},n.prototype.logOut=function(){firebase.auth().signOut()},t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),a=function(){function e(){var t=this;n(this,e),this.results=[],this.iteration=0,this.valid=!0,this.defaultFns={success:function(e){e.removeClass?e.removeClass("error-field"):e.classList.remove("error-field")},error:function(e){e.addClass?e.addClass("error-field"):e.classList.add("error-field")}},this.methods={empty:function(e){0===e.val.trim().length&&(t.results[t.iteration].push(e.title+" can't be empty"),t.valid=!1)},maxLength:function(e,n){e.val.length>n.len&&(t.results[t.iteration].push(e.title+" maximum of "+n.len+" characters"),t.valid=!1)},checked:function(e){var n=!1;if(Array.isArray(e.node))for(var s=0;s<e.node.length;s++)e.node[s].checked&&(n=!0);else e.node.checked&&(n=!0);n||(t.results[t.iteration].push(e.title+" checkbox must be checked"),t.valid=!1)},containClass:function(e,n){var s=!1;if(Array.isArray(e.node))for(var i=0;i<e.node.length;i++)e.node[i].classList.contains(n.askingClass)&&(s=!0);else e.node.classList.contains(n.askingClass)&&(s=!0);s||(t.results[t.iteration].push("checkbox must be checked"),t.valid=!1)}}}return i(e,[{key:"validate",value:function(e){for(var t=0;t<e.length;t++){this.results.push([]),this.createConfig(e[t]),this.valid=!0;for(var n=this.conf.options,i=this.conf.target,a=0;a<n.length;a++)"object"===s(this.conf.options[a])?this.methods[n[a].name](i,n[a].params):this.methods[n[a]](i);this.conf.preventAction||(this.valid?this.conf.success(i.origin):this.conf.error(i.origin)),this.iteration++}return this.results}},{key:"createConfig",value:function(e){var t=this;this.conf={target:{val:e.target.value,node:e.target},options:e.options,success:e.success||t.defaultFns.success,error:e.error||t.defaultFns.error,preventAction:e.preventAction||!1},this.conf.target.origin=e.origin||this.conf.target.node,this.conf.target.origin.previousElementSibling&&(this.conf.target.title=this.conf.target.origin.previousElementSibling.innerText)}}]),e}();t.default=a}]);
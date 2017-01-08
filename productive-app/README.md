#phase1
###task-list.html
 Modal windows  can be showed via their buttons :
<li>( **+ button(in header)**</li>
<li> edit button in task-node</li>
<li>trash button in task-node)</li>

>*For details look in js folder. Only to show them.*

 Top notification block can be enabled via deselect of    `display:none`    property of `.notification-wrap-top` class - element.
 Task nodes are **li** elements from one same template(**templates/templates.html** - `id='task-list-node'` which customised by adding classes to `li`(manually right now, later maybe can be parsed from task-object).
>Same to notifications (**templates/templates.html** - `id='notification-node'`);

 Task nodes settings classes are divided by types :
 
 + categories
    - work
    - education
    - sport
    - other
    - hobby,
 + urgency
    - urgent
    - high
    - medium
    - low
 + estimation
    -estimate-1
    -estimate-2
    -estimate-3
    -estimate-4

>One of each types added to the class attribute (like class='sport low estimate-1').

Notification classes : 

 + info-pomodora-type
 + warning-pomodora-type
 + failed-pomodora-type
 + success-pomodora-type *(one of them should be added)*
 
#phase2
###reports.html
 
 + Click on **day/week/month** tab to change graphs
 + Total tasks updated automatically after graph render
 
###timer.html
 + Outer circle color can be changed after changing its container class depending on catergory
 + Animation can be paused if `start button` pressed

#phase3
###components -> settings
 1. consist of 2 components
   + **visualisation component**
     * `controller` listens to dependent data **component** which should be connected to him
     * `controller` listens to changes on model data
     * `model` fires custom **Event** if data was changed 
     * `controller` observes on `model` state and launch `view` visualisation render methods after **Event** interception
   + **data component**
     * collect data from hes input fields and place it valid representation in hes **Event** obj
     * fires custom **Event**
     * **Event** intercepted by **controller** and call `dataUpdate`  method of model  with data value of  **Event** after
     > 2 **Events** total : input-changed of data **component** and data-changed of `model`
     > Both are intercepted by `controller`
 2. child classes may be created from existing `controller, view, model` to override some of methods for new **strategy** change approach
 3. components can be detached or changed to another data component
 4. the only dependency is that visualization component should listen over data component
 5. controller listenTo method was made for case if we need different reactions on differend events from different components

#phase4
##login data
- login: Oleksandr_Chornobai@gmail.com, 
- pw: 4180029818

##logic
- every components loads have `index.js` (entry for webpack )
- each index requested translate hes own render function in `Global View.js` 
- `app.js` is webpack output, which contain all index.js files from each component
- further to render requested component simply call hes own render func from GlobalView
- these functions are used in `renderBus.js` to create a chains for render different pages which activated on publish event
- **templates** contains
    - component own css(deleted with component so styles cant stack)
    - some data in most cases (default locals argument) of template(locals) func
    - simple js cycles etc
    - html
- each component works independent from each other, 
  - in most cases getting data from `user.js` model
  - a small connection in local eventBus in **task-list**
- firebase watches over changes on **User authState**, when no user present - redirect to **login**
- you can use back and forward browser buttons (you cant back to login page)
- url changes depending on which page you currently are

###components 
  + **header**
    * common header
    * task-list header
  + **login** - signed via firebase `firebase.auth().signInWithEmailAndPassword` (possible to add other users in firebase)
  + **modals** 
    * add task
    * edit task
  + **reports** - data mocked in firebase
  + **settings** - **next** button moves to **task-list**, **save** button saves settings in firebase
  + **task-list** - notifications isn't working (small bug in tasks filter)
  + **timer** - gets data from task to render himself and start count, other features isn't working
  + **title** - set of different titles

>everything other seems to works properly, im not sure about notifications but timer isnt required to work on current stage



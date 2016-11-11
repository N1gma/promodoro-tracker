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
 + Outer circle color can be changed after changing its container class depending on category
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





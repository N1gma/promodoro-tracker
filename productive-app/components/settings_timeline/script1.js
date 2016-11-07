document.addEventListener("DOMContentLoaded", function component1() {
    var timeline1 = new TimeLine(document.getElementsByClassName('timeline-container')[0]);
    timeline1.initTimeline();
    timeline1.renderTimeline(getValuesFromInput());
    function TimeLine(container) {
        var timelineHead = 'Your cycle';
        var timelineBody;
        var timeLineLabels;
        this.initTimeline = function () {
            var fragment = document.createDocumentFragment();
            var head = fragment.appendChild(document.createElement('h3'));
            var body = fragment.appendChild(document.createElement('div'));
            var timelabels = fragment.appendChild(document.createElement('div'));
            head.classList.add('graph-head');
            head.innerHTML = timelineHead;
            body.classList.add('timeline');
            timelabels.classList.add('timelabels');
            timelineBody = body;
            timeLineLabels = timelabels;
            container.appendChild(fragment);
        };
        this.renderTimeline = function (data) {
            var fragment = document.createDocumentFragment();
            var fragment2 = document.createDocumentFragment();
            /*var timePointer = 0;
            var markTmpl  = document.createElement('span');
            markTmpl.appendChild(document.createElement('span'));
            markTmpl.classList.add('time-mark');*/
            //timelabelsmark--------------------
            fragment2.appendChild(timeLineLabels);
            var labelsTotal = parseInt(data.general/data['WORK TIME']+data['SHORT BREAK']);
            var labelWidth = (data['WORK TIME']+data['SHORT BREAK'])/data.general*100 + '%';
            var timeLabel  = document.createElement('div');
            timeLabel.classList.add('timelabel');
            for(var i = 0;i<labelsTotal;i++){
                fragment2.appendChild(timeLabel);
            }
            //part1------------------------------------
            for (var i = 0; i < data['WORK ITERATION']; i++) {
                var work = document.createElement('div');
                work.classList.add('work');
                work.style.width = data['WORK TIME'] / data.general * 100 + '%';
                fragment.appendChild(work);
                if(i!=data['WORK ITERATION']-1){
                    var breakk = document.createElement('div');
                    breakk.classList.add('breakk');
                    breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
                    fragment.appendChild(breakk);

                }
                /*var markFragment = markTmpl.cloneNode(true);
                timePointer +=data['WORK TIME'] + data['SHORT BREAK'];
                markFragment.innerHTML += transformTime(timePointer);
                markFragment.style.left = (timePointer/ (data.general) * 100) + '%';
                fragment.appendChild(markFragment);*/
            }
            //part2------------------------------------
            var longbreakk = document.createElement('div');
            longbreakk.classList.add('longbreakk');
            longbreakk.style.width = data['LONG BREAK'] / data.general * 100 + '%';
            fragment.appendChild(longbreakk);
           /* timePointer+=data['LONG BREAK'];
            markFragment.innerHTML += transformTime(timePointer);
            markFragment.style.left = (timePointer/ (data.general) * 100) + '%';
            fragment.appendChild(markFragment);*/
            //part3------------------------------------
            for (var i = 0; i < data['WORK ITERATION']; i++) {
                if(i!=0){
                    var breakk = document.createElement('div');
                    breakk.classList.add('breakk');
                    breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
                    fragment.appendChild(breakk);
                }
                var work = document.createElement('div');
                work.classList.add('work');
                work.style.width = data['WORK TIME'] / data.general * 100 + '%';
                fragment.appendChild(work);
            }
            timelineBody.appendChild(fragment);
        }
    }
    function getValuesFromInput() {
        var data = {};
        var inputValues = document.getElementsByClassName('select-field');
        var dataTitles = document.getElementsByClassName('opt-title');
        for (var i = 0; i < inputValues.length; i++) {
            data[dataTitles[i].innerHTML] = parseInt(inputValues[i].value);
        }
        data.general = (data['WORK TIME']* data['WORK ITERATION'] + (data['SHORT BREAK']* (data['WORK ITERATION']-1))) * 2 + data['LONG BREAK'];
        console.log(data);
        return data;
    }
    function transformTime(time){
        var hours ='';
        var minutes ='';
        if(time/60>=1)  hours = parseInt(time/60)+'h ';
        if(parseInt(time%60)!=0)  minutes = parseInt(time%60)+'m';
        return hours + minutes;
    }

});
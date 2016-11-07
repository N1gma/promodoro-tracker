document.addEventListener("DOMContentLoaded", function component1() {
    var timeline1 = new TimeLine(document.getElementsByClassName('timeline-container')[0]);
    timeline1.initTimeline();
    timeline1.renderTimeline(getValuesFromInput());
    function TimeLine(container) {
        var timelineHead = 'Your cycle';
        var timelineBody;
        this.initTimeline = function () {
            var fragment = document.createDocumentFragment();
            var head = fragment.appendChild(document.createElement('h3'));
            var body = fragment.appendChild(document.createElement('div'));
            head.classList.add('graph-head');
            head.innerHTML = timelineHead;
            body.classList.add('timeline');
            timelineBody = body;
            container.appendChild(fragment);
        };
        this.renderTimeline = function (data) {
            var fragment = document.createDocumentFragment();
            var timePointer = 0;
            var markTmpl  = document.createElement('span');
            markTmpl.appendChild(document.createElement('span'));
            markTmpl.classList.add('time-mark');
            //part1------------------------------------
            for (var i = 0; i < data['WORK ITERATION']; i++) {
                var work = document.createElement('div');
                work.classList.add('work');
                work.style.width = data['WORK TIME'] / data.general * 100 + '%';
                fragment.appendChild(work);
                var breakk = document.createElement('div');
                breakk.classList.add('breakk');
                breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
                fragment.appendChild(breakk);

                var markFragment = markTmpl.cloneNode(true);
                timePointer +=data['WORK TIME'] + data['SHORT BREAK'];
                markFragment.innerHTML += transformTime(timePointer);
                markFragment.style.left = (timePointer/ (data.general) * 100) + '%';
                fragment.appendChild(markFragment);
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
                var breakk = document.createElement('div');
                breakk.classList.add('breakk');
                breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
                fragment.appendChild(breakk);
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
        data.general = ((data['WORK TIME'] + data['SHORT BREAK']) * data['WORK ITERATION']) * 2 + data['LONG BREAK'];
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
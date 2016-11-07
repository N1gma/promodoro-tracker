document.addEventListener("DOMContentLoaded", function component1() {
    var timeline1 = new TimeLine(document.getElementsByClassName('timeline-container')[0]);
    timeline1.initTimeline();
    timeline1.renderTimeline(getValuesFromInput());
    (function controller() {
        document.getElementsByClassName('main-content')[0].addEventListener('click', function (e) {
            var targetInput = e.target.parentNode.children[2];
            if (e.target.classList.contains('plus-count') && (parseInt(targetInput.value) < targetInput.descriptor.maximum)) {
                targetInput.value = (parseInt(targetInput.value) + targetInput.descriptor.iteration) + targetInput.descriptor.metrics;
                timeline1.clearTimeline();
                timeline1.initTimeline();
                timeline1.renderTimeline(getValuesFromInput());
            }
            if (e.target.classList.contains('minus-count') && targetInput.descriptor.minimum < parseInt(targetInput.value) ) {
                targetInput.value = (parseInt(targetInput.value) - targetInput.descriptor.iteration) + targetInput.descriptor.metrics;
                timeline1.clearTimeline();
                timeline1.initTimeline();
                timeline1.renderTimeline(getValuesFromInput());
            }
        });
    })();

    function TimeLine(container) {
        var timelineHead = 'Your cycle';
        var timelineHeadLabel;
        var timelineBody;
        var timeLineLabels;
        this.initTimeline = function () {
            var fragment = document.createDocumentFragment();
            var head = fragment.appendChild(document.createElement('h3'));
            var headLabel = fragment.appendChild(document.createElement('div'));
            var body = fragment.appendChild(document.createElement('div'));
            var timelabels = fragment.appendChild(document.createElement('div'));
            head.classList.add('graph-head');
            head.innerHTML = timelineHead;
            body.classList.add('timeline');
            timelabels.classList.add('timelabels');
            headLabel.classList.add('timelabels');
            timelineBody = body;
            timeLineLabels = timelabels;
            timelineHeadLabel = headLabel;
            container.appendChild(fragment);
        };
        this.clearTimeline = function () {
            while (container.firstChild){
                container.removeChild(container.firstChild);
            }
        };
        this.renderTimeline = function (data) {
            var fragment = document.createDocumentFragment();
            var fragment2 = document.createDocumentFragment();

            //timelabelsmark--------------------
            var timePointer = 0;
            var labelsTotal = parseInt(data.general / (data['WORK TIME'] + data['SHORT BREAK']));
            var labelWidth = (data['WORK TIME'] + data['SHORT BREAK']) / data.general * 100 + '%';
            var timeLabel = document.createElement('div');
            timeLabel.classList.add('timelabel');
            timeLabel.style.width = labelWidth;
            for (var i = 0; i < labelsTotal; i++) {
                timePointer += data['WORK TIME'] + data['SHORT BREAK'];
                timeLabel.innerHTML = '<div><span></span>' + transformTime(timePointer) + '</div>';
                fragment2.appendChild(timeLabel.cloneNode(true));
            }
            timeLineLabels.appendChild(fragment2);
            var fullCycle = timeLabel.cloneNode(true);
            timePointer = (data['WORK TIME'] * data['WORK ITERATION']) + (data['SHORT BREAK'] * (data['WORK ITERATION'] - 1)) + data['LONG BREAK'];
            fullCycle.innerHTML = '<div>Full cycle: ' + transformTime(timePointer)+'<span></span></div>';
            fullCycle.style.width = (timePointer/data.general)*100 + '%';
            timelineHeadLabel.style.height = '45px';
            console.log(fullCycle.width);
            timelineHeadLabel.appendChild(fullCycle);

            //part1------------------------------------
            for (var i = 0; i < data['WORK ITERATION']; i++) {
                var work = document.createElement('div');
                work.classList.add('work');
                work.style.width = data['WORK TIME'] / data.general * 100 + '%';
                fragment.appendChild(work);
                if (i != data['WORK ITERATION'] - 1) {
                    var breakk = document.createElement('div');
                    breakk.classList.add('breakk');
                    breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
                    fragment.appendChild(breakk);
                }
            }

            //part2------------------------------------
            var longbreakk = document.createElement('div');
            longbreakk.classList.add('longbreakk');
            longbreakk.style.width = data['LONG BREAK'] / data.general * 100 + '%';
            fragment.appendChild(longbreakk);

            //part3------------------------------------
            for (var i = 0; i < data['WORK ITERATION']; i++) {
                if (i != 0) {
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
    //TimeLine.proto

    function getValuesFromInput() {
        var data = {};
        var inputValues = document.getElementsByClassName('select-field');
        var dataTitles = document.getElementsByClassName('opt-title');
        for (var i = 0; i < inputValues.length; i++) {
            data[dataTitles[i].innerHTML] = parseInt(inputValues[i].value);
        }
        data.general = (data['WORK TIME'] * data['WORK ITERATION'] + (data['SHORT BREAK'] * (data['WORK ITERATION'] - 1))) * 2 + data['LONG BREAK'];
        console.log(data);
        return data;
    }

    function transformTime(time) {
        var hours = '';
        var minutes = '';
        if (time / 60 >= 1)  hours = parseInt(time / 60) + 'h ';
        if (parseInt(time % 60) != 0)  minutes = parseInt(time % 60) + 'm';
        return hours + minutes;
    }

    (function descriptors() {
        document.getElementById('workTime').descriptor = {
            metrics: ' min',
            iteration: 5,
            minimum: 5,
            maximum: 60
        };
        document.getElementById('shortBreak').descriptor = {
            metrics: ' min',
            iteration: 1,
            minimum: 3,
            maximum: 15
        };
        document.getElementById('workIteration').descriptor = {
            metrics: '',
            iteration: 1,
            minimum: 1,
            maximum: 10
        };
        document.getElementById('longBreak').descriptor = {
            metrics: ' min',
            iteration: 5,
            minimum: 20,
            maximum: 60
        };
    })()


});
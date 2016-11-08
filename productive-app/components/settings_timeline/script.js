document.addEventListener("DOMContentLoaded", function component1() {
    //TimeLine constructor
    function TimeLine(container) {
        this.container = container;
    }

    //TimeLine.proto
    TimeLine.prototype.initTimeline = function () {
        var fragment = document.createDocumentFragment();
        this.view = {
            head: fragment.appendChild(document.createElement('h3')),
            topLabel: fragment.appendChild(document.createElement('div')),
            body: fragment.appendChild(document.createElement('div')),
            bottomLabel:fragment.appendChild(document.createElement('div'))
        };
        this.view.head.classList.add('graph-head');
        this.view.head.innerHTML = 'Your cycle';
        this.view.topLabel.classList.add('timelabels');
        this.view.body.classList.add('timeline');
        this.view.bottomLabel.classList.add('timelabels');
        this.container.appendChild(fragment);
        return this;
    };
    TimeLine.prototype.clearTimeline = function () {
        for(var i = 1;i<this.container.children.length;i++){
            while (this.container.children[i].firstChild){
                this.container.children[i].removeChild(this.container.children[i].firstChild);
            }
        }

        return this;
    };
    TimeLine.prototype.renderTimeline = function (data) {
        var mainFragment = document.createDocumentFragment();
        var timelabelsFragment = document.createDocumentFragment();

        //labels render
        var timePointer = 0;
        var labelsTotal = parseInt(data.general / (data['WORK TIME'] + data['SHORT BREAK']));
        var labelWidth = (data['WORK TIME'] + data['SHORT BREAK']) / data.general * 100 + '%';
        var timeLabel = document.createElement('div');
        timeLabel.classList.add('timelabel');
        timeLabel.style.width = labelWidth;
        for (var i = 0; i < labelsTotal; i++) {
            timePointer += data['WORK TIME'] + data['SHORT BREAK'];
            timeLabel.innerHTML = '<div><span></span>' + transformTime(timePointer) + '</div>';
            timelabelsFragment.appendChild(timeLabel.cloneNode(true));
        }
        this.view.bottomLabel.appendChild(timelabelsFragment);
        var fullCycle = timeLabel.cloneNode(true);
        timePointer = (data['WORK TIME'] * data['WORK ITERATION']) + (data['SHORT BREAK'] * (data['WORK ITERATION'] - 1)) + data['LONG BREAK'];
        fullCycle.innerHTML = '<div>Full cycle: ' + transformTime(timePointer) + '<span></span></div>';
        fullCycle.style.width = (timePointer / data.general) * 100 + '%';
        this.view.topLabel.style.height = '45px';
        this.view.topLabel.appendChild(fullCycle);

        //body render
        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < data['WORK ITERATION']; i++) {
                var work = document.createElement('div');
                work.classList.add('work');
                work.style.width = data['WORK TIME'] / data.general * 100 + '%';
                mainFragment.appendChild(work);
                if (i != data['WORK ITERATION'] - 1) {
                    var breakk = document.createElement('div');
                    breakk.classList.add('breakk');
                    breakk.style.width = data['SHORT BREAK'] / data.general * 100 + '%';
                    mainFragment.appendChild(breakk);
                }
            }
            if (j != 1) {
                var longbreakk = document.createElement('div');
                longbreakk.classList.add('longbreakk');
                longbreakk.style.width = data['LONG BREAK'] / data.general * 100 + '%';
                mainFragment.appendChild(longbreakk);
            }

        }
        this.view.body.appendChild(mainFragment);
        return this;
    };

    (function controller() {
        //init
        var timeline1 = new TimeLine(document.getElementsByClassName('timeline-container')[0]);
        timeline1.initTimeline();
        timeline1.renderTimeline(getValuesFromInput());
        //overwatch
        document.getElementsByClassName('main-content')[0].addEventListener('click', function (e) {
            var targetInput = e.target.parentNode.children[2];
            if (e.target.classList.contains('plus-count') && (parseInt(targetInput.value) < targetInput.descriptor.maximum)) {
                targetInput.value = (parseInt(targetInput.value) + targetInput.descriptor.iteration) + targetInput.descriptor.metrics;
                timeline1.clearTimeline().renderTimeline(getValuesFromInput());
            }
            if (e.target.classList.contains('minus-count') && targetInput.descriptor.minimum < parseInt(targetInput.value) ) {
                targetInput.value = (parseInt(targetInput.value) - targetInput.descriptor.iteration) + targetInput.descriptor.metrics;
                timeline1.clearTimeline().renderTimeline(getValuesFromInput());
            }
        });
    })();


    function getValuesFromInput() {
        var data = {};
        var inputValues = document.getElementsByClassName('select-field');
        var dataTitles = document.getElementsByClassName('opt-title');
        for (var i = 0; i < inputValues.length; i++) {
            data[dataTitles[i].innerHTML] = parseInt(inputValues[i].value);
        }
        data.general = (data['WORK TIME'] * data['WORK ITERATION'] + (data['SHORT BREAK'] * (data['WORK ITERATION'] - 1))) * 2 + data['LONG BREAK'];
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
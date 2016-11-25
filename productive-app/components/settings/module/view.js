import {transformTime} from './component1'
export default function View (renderZone){
    this.renderZone = renderZone;
    this.representation = {};
}

View.prototype.initComponent = function () {
    var fragment = document.createDocumentFragment();
    this.representation = {
        head: fragment.appendChild(document.createElement('h3')),
        topLabel: fragment.appendChild(document.createElement('div')),
        body: fragment.appendChild(document.createElement('div')),
        bottomLabel:fragment.appendChild(document.createElement('div'))
    };
    this.representation.head.classList.add('graph-head');
    this.representation.head.innerHTML = 'Your cycle';
    this.representation.topLabel.classList.add('timelabels');
    this.representation.body.classList.add('timeline');
    this.representation.bottomLabel.classList.add('timelabels');
    this.renderZone.appendChild(fragment);
    return this;
};

View.prototype.clearComponent = function () {
    for(var i = 1;i<this.renderZone.children.length;i++){
        while (this.renderZone.children[i].firstChild){
            this.renderZone.children[i].removeChild(this.renderZone.children[i].firstChild);
        }
    }

    return this;
};

View.prototype.renderComponent = function (data) {
    var mainFragment = document.createDocumentFragment();
    var timelabelsFragment = document.createDocumentFragment();

    //labels render
    var timePointer = 0;
    var labelsTotal = parseInt(data.general / 30,10);
    var labelWidth = 30 / data.general * 100 + '%';
    var timeLabel = document.createElement('div');
    timeLabel.classList.add('timelabel');
    timeLabel.style.width = labelWidth;
    for (var i = 0; i < labelsTotal; i++) {
        //timePointer += data['WORK TIME'] + data['SHORT BREAK'];
        timePointer += 30;
        timeLabel.innerHTML = '<div><span></span>' + transformTime(timePointer) + '</div>';
        timelabelsFragment.appendChild(timeLabel.cloneNode(true));
    }
    this.representation.bottomLabel.appendChild(timelabelsFragment);
    var fullCycle = timeLabel.cloneNode(true);
    timePointer = (data['WORK TIME'] * data['WORK ITERATION']) + (data['SHORT BREAK'] * (data['WORK ITERATION'] - 1)) + data['LONG BREAK'];
    fullCycle.innerHTML = '<div>Full cycle: ' + transformTime(timePointer) + '<span></span></div>';
    fullCycle.style.width = (timePointer / data.general) * 100 + '%';
    this.representation.topLabel.style.height = '45px';
    this.representation.topLabel.appendChild(fullCycle);

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
    this.representation.body.appendChild(mainFragment);
    return this;
};

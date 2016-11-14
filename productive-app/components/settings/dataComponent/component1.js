function initComponent1 (){ //data component - inputs
    var component = {
        data : {},
        container: document.getElementsByClassName('main-content')[0],
        representData: function() {
            var data = {};
            var inputValues = document.getElementsByClassName('select-field');
            var dataTitles = document.getElementsByClassName('opt-title');
            for (var i = 0; i < inputValues.length; i++) {
                data[dataTitles[i].innerHTML] = parseInt(inputValues[i].value);
            }
            data.general = (data['WORK TIME'] * data['WORK ITERATION'] + (data['SHORT BREAK'] *
                (data['WORK ITERATION'] - 1))) * 2 + data['LONG BREAK'];
            return data;
        },
        eventFires : new CustomEvent('input-changed',{
            bubbles: true,
            cancelable: true,
            details: undefined
        })
    };


    component.container.addEventListener('click', function (e) {
        var targetInput = e.target.parentNode.children[2];
        if (e.target.classList.contains('plus-count') && (parseInt(targetInput.value) < targetInput.descriptor.maximum)) {
            targetInput.value = (parseInt(targetInput.value) + targetInput.descriptor.iteration) + targetInput.descriptor.metrics;
            component.eventFires.data = component.representData();
            document.dispatchEvent(component.eventFires);
            console.log('event fires');
        }
        if (e.target.classList.contains('minus-count') && targetInput.descriptor.minimum < parseInt(targetInput.value)) {
            targetInput.value = (parseInt(targetInput.value) - targetInput.descriptor.iteration) + targetInput.descriptor.metrics;
            component.eventFires.data = component.representData();
            document.dispatchEvent(component.eventFires);
            console.log('event fires');
        }
    });


    document.getElementById('workTime').descriptor = {
        metrics: ' min',
        iteration: 5,
        minimum: 15,
        maximum: 40
    };

    document.getElementById('shortBreak').descriptor = {
        metrics: ' min',
        iteration: 1,
        minimum: 1,
        maximum: 15
    };
    document.getElementById('workIteration').descriptor = {
        metrics: '',
        iteration: 1,
        minimum: 1,
        maximum: 5
    };
    document.getElementById('longBreak').descriptor = {
        metrics: ' min',
        iteration: 5,
        minimum: 30,
        maximum: 60
    };
}

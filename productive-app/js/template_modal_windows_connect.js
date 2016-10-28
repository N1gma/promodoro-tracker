window.onload = function () {
    var addTaskModal = document.importNode(document.querySelector('link[rel="import"]').import.getElementById('modal-add-task').content, true);
    var editTaskModal = document.importNode(document.querySelector('link[rel="import"]').import.getElementById('modal-edit-task').content, true);
    var removeTaskModal = document.importNode(document.querySelector('link[rel="import"]').import.getElementById('modal-remove-task').content, true);

    document.getElementById('addTask').addEventListener('click', function (e) {
        document.querySelector('body').appendChild(addTaskModal);
    });
    document.getElementsByClassName('wrapper')[0].addEventListener('click', function (e) {
        if(e.target.classList.contains('edit-task')){
            document.querySelector('body').appendChild(editTaskModal);
        }
        if(e.target.classList.contains('category') && e.target.parentNode.classList.contains('trash')){
            document.querySelector('body').appendChild(removeTaskModal);
        }
    });
};
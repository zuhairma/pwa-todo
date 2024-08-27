if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }, function(error) {
            console.log('Service Worker registration failed:', error);
        });
    });
}


function addTask() {
    var input = document.getElementById('todo-input');
    var newTask = input.value;
    if (newTask) {
        var listItem = document.createElement('li');
        listItem.textContent = newTask;
        document.getElementById('todo-list').appendChild(listItem);
        input.value = ''; // Clear the input
    }
}
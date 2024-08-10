document.getElementById('questionButton').addEventListener('click', function() {
    document.getElementById('questionDiv').classList.remove('hidden');
    this.classList.add('hidden');
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseText').textContent = "Yay! I knew you'd say yes! 😘";
    document.getElementById('responseDiv').classList.remove('hidden');
    document.getElementById('questionDiv').classList.add('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseText').textContent = "Yay! I knew you'd say yes! 😘";
    document.getElementById('responseDiv').classList.remove('hidden');
    document.getElementById('questionDiv').classList.add('hidden');
});

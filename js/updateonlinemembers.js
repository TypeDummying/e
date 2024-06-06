function updateOnlineUsers() {
    fetch('online_users_by_ip.php')
        .then(response => response.text())
        .then(count => {
            document.getElementById('online-users').innerText = count;
        })
        .catch(error => console.error('Error:', error));
}

// Mettre à jour toutes les 5 secondes
setInterval(updateOnlineUsers, 5000);
updateOnlineUsers(); // Mise à jour initiale
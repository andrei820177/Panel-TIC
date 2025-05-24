fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalPlayers').textContent = data.totalPlayers;
            document.getElementById('onlinePlayers').textContent = data.onlinePlayers;
            document.getElementById('bannedAccounts').textContent = data.bannedAccounts;
        })
        .catch(error => console.error('Failed to load JSON data:', error));

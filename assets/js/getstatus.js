window.onload = function() {
    fetch('https://api.mcstatus.io/v2/status/java/play.kazume.net')
        .then(res => res.json())
        .then(data => {
            //もっと短くできる
            const status = document.getElementById('status');
            const player = document.getElementById('players');
            const motd = document.getElementById('motd');
            const ver = document.getElementById('version');
            const icon = document.getElementById('server-icon');

            if (data.online) {
                status.textContent = 'Server is Online';
                status.style.color = 'green';
            } else {
                status.textContent = 'Server is Offline';
                status.style.color = 'red';
            }

            player.textContent = `Player: ${data.players.online}/${data.players.max}`;

            motd.innerHTML = data.motd.html;
            ver.textContent = data.version.name_clean.replace('BungeeCord ', 'Version: ');

            icon.src = data.icon;
            icon.style.display = 'block';
        })
        .catch(error => {
            console.error('Getting Server Status Error:', error);
        });
};

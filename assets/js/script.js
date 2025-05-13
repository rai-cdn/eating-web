
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        document.addEventListener('click', function() {
            var audio = document.getElementById('audio');
            if (audio.paused) {
                audio.volume = 0.5;
                audio.play();
            }
        });
        
/*        window.addEventListener('load', () => {
            document.body.classList.add('visible');
        });*/
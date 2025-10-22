
let PWAalert = document.createElement('div');
PWAalert.id = 'PWAalert';
PWAalert.style.position = 'fixed';
PWAalert.style.bottom = '20px';
PWAalert.style.left = '50%';
PWAalert.style.transform = 'translateX(-50%)';
PWAalert.style.backgroundColor = '#fff';
PWAalert.style.padding = '10px 20px';
PWAalert.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
PWAalert.style.borderRadius = '5px';
PWAalert.style.display = 'none';
PWAalert.innerHTML = `
    <span>Instale nosso App para uma melhor experiência!</span>
    <button id="btnAdd" style="margin-left: 10px; padding: 5px 10px;">
        Instalar
    </button>
`;
document.body.appendChild(PWAalert);

let btnAdd = document.getElementById('btnAdd');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    console.log('Evento beforeinstallprompt disparado', e);
    window.deferredPrompt = e;
    
    PWAalert.style.display = 'block';

});

btnAdd.addEventListener('click', (e) => {
    PWAalert.style.display = 'none';
    let promptEvent = window.deferredPrompt;
    if (promptEvent) {
        promptEvent.prompt();
        promptEvent.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação do PWA');
            } else {
                console.log('Usuário rejeitou a instalação do PWA');
            }
            window.deferredPrompt = null;
        });
    }
});

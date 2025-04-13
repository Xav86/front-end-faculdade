const form = document.querySelector('.send-box');
const input = document.querySelector('.input-mensage');
const mensageContainer = document.querySelector('.msg-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mensageInput = input.value.trim();
    if (mensageInput) {

        const msgBox = document.createElement('div');
        msgBox.classList.add('msg-box-rigth');

        const msg = document.createElement('div');
        msg.classList.add('msg-rigth');

        const span = document.createElement('span');
        span.textContent = mensageInput;

        msg.appendChild(span);
        msgBox.appendChild(msg);
        mensageContainer.appendChild(msgBox);

        input.value = '';
        input.focus();
    }
});
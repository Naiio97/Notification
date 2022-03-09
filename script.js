const btn = document.querySelector('#btn')
const container = document.querySelector('#container');
btn.addEventListener('click', (e) => {
    console.log("funguje");
    createNotification()
})

const createNotification = () => {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    container.appendChild(notif)
    notif.innerText ='Chci pro Vás pracovat!'

    setTimeout(() => {
        notif.remove();
    },3000)
}
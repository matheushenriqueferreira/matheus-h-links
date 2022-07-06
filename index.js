window.onload = () => {
    const indexBody = document.querySelector('body');
    document.querySelector('#inputDarkGray').addEventListener('click', () => {
        indexBody.setAttribute('class', 'darkGray');
    })
    document.querySelector('#inputLightGray').addEventListener('click', () => {
        indexBody.setAttribute('class', 'lightGray');
    })
    document.querySelector('#inputDarkBlue').addEventListener('click', () => {
        indexBody.setAttribute('class', 'darkBlue');
    })
    document.querySelector('#inputLightBlue').addEventListener('click', () => {
        indexBody.setAttribute('class', 'lightBlue');
    })
}
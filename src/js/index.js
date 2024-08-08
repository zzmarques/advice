const btn = document.querySelector('div.btn');


const upDateImg = () => {
    const width = window.innerWidth;
    const myImg = document.querySelector('div.container img.myimg');

    if(width >= 768) {
        myImg.src = "src/assets/images/pattern-divider-desktop.svg"
        
    }
}

window.onload = upDateImg();
window.onresize = upDateImg();


const showConselho = () => {
    const divP = document.querySelector('div.text p');
    const spanText = document.querySelector('div.container span');

    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        const id = data.slip.id
        spanText.innerHTML = `advice #${id}`
        divP.innerHTML = data.slip.advice
    })
    .catch((erro) => console.log(erro))

};

btn.addEventListener('click', showConselho);





const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './img/drink.jpg',
        text: "Tengo sed"
    },
    {
        image: './img/food.jpg',
        text: "Tengo hambre"
    },
    {
        image: './img/tired.jpg',
        text: "Estoy cansado"
    },
    {
        image: './img/hurt.jpg',
        text: "Estoy herido"
    },
    {
        image: './img/happy.jpg',
        text: "Estoy feliz"
    },
    {
        image: './img/angry.jpg',
        text: "Estoy furioso"
    },
    {
        image: './img/sad.jpg',
        text: "Estoy triste"
    },
    {
        image: './img/scared.jpg',
        text: "Estoy asustado"
    },
    {
        image: './img/outside.jpg',
        text: "Quiero salir"
    },
    {
        image: './img/home.jpg',
        text: "Quiero ir a casa"
    },
    {
        image: './img/school.jpg',
        text: "Quiero ir a la escuela"
    },
    {
        image: './img/grandma.jpg',
        text: "Quiero ir con la abuela"
    },
];

data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');
    const { image, text } = item;
    box.classList.add('box');
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;

    // @todo -evento para hablar
    main.appendChild(box);
}

// voces
let voces = [];

function getVoces() {
    voces = speechSynthesis.getVoices();
    voces.forEach(voz => {
        const option = document.createElement('option');
        option.value = voz.name;
        option.innerText = `${voz.name} ${voz.lang}`;
        voicesSelect.appendChild(option);
    });
}

// voz cambioa
speechSynthesis.addEventListener('voiceschanged', getVoces);

// toggle textbox
toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show');
});

// boton cerrar
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show');
});

getVoces();
const input = document.getElementById('input');
const resetBtn = document.getElementById('resetBtn');
const checkBtn = document.getElementById('checkBtn');
const resultContainer = document.querySelector('.resultContainer');
const jaanMinBtn = document.getElementById('jaanMin');
const jaanPlusBtn = document.getElementById('jaanPlus');
const jaanDesc = document.getElementById('jaanDesc');
const plazaMinBtn = document.getElementById('plazaMin');
const plazaPlusBtn = document.getElementById('plazaPlus');
const plazaDesc = document.getElementById('plazaDesc');
const transMinBtn = document.getElementById('transMin');
const transPlusBtn = document.getElementById('transPlus');
const transDesc = document.getElementById('transDesc');

let jaanCounter = 0;
let plazaCounter = 0;
let transCounter = 0;
let plaza = 0;
let jaan = 0;
let trans = 0;
let lombok = 0;
let kona = 0;
let refund = 0;

const startCount = () => {
    const regex = /[(\t)(\s)]/gi;
    const inputValue = input.value.replace(regex, " ").toLowerCase().split(' ');

    for (let i = 0; i < inputValue.length; i++){
        if (inputValue[i] === 'lingga' || inputValue[i] === 'arika'){
            refund++
        }
        else if (inputValue[i] === '35,000'){
            plaza++
        }
        else if (inputValue[i] === '40,000'){
            jaan++
        }
        else if (inputValue[i] === '45,000'){
            trans++
        }
        else if (inputValue[i] === '25,000'){
            kona++
        }
        else if(inputValue[i] === '44,999'){
            lombok++
        }
    }

    document.getElementById('plaza').textContent = plaza;
    document.getElementById('jaan').textContent = jaan;
    document.getElementById('lombok').textContent = lombok;
    document.getElementById('kona').textContent = kona;
    document.getElementById('refund').textContent = refund;
    document.getElementById('trans').textContent = trans;

    resultContainer.style.display = 'flex';
}

jaanMinBtn.addEventListener('click', () => {
    jaanCounter--;
    jaanDesc.textContent = jaanCounter;
    document.getElementById('jaan').textContent = jaan + jaanCounter;
})
jaanPlusBtn.addEventListener('click', () => {
    jaanCounter++;
    jaanDesc.textContent = jaanCounter;
    document.getElementById('jaan').textContent = jaan + jaanCounter;
})
plazaMinBtn.addEventListener('click', () => {
    plazaCounter--;
    plazaDesc.textContent = plazaCounter;
    document.getElementById('plaza').textContent = plaza + plazaCounter;
})
plazaPlusBtn.addEventListener('click', () => {
    plazaCounter++;
    plazaDesc.textContent = plazaCounter;
    document.getElementById('plaza').textContent = plaza + plazaCounter;
})
transMinBtn.addEventListener('click', () => {
    transCounter--;
    transDesc.textContent = transCounter;
    document.getElementById('trans').textContent = trans + transCounter;
})
transPlusBtn.addEventListener('click', () => {
    transCounter++;
    transDesc.textContent = transCounter;
    document.getElementById('trans').textContent = trans + transCounter;
})

checkBtn.addEventListener('click', e => {
    startCount();
});

input.addEventListener('keydown', e => {
    if (e.key === 'Enter'){
        startCount();
    }
});

resetBtn.addEventListener('click', e => {
    input.value = "";
    resultContainer.style.display = 'none';
    plaza = 0;
    jaan = 0;
    trans = 0;
    lombok = 0;
    kona = 0;
    refund = 0;
    jaanCounter = 0;
    plazaCounter = 0;
    transCounter = 0;
    jaanDesc.textContent = 0;
    plazaDesc.textContent = 0;
    transDesc.textContent = 0;
})
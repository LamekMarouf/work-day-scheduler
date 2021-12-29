window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, Do MMMM y - H:mm:ss'))
}, 1000);

const storageInput = document.querySelector(".hourText");
const text = document.querySelector('.text');
const saveButton = document.querySelector(".saveBtn");
const storedInput = localStorage.getItem('textInput');

if(storageInput) {
    text.textContent = storedInput
}

storageInput.addEventListener("input", letter => {
    text.textContent = letter.target.value
});

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', text.textContent)
}

saveButton.addEventListener('click', saveToLocalStorage)



const storageInputTwo = document.querySelector('.hourTextTwo');
const textTwo = document.querySelector('.textTwo');
const saveButtonTwo = document.querySelector('.saveBtnTwo');
const storedInputTwo = localStorage.getItem('textInputTwo');

if(storageInputTwo) {
    textTwo.textContent = storedInputTwo
}

storageInputTwo.addEventListener('input', letterTwo => {
    textTwo.textContent = letterTwo.target.value
})

const saveToLocalStorageTwo = () => {
    localStorage.setItem('textInputTwo', textTwo.textContent)
}

saveButtonTwo.addEventListener('click', saveToLocalStorageTwo)

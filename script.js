window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, Do MMMM y - H:mm:ss'))
}, 1000);


// 9am
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


// 10am
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


// 11am
const storageInputThree = document.querySelector('.hourTextThree');
const textThree = document.querySelector('.textThree');
const saveButtonThree = document.querySelector('.saveBtnThree');
const storedInputThree = localStorage.getItem('textInputThree');

if(storageInputThree) {
    textThree.textContent = storedInputThree
}

storageInputThree.addEventListener('input', letterThree => {
    textThree.textContent = letterThree.target.value
})

const saveToLocalStorageThree = () => {
    localStorage.setItem('textInputThree', textThree.textContent)
}

saveButtonThree.addEventListener('click', saveToLocalStorageThree)


// 12pm
const storageInputFour = document.querySelector('.hourTextFour');
const textFour = document.querySelector('.textFour');
const saveButtonFour = document.querySelector('.saveBtnFour');
const storedInputFour = localStorage.getItem('textInputFour');

if(storageInputFour) {
    textFour.textContent = storedInputFour
}

storageInputFour.addEventListener('input', letterFour => {
    textFour.textContent = letterFour.target.value
})

const saveToLocalStorageFour = () => {
    localStorage.setItem('textInputFour', textFour.textContent)
}

saveButtonFour.addEventListener('click', saveToLocalStorageFour)


// 1pm
const storageInputFive = document.querySelector('.hourTextFive');
const textFive = document.querySelector('.textFive');
const saveButtonFive = document.querySelector('.saveBtnFive');
const storedInputFive = localStorage.getItem('textInputFive');

if(storageInputFive) {
    textFive.textContent = storedInputFive
}

storageInputFive.addEventListener('input', letterFive => {
    textFive.textContent = letterFive.target.value
})

const saveToLocalStorageFive = () => {
    localStorage.setItem('textInputFive', textFive.textContent)
}

saveButtonFive.addEventListener('click', saveToLocalStorageFive)


//2pm
const storageInputSix = document.querySelector('.hourTextSix');
const textSix = document.querySelector('.textSix');
const saveButtonSix = document.querySelector('.saveBtnSix');
const storedInputSix = localStorage.getItem('textInputSix');

if(storageInputSix) {
    textSix.textContent = storedInputSix
}

storageInputSix.addEventListener('input', letterSix => {
    textSix.textContent = letterSix.target.value
})

const saveToLocalStorageSix = () => {
    localStorage.setItem('textInputSix', textSix.textContent)
}

saveButtonSix.addEventListener('click', saveToLocalStorageSix)



// 3pm
const storageInputSeven = document.querySelector('.hourTextSeven');
const textSeven = document.querySelector('.textSeven');
const saveButtonSeven = document.querySelector('.saveBtnSeven');
const storedInputSeven = localStorage.getItem('textInputSeven');

if(storageInputSeven) {
    textSeven.textContent = storedInputSeven
}

storageInputSeven.addEventListener('input', letterSeven => {
    textSeven.textContent = letterSeven.target.value
})

const saveToLocalStorageSeven = () => {
    localStorage.setItem('textInputSeven', textSeven.textContent)
}

saveButtonSeven.addEventListener('click', saveToLocalStorageSeven)



// 4pm
const storageInputEight = document.querySelector('.hourTextEight');
const textEight = document.querySelector('.textEight');
const saveButtonEight = document.querySelector('.saveBtnEight');
const storedInputEight = localStorage.getItem('textInputEight');

if(storageInputEight) {
    textEight.textContent = storedInputEight
}

storageInputEight.addEventListener('input', letterEight => {
    textEight.textContent = letterEight.target.value
})

const saveToLocalStorageEight = () => {
    localStorage.setItem('textInputEight', textEight.textContent)
}

saveButtonEight.addEventListener('click', saveToLocalStorageEight)



// 5pm
const storageInputNine = document.querySelector('.hourTextNine');
const textNine = document.querySelector('.textNine');
const saveButtonNine = document.querySelector('.saveBtnNine');
const storedInputNine = localStorage.getItem('textInputNine');

if(storageInputNine) {
    textNine.textContent = storedInputNine
}

storageInputNine.addEventListener('input', letterNine => {
    textNine.textContent = letterNine.target.value
})

const saveToLocalStorageNine = () => {
    localStorage.setItem('textInputNine', textNine.textContent)
}

saveButtonNine.addEventListener('click', saveToLocalStorageNine)

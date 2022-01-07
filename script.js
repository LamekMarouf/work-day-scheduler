// Auto-Updating Clock
window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, Do MMMM y - H:mm:ss'))
}, 1000);

// Saving After Refresh
// 9am
const storageInput = document.querySelector(".hourText");
const text = document.querySelector('.text');
const saveButton = document.querySelector(".saveBtn");
const storedInput = localStorage.getItem('textInput');
const hiddenMessage = document.getElementById('hiddenMessage');

function hiddenText() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('9am data saved!')
}

saveButton.addEventListener('click', hiddenText);


if(storageInput) {
    text.textContent = storedInput
}

storageInput.addEventListener("input", letter => {
    text.textContent = letter.target.value
});

const saveToLocalStorage = () => {
    localStorage.setItem('textInput', text.textContent)
}

saveButton.addEventListener('click', saveToLocalStorage )

if (moment().hour(9) < moment()) {
   storageInput.className = "past";
   text.className = "past"
} else if (moment().hour() == 9) {
    storageInput.className = "present"
    text.className = "present"
} else if (moment().hour(9) > moment()) {
    storageInput.className = "future"
    text.className = "future"
}



// 10am
const storageInputTwo = document.querySelector('.hourTextTwo');
const textTwo = document.querySelector('.textTwo');
const saveButtonTwo = document.querySelector('.saveBtnTwo');
const storedInputTwo = localStorage.getItem('textInputTwo');
const hiddenMessageTwo = document.getElementById('hiddenMessage');

function hiddenTextTwo() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('10am data saved!')  
}
saveButtonTwo.addEventListener('click', hiddenTextTwo);


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

if (moment().hour(10) < moment()) {
    storageInputTwo.className = "past";
    textTwo.className = "past"
 } else if (moment().hour() == 10) {
     storageInputTwo.className = "present"
     textTwo.className = "present"
 } else if (moment().hour(10) > moment()) {
     storageInputTwo.className = "future"
     textTwo.className = "future"
 }



// 11am
const storageInputThree = document.querySelector('.hourTextThree');
const textThree = document.querySelector('.textThree');
const saveButtonThree = document.querySelector('.saveBtnThree');
const storedInputThree = localStorage.getItem('textInputThree');
const hiddenMessageThree = document.getElementById('hiddenMessage');

function hiddenTextThree() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('11am data saved!')  
}
saveButtonThree.addEventListener('click', hiddenTextThree);


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

if (moment().hour(11) < moment()) {
    storageInputThree.className = "past";
    textThree.className = "past"
 } else if (moment().hour() == 11) {
     storageInputThree.className = "present"
     textThree.className = "present"
 } else if (moment().hour(11) > moment()) {
     storageInputThree.className = "future"
     textThree.className = "future"
 }


// 12pm
const storageInputFour = document.querySelector('.hourTextFour');
const textFour = document.querySelector('.textFour');
const saveButtonFour = document.querySelector('.saveBtnFour');
const storedInputFour = localStorage.getItem('textInputFour');
const hiddenMessageFour = document.getElementById('hiddenMessage');

function hiddenTextFour() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('12pm data saved!')  
}
saveButtonFour.addEventListener('click', hiddenTextFour);


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

if (moment().hour(12) < moment()) {
    storageInputFour.className = "past";
    textFour.className = "past"
 } else if (moment().hour() == 12) {
     storageInputFour.className = "present"
     textFour.className = "present"
 } else if (moment().hour(12) > moment()) {
     storageInputFour.className = "future"
     textFour.className = "future"
 }


// 1pm
const storageInputFive = document.querySelector('.hourTextFive');
const textFive = document.querySelector('.textFive');
const saveButtonFive = document.querySelector('.saveBtnFive');
const storedInputFive = localStorage.getItem('textInputFive');
const hiddenMessageFive = document.getElementById('hiddenMessage');

function hiddenTextFive() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('1pm data saved!')  
}
saveButtonFive.addEventListener('click', hiddenTextFive);


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

if (moment().hour(13) < moment()) {
    storageInputFive.className = "past";
    textFive.className = "past"
 } else if (moment().hour() == 13) {
     storageInputFive.className = "present"
     textFive.className = "present"
 } else if (moment().hour(13) > moment()) {
     storageInputFive.className = "future"
     textFive.className = "future"
 }


//2pm
const storageInputSix = document.querySelector('.hourTextSix');
const textSix = document.querySelector('.textSix');
const saveButtonSix = document.querySelector('.saveBtnSix');
const storedInputSix = localStorage.getItem('textInputSix');
const hiddenMessageSix = document.getElementById('hiddenMessage');

function hiddenTextSix() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('2pm data saved!')  
}
saveButtonSix.addEventListener('click', hiddenTextSix);


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

if (moment().hour(14) < moment()) {
    storageInputSix.className = "past";
    textSix.className = "past"
 } else if (moment().hour() == 14) {
     storageInputSix.className = "present"
     textSix.className = "present"
 } else if (moment().hour(14) > moment()) {
     storageInputSix.className = "future"
     textSix.className = "future"
 }



// 3pm
const storageInputSeven = document.querySelector('.hourTextSeven');
const textSeven = document.querySelector('.textSeven');
const saveButtonSeven = document.querySelector('.saveBtnSeven');
const storedInputSeven = localStorage.getItem('textInputSeven');
const hiddenMessageSeven = document.getElementById('hiddenMessage');

function hiddenTextSeven() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('3pm data saved!')  
}
saveButtonSeven.addEventListener('click', hiddenTextSeven);

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

if (moment().hour(15) < moment()) {
    storageInputSeven.className = "past";
    textSeven.className = "past"
 } else if (moment().hour() == 15) {
     storageInputSeven.className = "present"
     textSeven.className = "present"
 } else if (moment().hour(15) > moment()) {
     storageInputSeven.className = "future"
     textSeven.className = "future"
 }


// 4pm
const storageInputEight = document.querySelector('.hourTextEight');
const textEight = document.querySelector('.textEight');
const saveButtonEight = document.querySelector('.saveBtnEight');
const storedInputEight = localStorage.getItem('textInputEight');
const hiddenMessageEight = document.getElementById('hiddenMessage');

function hiddenTextEight() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('4pm data saved!')  
}
saveButtonEight.addEventListener('click', hiddenTextEight);

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

if (moment().hour(16) < moment()) {
    storageInputEight.className = "past";
    textEight.className = "past"
 } else if (moment().hour() == 16) {
     storageInputEight.className = "present"
     textEight.className = "present"
 } else if (moment().hour(16) > moment()) {
     storageInputEight.className = "future"
     textEight.className = "future"
 }


// 5pm
const storageInputNine = document.querySelector('.hourTextNine');
const textNine = document.querySelector('.textNine');
const saveButtonNine = document.querySelector('.saveBtnNine');
const storedInputNine = localStorage.getItem('textInputNine');
const hiddenMessageNine = document.getElementById('hiddenMessage');

function hiddenTextNine() {
    console.log('Save Button pressed')
    document.getElementById('hiddenMessage').textContent = ('5pm data saved!')  
}
saveButtonNine.addEventListener('click', hiddenTextNine);

if(storageInputNine) {
    textNine.textContent = storedInputNine
}

storageInputNine.addEventListener('input', letterNine => {
    textNine.textContent = letterNine.target.value
})

const saveToLocalStorageNine = () => {
    localStorage.setItem('textInputNine', textNine.textContent)
};

saveButtonNine.addEventListener('click', saveToLocalStorageNine);

if (moment().hour(17) < moment()) {
    storageInputNine.className = "past";
    textNine.className = "past"
 } else if (moment().hour() == 17) {
     storageInputNine.className = "present"
     textNine.className = "present"
 } else if (moment().hour(17) > moment()) {
     storageInputNine.className = "future"
     textNine.className = "future"
 }


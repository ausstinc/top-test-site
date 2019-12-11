let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/honda-civic-19.jpg') {
        myImage.setAttribute('src', 'images/scooby-doo-and-gang.jpg');
    }else{
        myImage.setAttribute ('src', 'images/honda-civic-19.jpg');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}   else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
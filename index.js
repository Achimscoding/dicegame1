const myPix =  new Array("./images/dice1.jpg", "./images/dice2.jpg", "./images/dice3.jpg",
"./images/dice4.jpg", "./images/dice5.jpg", "./images/dice6.jpg" );

function play1() {
    randomNumber1 = Math.floor(Math.random() * myPix.length);
    document.querySelector('.img1').src = myPix[randomNumber1];
    document.querySelector(`#result1`).value;
    name1 = document.querySelector(`#name1`).value;
    result1.textContent = name1;
}

function play2() {
    randomNumber2 = Math.floor(Math.random() * myPix.length);
    document.querySelector('.img2').src = myPix[randomNumber2];
    document.querySelector(`#result2`).value;
    name2 = document.querySelector(`#name2`).value;
    result2.textContent = name2;

    if(randomNumber1 > randomNumber2) {
        document.querySelector(`#result`).textContent = `${name1} wins`;
    }

    else if(randomNumber1 < randomNumber2) {
        document.querySelector(`#result`).textContent = `${name2} wins`;
    }

    else {
        document.querySelector(`#result`).textContent = `draw`;
    }
}
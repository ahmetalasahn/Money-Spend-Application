const text1 = document.getElementById("moneyValue");
const amount1 = document.getElementById("amount1");

const amount2 = document.getElementById("amount2");

const amount3 = document.getElementById("amount3");

const amount4 = document.getElementById("amount4");

const amount5 = document.getElementById("amount5");

const amount6 = document.getElementById("amount6");

const amount7 = document.getElementById("amount7");

const amount8 = document.getElementById("amount8");

const amount9 = document.getElementById("amount9");

const amount10 = document.getElementById("amount10");

const amount11 = document.getElementById("amount11");

const amount12 = document.getElementById("amount12");

let quantity = 186000000000;
let indexNumber = 0;

let amountquantity1 = 0;
let amountquantity2 = 0;
let amountquantity3 = 0;
let amountquantity4 = 0;
let amountquantity5 = 0;
let amountquantity6 = 0;
let amountquantity7 = 0;
let amountquantity8 = 0;
let amountquantity9 = 0;
let amountquantity10 = 0;
let amountquantity11 = 0;
let amountquantity12 = 0;

function sat1(number){
    if (amountquantity1 > 0 && number == 1) {
        quantity += 19;
        amountquantity1 -= 1;
        text1.innerHTML = quantity;
        amount1.innerHTML = amountquantity1;
    }
    if (amountquantity2 > 0 && number == 2) {
        quantity += 190;
        amountquantity2 -= 1;
        text1.innerHTML = quantity;
        amount2.innerHTML = amountquantity2;
    }
    if (amountquantity3 > 0 && number == 3) {
        quantity += 1900;
        amountquantity3 -= 1;
        text1.innerHTML = quantity;
        amount3.innerHTML = amountquantity3;
    }
    if (amountquantity4 > 0 && number == 4) {
        quantity += 9500;
        amountquantity4 -= 1;
        text1.innerHTML = quantity;
        amount4.innerHTML = amountquantity4;
    }
    if (amountquantity5 > 0 && number == 5) {
        quantity += 95000;
        amountquantity5 -= 1;
        text1.innerHTML = quantity;
        amount5.innerHTML = amountquantity5;
    }
    if (amountquantity6 > 0 && number == 6) {
        quantity += 950000;
        amountquantity6 -= 1;
        text1.innerHTML = quantity;
        amount6.innerHTML = amountquantity6;
    }
    if (amountquantity7 > 0 && number == 7) {
        quantity += 500000;
        amountquantity7 -= 1;
        text1.innerHTML = quantity;
        amount7.innerHTML = amountquantity7;
    }
    if (amountquantity8 > 0 && number == 8) {
        quantity += 252000;
        amountquantity8 -= 1;
        text1.innerHTML = quantity;
        amount8.innerHTML = amountquantity8;
    }
    if (amountquantity9 > 0 && number == 9) {
        quantity += 390500;
        amountquantity9 -= 1;
        text1.innerHTML = quantity;
        amount9.innerHTML = amountquantity9;
    }
    if (amountquantity10 > 0 && number == 10) {
        quantity += 295000;
        amountquantity10 -= 1;
        text1.innerHTML = quantity;
        amount10.innerHTML = amountquantity10;
    }
    if (amountquantity11 > 0 && number == 11) {
        quantity += 950000;
        amountquantity11 -= 1;
        text1.innerHTML = quantity;
        amount11.innerHTML = amountquantity11;
    }
    if (amountquantity12 > 0 && number == 12) {
        quantity += 999999;
        amountquantity12 -= 1;
        text1.innerHTML = quantity;
        amount12.innerHTML = amountquantity12;
    }
}

function satinAl1(number){
    if (number == 1) {
        quantity -= 19;
        amountquantity1 += 1;
        text1.innerHTML = quantity;
        amount1.innerHTML = amountquantity1;
    }
    if (number == 2) {
        quantity -= 190;
        amountquantity2 += 1;
        text1.innerHTML = quantity;
        amount2.innerHTML = amountquantity2;
    }
    if (number == 3) {
        quantity -= 1900;
        amountquantity3 += 1;
        text1.innerHTML = quantity;
        amount3.innerHTML = amountquantity3;
    }
    if (number == 4) {
        quantity -= 9500;
        amountquantity4 += 1;
        text1.innerHTML = quantity;
        amount4.innerHTML = amountquantity4;
    }
    if (number == 5) {
        quantity -= 95000;
        amountquantity5 += 1;
        text1.innerHTML = quantity;
        amount5.innerHTML = amountquantity5;
    }
    if (number == 6) {
        quantity -= 950000;
        amountquantity6 += 1;
        text1.innerHTML = quantity;
        amount6.innerHTML = amountquantity6;
    }
    if (number == 7) {
        quantity -= 500000;
        amountquantity7 += 1;
        text1.innerHTML = quantity;
        amount7.innerHTML = amountquantity7;
    }
    if (number == 8) {
        quantity -= 252000;
        amountquantity8 += 1;
        text1.innerHTML = quantity;
        amount8.innerHTML = amountquantity8;
    }
    if (number == 9) {
        quantity -= 390500;
        amountquantity9 += 1;
        text1.innerHTML = quantity;
        amount9.innerHTML = amountquantity9;
    }
    if (number == 10) {
        quantity -= 295000;
        amountquantity10 += 1;
        text1.innerHTML = quantity;
        amount10.innerHTML = amountquantity10;
    }
    if (number == 11) {
        quantity -= 950000;
        amountquantity11 += 1;
        text1.innerHTML = quantity;
        amount11.innerHTML = amountquantity11;
    }
    if (number == 12) {
        quantity -= 999999;
        amountquantity12 += 1;
        text1.innerHTML = quantity;
        amount12.innerHTML = amountquantity12;
    }

    if (quantity <= 0) {
        quantity = 0;
        text1.innerHTML = 0;
    }
}
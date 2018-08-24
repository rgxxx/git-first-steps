const input = document.getElementById('num-input');

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

const point = document.getElementById('point');
point.onclick = () => {
    for (let i = 0; i < input.value.length; i += 1) {
        if (input.value[i] === '.') {
            return;
        }
    }
    enterNumber('.');
};


const backspaceButton = document.getElementById('backspaceButton');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0'
    }
    else {
        input.value = input.value.slice(0, -1);
    }
};
const cleanButton = document.getElementById('cleanButton');
cleanButton.onclick = () => {

    input.value = '0'
};


const numButtons = document.getElementsByClassName('num-button');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}
const plus_button = document.getElementById('num+');
var inOp = false;
var num = '0';
plus_button.onclick = () => {
    if (inOp) {
        input.value = num + parseFloat(input.value);
        num = input.value;
        inOp = false;

    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }

};
const minus_button = document.getElementById('num-');
minus_button.onclick = () => {
    if (inOp) {
        input.value = num - parseFloat(input.value);
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }
};
const multiply_button = document.getElementById('num*');
multiply_button.onclick = () => {
    if (inOp) {
        input.value = num * parseFloat(input.value);
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }
};
const divide_button = document.getElementById('num/');
divide_button.onclick = () => {
    if (inOp) {
        input.value = num / parseFloat(input.value);
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;

    }

};

















function printMin() {
    const a = Number(document.getElementById('numA').value);
    const b = Number(document.getElementById('numB').value);
    document.getElementById('out1').innerText = `הקטן הוא: ${Math.min(a, b)}`;
}


function printCountGreaterThanThree() {
    let arr = document.getElementById('array2').value.split(',');
    
    let count = arr.reduce((acc, str) => acc + (str.trim().length > 3 ? 1 : 0), 0);
    document.getElementById('out2').innerText = `כמות מחרוזות באורך יותר מ-3 תווים: ${count}`;
}


function checkA() {
    let str = document.getElementById('input3').value;
    if (str.includes('A')) {
        let newStr = str.replace(/A/g, 'a');
        document.getElementById('out3').innerText = newStr;
    } else {
        document.getElementById('out3').innerText = str;
    }
}


function checkParity() {
    let numStr = document.getElementById('inputParity').value;
    if (numStr === "") {
        document.getElementById('parityResult').innerText = "יש להזין מספר";
        return;
    }
    let num = Number(numStr);
    if (isNaN(num)) {
        document.getElementById('parityResult').innerText = "נא להזין מספר תקין";
        return;
    }
   
    if (num % 2 === 0) {
        document.getElementById('parityResult').innerText = "המספר זוגי";
    } else {
        document.getElementById('parityResult').innerText = "המספר אי זוגי";
    }

}


function compareFirstLast() {
    let str = document.getElementById('input5').value;
   
    if (str.length < 2) {
        document.getElementById('out5').innerText = "המחרוזת קצרה מדי";
        return;
    }
    let first = str[0];
    let last = str[str.length - 1];
    if (first === last) {
        
        let withoutFirstLast = str.substring(1, str.length - 1);
        document.getElementById('out5').innerText = withoutFirstLast === "" 
            ? "(האות הראשונה והאחרונה זהות, אין אמצע)" : withoutFirstLast;
    } else {
        document.getElementById('out5').innerText = "האות הראשונה והאחרונה שונות";
    }
}

function specialString() {
    let str = document.getElementById('input6').value;
    let result = "";
    if (str.includes("₪")) {
        result = "new shekel";
    } else if (str.includes("@")) {
        result = "*" + str + "*";
    } else if (str.includes("*")) {
        // הסר כל הכוכביות מהמחרוזת
        result = str.replace(/\*/g, "");
    } else {
        result = str;
    }
    document.getElementById('out6').innerText = result;
}


function convertCurrency() {
    var type = document.getElementById('currencyType').value.trim();
    var nis = Number(document.getElementById('amountNIS').value);
    var rates = {
        'יורו': 4.2,
        'דולר': 3.9,
        'לירה סטרלינג': 5
    };
    if (!type || isNaN(nis) || nis <= 0 || !rates.hasOwnProperty(type)) {
     
        return;
    }
    var rate = rates[type];
    var res = (nis / rate).toFixed(2);
    alert(nis + " ש\"ח = " + res + " " + type);
}

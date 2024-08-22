// Function that displays value 
function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key >= '0' && event.key <= '9' 
        || event.key === '+' || event.key === '-' 
        || event.key === '*' || event.key === '/') {
        document.getElementById("result").value += event.key; 
    }
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        solve(); 
    } 
} 

// Function that evaluates the expression 
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x) 
    document.getElementById("result").value = y 
} 

// Function that clears the display 
function clr() { 
    document.getElementById("result").value = "" 
}

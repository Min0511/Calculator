
const nums = document.querySelectorAll(".num");
const numsArray = Array.from(nums);
const screen = document.querySelector(".screen");
const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");
const equal = document.querySelector(".equal")
const symbols = document.querySelectorAll(".sym");
const symsArray = Array.from(symbols);
const dot = document.querySelector(".dot");
let storedNumber = null;
let storedSym = null

numsArray.forEach((num)=>{
    num.addEventListener("click",()=>{
        if(screen.textContent === "0") {
            screen.textContent = num.textContent;
        }else{
            screen.textContent += num.textContent;
        }
        symsArray.forEach((sym)=>{
            if(sym.getAttribute("class").includes("pressedButton")){
                sym.classList.remove('pressedButton');
                screen.textContent = num.textContent;
            };

        });
    });
});

symsArray.forEach((sym)=>{
    sym.addEventListener("click",()=>{

        sym.classList.add("pressedButton");
        let getNumber = Number(screen.textContent);

        if(storedNumber !== null){
            switch(storedSym){
                case "+":
                    storedNumber += getNumber;
                    break;
                case "-":
                    storedNumber -= getNumber;
                    break;
                case "*":
                    storedNumber *= getNumber;
                    break;
                    case "/":
                    storedNumber /= getNumber;
                    break;
                }
        }else {
            storedNumber = getNumber;
        }
        storedSym = sym.textContent
        screen.textContent = storedNumber;
    });

});

equal.addEventListener("click",() => {
    let getNumber = Number(screen.textContent);
    switch(storedSym){
        case "+":
            storedNumber += getNumber;
            break;
        case "-":
            storedNumber -= getNumber;
            break;
        case "*":
            storedNumber *= getNumber;
            break;
            case "/":
            storedNumber /= getNumber;
            break;
        }
    storedSym = null;
    screen.textContent = storedNumber;
});

reset.addEventListener("click",() => {
    storedNumber = null;
    screen.textContent = "0";
});
del.addEventListener("click", () => {
    screen.textContent = screen.textContent.slice(0,screen.textContent.length -1)
    
});

dot.addEventListener("click",() => {
    if(!screen.textContent.includes(".")){
        screen.textContent += dot.textContent;
    }

});
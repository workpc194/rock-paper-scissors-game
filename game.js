// Element Selection
let paper = document.querySelector(".paper-img");
let rock = document.querySelector(".rock-img");
let scissors = document.querySelector(".scissors-img");
let user = document.querySelector(".user-num");
let comp = document.querySelector(".comp-num");
let textContainer = document.querySelector(".text-container");
let userSelect = document.querySelector(".user-sel");
let compSelect = document.querySelector(".comp-sel");
let userNum = 0;
let compNum = 0;

// Value Checker && Number Updater
function valCheck(val){
    if(val === true){
        userNum++;
        user.innerText = userNum;
        textContainer.innerText = "User Won";
    } else {
        compNum++;
        comp.innerText = compNum;
        textContainer.innerText = "Comp Won"
    }
}

// Final Winner Checker Function
function finalWinner(){
    if(userNum === 5 || compNum === 5){
        if(userNum === 5){
            textContainer.innerText = "Final Winner is User";
        } else if(compNum === 5){
            textContainer.innerText = "Final Winner is Comp";
        }
        textContainer.style.backgroundColor = "green";
        textContainer.style.width = "250px";
        userNum = 0;
        compNum = 0;
        user.innerText = userNum;
        comp.innerText = compNum;
    }
}

// User Select Function
function userSelFxn(evnt){
    let userSel = evnt.target.alt;
    console.log(`User Select: ${evnt.target.alt}`);
    let compSel = compSelFxn();
    let val;
    userSelect.innerText = "User Select: ";
    compSelect.innerText = "Comp Select: ";


    if(userSel === compSel){
        textContainer.innerText = "Game Draw";
    } else if(userSel === "paper"){
        compSel === "rock"?val = true:val = false;
        valCheck(val); 
    } else if(userSel === "rock"){
        compSel === "scissors"?val = true:val = false;
        valCheck(val);
    } else {
        compSel === "paper"?val = true:val = false;
        valCheck(val);
    }

    userSelect.innerText += " " + userSel.toUpperCase();
    compSelect.innerText += " " + compSel.toUpperCase();

    if(userNum < 5 && compNum < 5){
        textContainer.style.backgroundColor = "rgb(36, 36, 36)";
        textContainer.style.width = "200px";
    }

    finalWinner();
}

// Computer Select Function
function compSelFxn(){
    let ary = ["paper", "rock", "scissors"];
    let idx = Math.floor(Math.random() * ary.length);
    console.log(`Computer Select: ${ary[idx]}`);
    return ary[idx];
}

// Adding Event Listener at Images
paper.addEventListener("click", userSelFxn);
rock.addEventListener("click", userSelFxn);
scissors.addEventListener("click", userSelFxn);
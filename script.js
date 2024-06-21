let turn = 'X'
let over = false

const changeTurn = () => {
    turn === 'X' ? turn = 'O' : turn = 'X';
    document.querySelector(".info").innerHTML = "Turn of " + turn;
}

const checkOver = () => {
    let boxes = Array.from(document.querySelectorAll(".box"))
    let values = boxes.map((ele) => {
        return ele.firstChild.innerHTML
    })

    for(let i = 0; i < 3; i++){
        if ((values[3*i] === "X" || values[3*i] === "O") && values[3*i] === values[1 + 3*i] && values[3*i] === values[2 + 3*i]) return true;        
        if ((values[i] === "X" || values[i] === "O") && values[i] === values[i + 3] && values[i] === values[i + 6]) return true;    
    }

    if ((values[0] === "X" || values[0] === "O") && values[0] === values[4] && values[0] === values[8]) return true;    
    if ((values[2] === "X" || values[2] === "O") && values[2] === values[4] && values[2] === values[6]) return true;    
    return false
}

const full = () => {
    let boxes = Array.from(document.querySelectorAll(".box"))
    let f = 1
    boxes.forEach((ele) => {
        if(ele.firstElementChild.innerHTML === " ") {
            f = 0
        }
    })
    if(f) return true
    else return false
}


// Game Logic
let boxes = document.querySelectorAll(".box")
Array.from(boxes).forEach((box) => {
    box.addEventListener("click", () => {
        if(!over){
            let boxtext = box.firstElementChild.innerHTML

            if(boxtext !== "X" && boxtext !== "O"){
                box.firstElementChild.innerHTML = turn
                if(checkOver()){
                    document.querySelector(".info").innerHTML = "Winner is " + turn + "!!!<br>Click reset to start a new game."
                    over = true
                } else if (full()){
                    document.querySelector(".info").innerHTML = "It's a draw! <br> Click reset to start a new game."
                    over = true
                } else changeTurn()
            } else {
                document.querySelector(".info").innerHTML = "Turn of " + turn + "<br>This box is already filled, please select another box.";
            }
        }
    })
})

let reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
    location.reload()
})
const gameBoard = (() => {

    const gameContainer = document.querySelector(".game-board")

    const genGrid = () => {

        for(i=0 ; i < 9; i++){
          const boxes = document.createElement("div")
          boxes.setAttribute("class", "box")
          boxes.setAttribute("id", "box" + i)
          gameContainer.appendChild(boxes)
        }
    }


    return {genGrid}
    
    //make buttons and a current turn display for later.

})();

gameBoard.genGrid()


const playerFactory = (name,selection) =>{

    const playerWin = "Congratulations," + name + "you won this game as"+ selection +"!"

    return {playerWin}

}


const gameLogic = ((player1,player2) => {

    const resultCheck = () => {
        
        let box = []

        //array with every box result in order
        let content = []

        for(i=0 ; i < 9; i++){
            box[i] = document.querySelector("#box"+i)
            content[i] = box[i].textContent
        }

        console.log(content)

        //possible results for a win

        if(content[0] == content[1] && content[0] == content[2] && content[0] != ""){
            console.log("winner")

        }
        if(content[0] == content[3] && content[0] == content[6] && content[0] != ""){
            console.log("winner")

        }
        if(content[1] == content[4] && content[1] == content[7] && content[1] != ""){
            console.log("winner")

        }
        if(content[2] == content[5] && content[2] == content[8] && content[2] != ""){
            console.log("winner")
        }

        if(content[3] == content[4] && content[3] == content[5] && content[3] != ""){
            console.log("winner")
        }

        if(content[6] == content[7] && content[6] == content[8] && content[6] != ""){
            console.log("winner")
        }

        if(content[0] == content[4] && content[0] == content[8] && content[0] != ""){
            console.log("winner")
        }

        if(content[2] == content[4] && content[2] == content[6] && content[2] != ""){
            console.log("winner")
        }

    else if(!content.includes("")){
     console.log("draw")
    }


        
    
        
       
        

        


    }

    const playTurn = () => {

        const players = [1,2];
        let turn = 0;
        const boxClick = document.querySelectorAll(".box")

        boxClick.forEach(box => {

         box.addEventListener("click", () => {

            turn++;

            if (turn == 1){
                box.textContent= "X"
            }
            else {
                box.textContent= "O"
            }

            if(turn == players.length) {
                    turn = 0;
                   }
            })

        box.addEventListener("click", (resultCheck))
        })

    }




    return {playTurn}

})();

gameLogic.playTurn()

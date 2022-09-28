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

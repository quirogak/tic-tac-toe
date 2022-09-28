const gameBoard = (() => {

    const gameContainer = document.querySelector(".game-board")

    const genGrid = () => {

        for(i=1 ; i <= 9; i++){
          const boxes = document.createElement("div")
          boxes.setAttribute("class", "box")
          boxes.setAttribute("id", "box" + i)
          gameContainer.appendChild(boxes)
        }
    }


    return {genGrid}
    

})();

gameBoard.genGrid()


const playerFactory = (name,selection) =>{

    const playerWin = "Congratulations," + name + "you won this game as"+ selection +"!"

    return {playerWin}
}


const gameLogic = (() => {

    const resultCheck = () => {
        
        let box = []

        for(i=1 ; i <= 9; i++){
            box[i] = document.querySelector("#box"+i)

        }


    }

    const checkTurn = () => {

        const players = [1,2];
        let turn = 0;
        let currentTurn = players[turn]
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
        })

    }




    return {resultCheck,checkTurn}

})();

gameLogic.resultCheck()
gameLogic.checkTurn()

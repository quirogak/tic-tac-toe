const gameBoard = (() => {

    const gameContainer = document.querySelector(".game-board")

    const genGrid = () => {

        for(i=1 ; i <= 9; i++){
          const boxes = document.createElement("div")
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

        console.log(box[4])

    }

    const checkTurn = () => {

        const players = [player1,player2];
        let turn = 0;

        let currentTurn = players[turn]

       //when a box of the grid is clicked

       turn++;
       
       if(turn == players.length) {
        turn = 0;
       }






       

    }




    return {resultCheck,checkTurn}

})();

gameLogic.resultCheck()

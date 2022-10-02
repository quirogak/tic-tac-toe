const gameBoard = (() => {

   
    const genGrid = () => {

        const mainContainer = document.querySelector(".main-content")
        const gameContainer = document.createElement("div")
        gameContainer.className = ("game-board")
        mainContainer.appendChild(gameContainer)

    

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


const playerFactory = (name,selection) =>{

    this.name = name
    this.selection = selection


    return {name,selection}

}



const gameLogic = (() => {

    const container = document.querySelector(".messages")
    const resultMessage = document.createElement("div")
    resultMessage.setAttribute("class", "result-msg")
    container.appendChild(resultMessage)


    const resultCheck = (player1,player2) => {
        
        

        let box = []

        //array with every box result in order
        let content = []

        for(i=0 ; i < 9; i++){
            box[i] = document.querySelector("#box"+i)
            content[i] = box[i].textContent
        }

        let endGame = 0;

        //possible results for a win
        // if content[0] == X or O, we know which player won.

        if(content[0] == content[1] && content[0] == content[2] && content[0] != ""){
            endGame++
        
         if(content[0] == "X") {
            resultMessage.textContent = player1.name+" wons!"
        }
        else {
            resultMessage.textContent = player2.name+" wons!"
        }
        }

        if(content[0] == content[3] && content[0] == content[6] && content[0] != ""){
            endGame++
        
         if(content[0] == "X") {
               resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }

        if(content[1] == content[4] && content[1] == content[7] && content[1] != ""){
            endGame++

            if(content[1] == "X") {
                resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }

        if(content[2] == content[5] && content[2] == content[8] && content[2] != ""){
            endGame++
        
            if(content[2] == "X") {
                resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }

        if(content[3] == content[4] && content[3] == content[5] && content[3] != ""){
            endGame++
        
            if(content[3] == "X") {
                resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }

        if(content[6] == content[7] && content[6] == content[8] && content[6] != ""){
            endGame++
    
        
            if(content[6] == "X") {
                resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }

        if(content[0] == content[4] && content[0] == content[8] && content[0] != ""){
            endGame++
           
        
            if(content[0] == "X") {
                resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }

        if(content[2] == content[4] && content[2] == content[6] && content[2] != ""){
            endGame++
        
            if(content[2] == "X") {
                resultMessage.textContent = player1.name+" wons!"
             }
             else {
                resultMessage.textContent = player2.name+" wons!"
             }
             }


        if (!content.includes("") && endGame == 0){
            endGame++
            resultMessage.textContent = "Draw!"
           }
        
        if(endGame != 0){
            const restartButton = document.createElement("button")
            restartButton.setAttribute("class", "restart")
            container.appendChild(restartButton)
            restartButton.textContent = "New game"

           restartButton.addEventListener("click", () => {
            const board = document.querySelector(".game-board")
            resultMessage.textContent = ""
            restartButton.remove()
            board.remove()
            
            endGame = 0
            gameBoard.genGrid()
            playTurn(player1,player2)
            
           })
        }

        
        } 
    
  

    const playTurn = (player1,player2) => {

        const players = [player1,player2];
        let turn = 0;
        const boxClick = document.querySelectorAll(".box")
        const check = function() {
            resultCheck(player1,player2)
        }

     boxClick.forEach(box => {

        const turnSwitch = () => {
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


            }        
            
         for (let i = 0; i < boxClick.length; i++) {
                boxClick[i].addEventListener("click", () => {
                    if(resultMessage.textContent != ""){
                
                     box.removeEventListener("click",(check))
                     box.removeEventListener("click", (turnSwitch),{once:true})
                     
                    }
                })
            }
    
                          

        box.addEventListener("click", (turnSwitch),{once:true});

        box.addEventListener("click", (check))
 
     })
               
    }

    
 return {playTurn}

})();


const newGame = (() => {
    


    const playerSelection = () => {

    const playersContainer = document.querySelector(".player-selection")
    const submitButton = document.querySelector("#submit")


    submitButton.addEventListener("click", () => {
        gameBoard.genGrid()
    })

    submitButton.addEventListener("click", () => {

        const player1Input = document.getElementById("name").value
        const player2Input = document.getElementById("name2").value

        //if the players don't input any names.
        if (player1Input == "" && player2Input == ""){
            const player1 = playerFactory("Player 1","X")
            const player2 = playerFactory("Player 2", "O")
            gameLogic.playTurn(player1,player2)
        }

        else if (player1Input == "" && player2Input != ""){
            const player1 = playerFactory("Player 1","X")
            const player2 = playerFactory(player2Input, "O")
            gameLogic.playTurn(player1,player2)
        }
        else if (player2Input == "" && player1Input != ""){
            const player1 = playerFactory(player1Input,"X")
            const player2 = playerFactory("Player 2", "O")
            gameLogic.playTurn(player1,player2)
        }
        else{
            const player1 = playerFactory(player1Input,"X")
            const player2 = playerFactory(player2Input, "O")
            gameLogic.playTurn(player1,player2)
        }

       
    })

    submitButton.addEventListener("click", () => {
        playersContainer.remove()
    })


    



    }

    return {playerSelection}

})();

newGame.playerSelection()


const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(){
     this.field = [];
     this.playerLocation = [0, 0]
  }
  print(){
    this.field.forEach(line => console.log(line.join('')))
  }
  down(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]
    this.field[row][column] = fieldCharacter

    if(this.playerLocation[0]< this.field.length-1){
      this.playerLocation[0]++
    } else{
      console.log("Out of bounds")
      return trueu
    }
    return this.checkLocation()
  }
  right(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]
    this.field[row][column] = fieldCharacter

    
    if(this.playerLocation[1]< this.field[row].length-1){
      this.playerLocation[1]++
    } else{
      console.log("Out of bounds")
      return true
    }
    
    return this.checkLocation()
  }
  left(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]
    this.field[row][column] = fieldCharacter

    
    if(this.playerLocation[1]>0){
      this.playerLocation[1]--
    } else{
      console.log("Out of bounds")
      return true
    }
    
    return this.checkLocation()
  }
  up(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]
    this.field[row][column] = fieldCharacter

    
    if(this.playerLocation[0]>0){
      this.playerLocation[0]--
    } else{
      console.log("Out of bounds")
      return true
    }
    
    return this.checkLocation()
  }
  checkLocation(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]

    if(this.field[row][column]===fieldCharacter){
      this.field[row][column] = pathCharacter
      return false
    }
    else if(this.field[row][column]==="O"){
      console.log("You fell down a hole")
      return true
    }
    else if(this.field[row][column]===hat){
      console.log("Congrats, you found your hat!")
      return true
    }
  }
  generateField(rows, cols, percentHoles){

    const numberOfHoles = rows * cols * percentHoles / 100
    let hatAdded = false

    let tempField = []
    let currentRow = []

    for (let r=0; r<rows; r++){
      currentRow = []
      for (let c=0; c<cols; c++){
        const randomNumber = Math.floor(Math.random()*rows*cols)
        if(randomNumber===0&&!hatAdded&&(r!=0||c!=0)){
          currentRow.push(hat)
          hatAdded = true
        }
        else if(randomNumber>=1&&randomNumber< numberOfHoles){
          currentRow.push(hole)
        } 
         else{
          currentRow.push(fieldCharacter)
        }
        
      }
      tempField.push(currentRow)
    }
    tempField[0][0] = pathCharacter
    if(!hatAdded){
      tempField[rows-1][cols-1] = hat
    }

    return tempField
  }
  newField(rows, cols, percentHoles){
    const newField = this.generateField(rows, cols, percentHoles)

    this.checkField(newField)

    this.field = newField
  }
  checkField(field){

    let direction = 'd' //?????
    /*
    point down
    if clear on left go left and change direction to left
    if not clear left go down 
      if down clear go down
      if down not clear point right
        if right clear go right
        if right not clear point up
          if up 


    */

    let currentRow = 0
    let currentCol = 0
    let row = 0
    let col = 0
    const numberCols = field[0].length
    const numberRows = field.length
    console.log(numberCols)
    console.log(numberRows)

    let stillChecking = 0

    while(stillChecking<10){

      for(let checkDirections = 0; checkDirections<4; checkDirections++){
        if(checkDirections==0&&currentRow>0){
          row = currentRow - 1
        } else if(checkDirections==1&&currentCol>0){
          col = currentCol - 1
        } else if(checkDirections==2&&currentRow<numberRows-1){
          row = currentRow + 1
        } else if(checkDirections==3&&currentCol<numberCols-1){
          col = currentCol + 1
        } 

        if(field[row][col]===hat){
          console.log("solvable")
        } else if(field[row][col]!==hole){
          console.log("clear - row: " + row + " col: " + col)
          currentRow = row
          currentCol = col
          checkDirections = 5
        }
      }
      stillChecking++



    }
  }
}


const myField = new Field();

myField.newField(20,20,40)

let loop = true;
let option = ''
  myField.print()

while(loop){

  const direction = prompt('Which way?');
  
  switch(direction){
    case 'r':
      option  = myField.right()
      break;
    case 'd':
      option  = myField.down()
      break;
    case 'u':
      option  = myField.up()
      break;
    case 'l':
      option  = myField.left()
      break;
  }

  if(option){
    loop = false
  } else{
    myField.print()
  }
}


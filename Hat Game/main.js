const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
     this.field = field;
     this.playerLocation = [0, 0]
  }
  print(){
    this.field.forEach(line => console.log(line.join('')))
  }
  down(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]
    this.field[row][column] = '░'

    if(this.playerLocation[0]< this.field.length-1){
      this.playerLocation[0]++
    } else{
      console.log("Out of bounds")
      return true
    }
    return this.checkLocation()
  }
  right(){
    const row = this.playerLocation[0]
    const column = this.playerLocation[1]
    this.field[row][column] = '░'

    
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
    this.field[row][column] = '░'

    
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
    this.field[row][column] = '░'

    
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

    if(this.field[row][column]==="░"){
      this.field[row][column] = '*'
      return false
    }
    else if(this.field[row][column]==="O"){
      console.log("You fell down a hole")
      return true
    }
    else if(this.field[row][column]==="^"){
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
          currentRow.push('^')
          hatAdded = true
        }
        else if(randomNumber>=1&&randomNumber< numberOfHoles){
          currentRow.push('O')
        } 
         else{
          currentRow.push('░')
        }
        
      }
      tempField.push(currentRow)
    }
    tempField[0][0] = '*'
    if(!hatAdded){
      tempField[rows-1][cols-1] = '^'
    }

    this.field = tempField
  }
}


const myField = new Field([
  ['*', '░', '░'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.generateField(20,20,40)

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


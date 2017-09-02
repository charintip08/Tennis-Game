function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.reset = () => {
         this.playerAScore = 0
     }

     this.echo = () => {
        return `${scoreString[this.playerAScore]} - Love`
     }

     this.playerAGetScore = () => {
         this.playerAScore++
     }
 }



test('Echo "Love -Love" When press reset button',() => {
  //Arrange
let app = new TennisGame()

  //Act
app.reset()
let result = app.echo()

  //Assert
expect(result).toBe('Love - Love')
})



test('Echo "Fifteen - Love" when Player A Get first Score',() => {
  //Arrange
let app = new TennisGame()
app.reset()
app.playerAGetScore()

  //Act
let result = app.echo()

  //Assert
expect(result).toBe('Fifteen - Love')
})
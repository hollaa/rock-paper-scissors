<template>
  <div>
    <h1>Rock Paper Scissors Game</h1>
    <h3>Is it hard for you to make a decision? Play rock paper scissors!</h3>
    <div>
      <img src="/rock-illustration.svg" alt="rock icon" @click="play('rock')">
      <img src="/paper-illustration.svg" alt="paper icon" @click="play('paper')">
      <img src="/scissors-illustration.svg" alt="scissors icon" @click="play('scissors')">
    </div>
    <div v-if="result" class="results">
      <p>You chose {{ playerChoice }} and the computer chose {{ computerChoice }}.</p>
      <span v-if="result === 'win'" style="color: #2bdc2b">You win!</span>
      <span v-if="result === 'lose'" style="color: #ff6767">You lose!</span>
      <span v-if="result === 'tie'" style="color: #2e9fff">It's a tie!</span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      playerChoice: null,
      computerChoice: null,
      result: null
    };
  },
  methods: {
    play(choice) {
      this.playerChoice = choice;
      this.computerChoice = this.getComputerChoice();
      this.result = this.getResult();
    },
    getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * choices.length)];
    },
    getResult() {
      if (this.playerChoice === this.computerChoice) {
        return 'tie';
      }
      if (this.playerChoice === 'rock' && this.computerChoice === 'scissors') {
        return 'win';
      }
      if (this.playerChoice === 'paper' && this.computerChoice === 'rock') {
        return 'win';
      }
      if (this.playerChoice === 'scissors' && this.computerChoice === 'paper') {
        return 'win';
      }
      return 'lose';
    }
  }
};
</script>
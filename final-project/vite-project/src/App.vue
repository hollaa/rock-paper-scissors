<template>
  <div>
    <h1>Rock-Paper-Scissors</h1>
    <div>
      <button @click="play('rock')">Rock</button>
      <button @click="play('paper')">Paper</button>
      <button @click="play('scissors')">Scissors</button>
    </div>
    <div v-if="result">
      You chose {{ playerChoice }} and the computer chose {{ computerChoice }}.
      <span v-if="result === 'win'" style="color: green">You win!</span>
      <span v-if="result === 'lose'" style="color: red">You lose!</span>
      <span v-if="result === 'tie'" style="color: blue">It's a tie!</span>
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
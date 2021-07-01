<template>
<div class="container">
  <Header
  title="Checkerboard"
  @btn-click="toggleBoard"
  :turn="turn"
  :counter="turn ? blackcounter : redcounter"
  :isTurnVisible="isBoardVisible"
  />
  <div class="subheader" v-show="isIntroVisible2">
    <p>Wellcome to our game!
      Press <b>Start Game</b> to continue...
    </p>
    <Piece :pieceColor="'black'" :style="{position:'static', float:'left'}"/>
    <Piece :pieceColor="'red'" :style="{position:'static', float:'left'}"/>
    <Piece :pieceColor="'black'" :style="{position:'static', float:'left'}"/>
  </div>
  <Chessboard
  :isBoardVisible="isBoardVisible"
  @change-black-turn="changeRedTurn"
  @change-red-turn="changeBlackTurn"
  @kill-red-piece="changeRedCounter"
  @kill-black-piece="changeBlackCounter"
  :turn="turn"
  />


<Footer v-show="isBoardVisible"/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Chessboard from './components/Chessboard.vue'
import Piece from './components/Piece.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Chessboard,
    Piece,
    Footer
  },
  data() {
    return {
      isBoardVisible: false,
      isIntroVisible: true,
      turn: true,
      blackcounter: 0,
      redcounter: 0,
  }
  },
  methods:{
    toggleBoard() {
      this.isBoardVisible = !this.isBoardVisible
    },

    changeBlackTurn(){
      this.turn = false
       return this.turn
    },

    changeRedTurn(){
      this.turn = true
       return this.turn
    },

    changeBlackCounter(){
      this.blackcounter += 1
      if(this.blackcounter==12){
        alert('Red won!')
      }
    },

    changeRedCounter(){
      this.redcounter += 1
            if(this.redcounter==12){
        alert('Black won!')
      }
    }
  },
  computed:{
    isIntroVisible2() {
      this.isIntroVisible = !this.isBoardVisible
       return this.isIntroVisible
    }
  }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 50%;
}

body {
  font-family: 'Poppins', sans-serif;
  background: rgb(226, 220, 132);
}

.container {
  width: 120rem;
  height: 80rem;
  margin: 4em auto;
  overflow: auto;
  border: .1em solid steelblue;
  border-radius: 1em;
}

.subheader {
  margin: 2em auto;
  font-size: 2.5em;
  margin-left: 1.2em;
}

.subheader p {
  margin-bottom: 2em;
}

b {
  border: solid black .1em;
  border-radius: .5em;
  padding: .2em;
}

</style>

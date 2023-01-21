<template>
<div
  class="chess-board"
  v-show="isBoardVisible"
  ref="chessboardRef"
  :turn="turn"
  >
    <div
    v-for="tile in tiles"
    :key="tile.id"
    :class="tile.color"
    @drop="onDrop($event, tile.color)"
    @dragover.prevent
    @dragenter.prevent
    >
    <!-- dragenter&dragover
        events causes error in
        console #FIXME -->

    <h1>{{tile.id}}</h1>
      <!-- <Piece
      :id="tile.id"
      @dragstart="onDragStartBlack"
      @dblclick.prevent="killBlackPiece"
      v-if="tile.color =='grey' && [1, 2, 3].includes(tile.position)"
      :pieceColor="tile.color =='grey' && [1, 2, 3].includes(tile.position) ? 'black' : ''"
      />
      <Piece
      :id="tile.id"
      v-if="tile.color =='grey' && [6, 7, 8].includes(tile.position)"
      @dragstart="onDragStartRed"
      @dblclick.prevent="killRedPiece"
      :pieceColor="tile.color =='grey' && [6, 7, 8].includes(tile.position) ? 'red' : ''"
      /> -->
  </div>
  </div>
</template>

<script>

import Piece from './Piece.vue'
import { ref } from 'vue'
import tiles_json from '../data/tiles.json'
import pieces_json from '../data/pieces.json'
export default {
  name: 'Chessboard',
  components:{
    Piece
  },
  props:{
    isBoardVisible: Boolean,
    turn: Boolean,

  },
  setup(props, context) {
      const chessboardRef = ref(null)

      const tiles = ref(tiles_json)
      const pieces = ref(pieces_json)
      let activePiece = null

      function onDragStartBlack(ev) {
        if(props.turn === false){
        ev.dataTransfer.setData("text", ev.target.id);
        context.emit('change-black-turn')
      }
      else{
        alert("It's not your turn!")
      }
      };

      function onDragStartRed(ev) {
        if(props.turn === true){
        ev.dataTransfer.setData("text", ev.target.id);
        context.emit('change-red-turn')
        }
        else{
          alert("It's not your turn!")
        }
      };

      function onDrop(ev, color) {
        if(color === "grey"){
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        }
      };

      // function killBlackPiece(ev){
      //   const element = ev.target;
      //   console.log(element)
      //   element.style.display = "none";
      //   context.emit('kill-black-piece')
      // };

      // function killRedPiece(ev){
      //   const element = ev.target;
      //   console.log(element);
      //   element.style.display = "none";
      //   context.emit('kill-red-piece');
      // };

      return {
        chessboardRef,
        tiles,
        pieces,
        activePiece,
        onDragStartBlack,
        onDragStartRed,
        onDrop,
        // killBlackPiece,
        // killRedPiece,
      }
    }

}
</script>

<style scoped>

@keyframes poof {
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    transform: rotateY(180deg);
  }
  100% {
   transform: rotateY(0deg);
  }
}

 .chess-board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100em;
  height: 60em;
  border: #363a3a solid .5em;
  background: white;
  margin: 1em auto;
 }

.grey {
  background: grey;
  min-height: 7em;
  min-width: 7em;
  /* animation: fadeIn 2s; */
}

.white {
  min-height: 7em;
  min-width: 7em;
}

</style>
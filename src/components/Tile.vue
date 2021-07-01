<template>
    <div
    :class="tileClass"
    class="tile"
    >
      <Piece
      :pieceColor="pieceColor"
      @mousedown.prevent ="$emit('mouse-down-black', $event)"
      @mousemove.prevent="$emit('mouse-move-black', $event)"
      @mouseup.prevent="$emit('mouse-up-black', $event)"
      />
      <Piece
      @mousedown.prevent="$emit('mouse-down-red', $event)"
      @mousemove.prevent="$emit('mouse-move-red', $event)"
      @mouseup.prevent="$emit('mouse-up-red', $event)"

      :pieceColor="pieceColor1"/>
      <!-- {{position}}-{{position}} -->
    </div>
</template>

<script>
import Piece from "./Piece.vue"
export default {
  name: 'Tile',
  props:{
      tileClass: String,
      pieceColor: String,
      pieceColor1: String,
      position: Number,
      id: String
  },
  components:{
    Piece
  },
  data() {
      return {
      }
  },
  emits:[
  'mouse-down-black',
  'mouse-down-red',
  'mouse-move-black',
  'mouse-move-red',
  'mouse-up-black',
  'mouse-up-red'
  ]

}
</script>


<style>

@keyframes fadeIn {
  0%{
    transform: rotateY(180deg);
  } 100% {
   transform: rotateY(0deg);
  }
}
.tile {
  height: 3.9em;
  animation: fadeIn 1s;
  /* text-align: center; */
}

.white {
  background: white;
}

.grey {
  background: grey;
}
</style>
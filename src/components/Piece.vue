<template>
    <div
    :class="pieceColor"
    draggable="true"
    >
    </div>


</template>
<script>
export default {
    name: 'Piece',
    props: {
        pieceColor: String,
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>

@keyframes fadeIn {
    0% {
        transform: scale(0);
        opacity: 0.0;
    }
    60% {
        transform: scale(1.1);
    }
    80% {
        transform: scale(0.9);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}


.red{
    background-image: url('../assets/red_piece.png');
    min-width: 12em;
    min-height: 7em;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10em;
    position: absolute;
    z-index: 0;
    animation: fadeIn 2s;
}

.black {
    background-image: url('../assets/black_piece.png');
    min-width: 12em;
    min-height: 7em;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10em;
    position: absolute;
    z-index: 0;
    animation: fadeIn 1s;
}
.black:hover{
    cursor: grab;
}
.red:hover{
    cursor: grab;
}

.red:active {
    cursor: grabbing;
}
.black:active {
    cursor: grabbing;
}

</style>
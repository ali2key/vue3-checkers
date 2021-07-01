<template>
    <header>
        <h1>{{title}}</h1>
        <h3
        v-show="isTurnVisible"
        > Turn:  
            <span
            :class="turn ? 'red' : 'black'">
             {{turn ? 'red' : 'black'}}
            </span>    |   Counter: {{counter}}
        </h3>
        <Button
        @btn-click="$emit('btn-click')"
        :text="isTurnVisible ? 'Finish Game' : 'Start Game'"
        :color="`blue`"/>
    </header>
</template>

<script>

import Button from './Button.vue'
export default {
    name : 'Header',
    components:{
        Button,
    },
    props: {
        title: String,
        turn: Boolean,
        isTurnVisible: Boolean,
        counter: Number

    },
    methods: {
    },

    emits:['btn-click']
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3em;
}

h1 {
    font-size: 3em;
}

h3{
    border: solid black .01em;
    border-radius: .5em;
    padding:.2em;
    background:white;
    font-size:2.2em;
}

.red {
    color: red;
}

.black {
    color: black;
}
</style>
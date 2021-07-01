<template>
    <button
    @click="$emit('btn-click')"
    :style="{background: color}"
    class="btn">{{text}}
    </button>
</template>

<script>
export default {
  name : 'Button',
  props: {
      text: String,
      color: String
  },
  emits: ['btn-click']

}

</script>

<style>

.btn {
  display: inline-block;
  background: #1d1818;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
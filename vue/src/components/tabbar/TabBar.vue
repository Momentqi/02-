<template>
    <div id="tab-bar">
    <slot></slot>
     </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:0 -0.1875rem .0625rem rgba(100, 100, 100, .2);
}
</style>
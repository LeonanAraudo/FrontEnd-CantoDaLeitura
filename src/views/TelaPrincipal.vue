<template>
    <div class="body">
      <img class="fundo" src="/back.png" alt="imagem de fundo">
      <header class="container">
       <SimpleComponent/>
      </header>
      <div class="conteudo">
        <Options/>
      </div>
   </div>
  </template>
  
  <script setup>
   import SimpleComponent from '@/components/SimpleComponent.vue';
   import Options from '@/components/Options.vue';
  </script>
  
  <style scoped>
  .body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .fundo{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    background-size: cover;
  }
  .container{
    width: 100%;
    position: relative;
    z-index: 2;
  }
 
  </style>
  
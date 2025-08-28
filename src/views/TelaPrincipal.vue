<template>
    <div class="body">
      <header class="container">
        <HeaderComponent/>
      </header>
      <div class="conteudo">
        <Options/>
      </div>
   </div>
  </template>
  
  <script setup>
   import HeaderComponent from '@/components/HeaderComponent.vue';
   import Options from '@/components/Options.vue';
  </script>
  
  <style scoped>
  .body{
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  .conteudo{
    height: 100%;
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
  
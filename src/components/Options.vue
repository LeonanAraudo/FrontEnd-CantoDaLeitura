<template>
    <div class="container">
      <div class="content">
          <div v-if="mudançaContent === 'content1'" class="content-box">
              <Content1/>
            </div>
            <div v-if="mudançaContent === 'content2'" class="content-box">
                
            </div>
           
        </div>
        <div class="buttons">
          <button @click="mudar('content1')">Cadastrar Livros</button>
          <button @click="mudar('content2')">Lista de Livros</button>
        </div>
    </div>
  </template>
  
  <script setup>
  import Content1 from './Content1.vue';
  import { ref } from 'vue';
  
  const mudançaContent = ref('content1');
  
  const mudar = (content) => {
    mudançaContent.value = content;
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    width: 100%;
    height: 85vh;
    flex-direction: row;
  }  
  .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 80%;
    } 
    .content-box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(49, 49, 49, 0.5);
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      padding: 20px;
      width: 50%;
    }
    button {
    padding: 14px 20px;
    width: 50%;
    font-size: 18px;
    cursor: pointer;
    background-color: #3a3a3a;
    color: white;
    border: none;
    border-radius: 4px;
  }
  button:hover {
    background-color: #0a0a0a;
    transition: all 0.3s;
    transform: scale(1.1);
  }
  </style>
  
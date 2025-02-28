<template>
    <div class="container">
      <div class="content">
           <div v-if="mudançaContent === 'content1'" class="content-box">
              <Content1/>
            </div>
            <div v-if="mudançaContent === 'content2'" class="content-box">
                <Content2/>
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
  import Content2 from './Content2.vue';
  import { usaBiblioteca } from '@/stores/counter';
  
  const store = usaBiblioteca()

  const loadLivros = () =>{ store.fetchLivros() }

  const mudançaContent = ref('content1');
  
  const mudar = (content) => {
    mudançaContent.value = content;
    if(content === 'conten2'){
      loadLivros()
    }
  };

  </script>
  
  <style scoped>
  .container {
    display: flex;
    width: 100%;
    height: auto; 
    min-height: 50vh; 
    flex-direction: row;
    margin-top: 4%;
    overflow: hidden;
  }
  .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
  } 
  .content-box {
    width: 100%;
    height: 30vw; 
    overflow-y: auto; 
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
  button{
    font-family: "Montserrat";
    width: 50%;
    height: 13%;
    font-size: 1.3vw;
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
  @media(max-width: 600px){
    .container{
      flex-direction: column;
    }
    .content{
      width: 100%;
    }
    .content-box{
      height: 50vw;
    }
    .buttons{
      width: 100%;
      height: 130px;
      gap: 20px;
    }
    .buttons button{
      width: 80%;
      height: 100%;
      font-size: 2.5vw;
    }
  }
  </style>
  
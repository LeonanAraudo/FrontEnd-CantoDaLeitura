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
          <button class="underline-btn" @click="mudar('content1')">Cadastrar Livros</button>
          <button class="underline-btn" @click="mudar('content2')">Lista de Livros</button>
        </div>
        <div class="boxLinha">
          <div class="linha"></div>
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
    flex-direction: column;
    overflow: hidden;
  }
  .content{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      order: 2;
  }

.content-box {
    width: 100%;
    height: 100%; 
    overflow-y: auto; 
}
.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
}
.boxLinha{
    margin-top: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.linha{
    width: 80%;
    height: 1px;
    background-color: rgb(0, 0, 0);
}
.underline-btn {
    font-family: 'Montserrat';
    background: none;      
    border: none;          
    cursor: pointer;
    font-size: 18px;
    position: relative;     
    padding: 10px 0;
    color: #000;        
}
.underline-btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;              
  height: 6px;         
  border-radius: 5px; 
  background-color: #8B0000; 
  transition: width 0.3s ease; 
}
.underline-btn:hover::after,
.underline-btn:focus::after {
  width: 100%;           
}
  @media(max-width: 600px){
    .container{
      flex-direction: column;
    }
    .content{
      width: 100%;
    }
    .content-box{
      height: 70vw;
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
  
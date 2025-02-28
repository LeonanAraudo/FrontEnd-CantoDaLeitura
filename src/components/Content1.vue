<template>
   <form class="formulario" @submit="enviarFormulario($event)">
        <div class="infos">
            <label class="label" for="NameBook">Título do livro</label>
            <input class="titleInput" id="NameBook" v-model="dados.title" type="text" required placeholder="Insira o título do livro"/>
        </div>
        <div class="doubleInfos">
            <div  class="infos">
                <label class="label2" for="DateBook">Data de publicação</label>
                <input class="specialInput" id="DateBook" name="data_publicação"  v-model="dados.data_publicação" type="date" required/>
            </div>
            <div class="infos">
                <label class="label2" for="AutorBook">Autor do Livro</label>
                <select class="specialInput" name="author" id="AutorBook" required  v-model="dados.author">
                    <option v-for="autor in store.autores" key:autor.id :value="autor.id">{{ autor.name }}</option>
                </select>
            </div>
        </div>
        <div class="buttonContainer">
            <button class="button" type="submit">Cadastrar</button>
        </div>
   </form>
   <div v-if="cadAberto" class="containerAutor">
        <div class="autorForm">
            <h3>Cadastrar autor</h3>
            <form @submit.prevent="cadastrarAutor" > 
                <div>
                    <input v-model="novoAutor" class="autorInput" type="text" placeholder="Escreva o nome do autor"/>
                </div>
                <div>
                    <button class="buttons" type="submit">Cadastrar</button>
                </div>
            </form>
            <button @click="fecharCadastro" class="buttons">Cancelar</button>
        </div>
    </div>
   <div class="alingAutorCad">
     <p class="blueText">Autor não cadastrado? <span class="openCad" @click="abrirCadastro">Cadastre aqui</span></p>
   </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { usaBiblioteca } from '@/stores/counter';

const store = usaBiblioteca()
const novoAutor = ref("");

onMounted(() =>{
store.fetchAutores()
});

const dados = ref({
  title: "",
  data_publicação: "",
  author: "",
});

const cadastrarAutor = () => {
  const autor = { id: Date.now(), name: novoAutor.value };
  store.addAutor(autor);
  cadastrarAutorNaApi()
};

const cadastrarAutorNaApi = async () => {
  try {
    const autorData = { name: novoAutor.value }; 
    const response = await fetch("https://desafio-backend-obsis.onrender.com/authors/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(autorData),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar o autor");
    }
    alert("Autor cadastrado com sucesso");
    novoAutor.value = "";
    cadAberto.value = false;
  } catch (erro) {
    alert(erro.message);
  }
};

const enviarFormulario = async (event) => {
    event.preventDefault();
    console.log(dados.value)
  try {
    const response = await fetch("https://desafio-backend-obsis.onrender.com/books/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados.value),
    });
    console.log(response)

    if (!response.ok) {
      throw new Error("Erro ao cadastrar livro");
    }
    alert("Livro cadastrado com sucesso");
    dados.value = { title: "", data_publicação: "", author: "" };
    store.addLivro(dados.value)
} catch (erro) {
    alert(erro.message);
}
};

const cadAberto = ref(false);

const abrirCadastro = () => (cadAberto.value = true);

const fecharCadastro = () => (cadAberto.value = false);
</script>


<style scoped>
.formulario{  
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    font-family: "Montserrat";

}
.infos{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    color: #fff;
}
.doubleInfos{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.titleInput{
    width: 60%;
    height: 2.5vw;
    font-size: 1vw;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 15px;
}
.specialInput{
    width: 70%;
    height: 2.5vw;
    border-radius: 5px;
    font-size: 1vw;
    border: none;
    outline: none;
}
.label{
    font-size: 1.1vw;
    width: 60%;
}
.label2{
    font-size: 1.1vw;
    width: 70%;
}
.buttonContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
.button{
    background-color: black;
    color: #fff;
    border: none;
    width: 30%;
    height: 2.5vw;
    cursor: pointer;
    border-radius: 5px;
    font-family: "Montserrat";
    font-size: 1.2vw;
}
.button:hover{
    transition: all 0.3s;
    background-color: rgb(14, 14, 14);
}
.containerAutor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat";
}
.autorForm {
    width: 400px;
    height: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.autorInput{
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
}
.buttons{
    font-family: "Montserrat";
    background-color: black;
    color: #fff;
    border: none;
    width: 100%;
    height: 2.5vw;
    cursor: pointer;
    border-radius: 5px;
    font-family: "Montserrat";
    font-size: 1.2vw;
}

.blueText{
    color: rgb(122, 122, 122);
    font-family: "Montserrat";
    text-align: end;
    margin-right: 10px;
    font-size: 1vw;
}
.openCad{
    color: #fff;
    cursor: pointer;
}
@media(max-width: 600px){
    .titleInput{
        height: 7vw;
        font-size: 2vw;
    }
    .specialInput{
        height: 6vw;
        font-size: 2vw;
    }
    .button{
        width: 30%;
        height: 4.5vw;
        font-size: 2vw;
    }
    .label,.label2,.openCad,.blueText{
        font-size: 2vw;
    }
}
</style>
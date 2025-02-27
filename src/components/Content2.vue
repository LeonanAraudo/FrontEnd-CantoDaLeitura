<template>
    <div class="container">
        <div v-if="store.isLoading">Carregando...</div>
        <div v-for="livro in store.livros" :key="index" class="card">
            <div class="autorContainer">
                <p class="autor">{{ livro.autor }}</p>
            </div>
            <div class="titleCard">
                <p>{{ livro.titulo }}</p>
            </div>
            <div class="editCard">
                <p>{{ livro.data }}</p>
                <img 
                    width="22" height="22" 
                    src="https://img.icons8.com/metro/26/edit.png" 
                    alt="edit" 
                    @click="abrirEdicao(livro)"
                />
            </div>
        </div>
        <div v-if="modalAberto" class="modal">
            <div class="modal-content">
                <h3>Editar Livro</h3>
                <input class="input" v-model="livroSelecionado.titulo" placeholder="Editar título" />
                <input class="input" v-model="livroSelecionado.data" type="date"/>
                <select class="input" v-model="livroSelecionado.autor" name="" id="">
                    <option v-for="(livro, index) in livros" :key="index" :value="livro.autor">{{ livro.autor }}</option>
                </select>
                <button @click="salvarEdicao" class="buttonEdit">Salvar</button>
                <button @click="fecharModal" class="buttonEdit" >Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usaBiblioteca } from '@/stores/counter';
import { ref } from 'vue';

const store = usaBiblioteca()
const livros = ref([]);
const modalAberto = ref(false);
const livroSelecionado = ref({});

const abrirEdicao = (livro) => {
    livroSelecionado.value = { ...livro }; 
    modalAberto.value = true;
};

const salvarEdicao = () => {
  store.editarLivro(livroSelecionado.value); 
  modalAberto.value = false;
};
const fecharModal = () => {
    modalAberto.value = false;
};
</script>

<style scoped>
.container {
    width: 100%;
    font-family: "Montserrat";
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 60px;
    flex-wrap: wrap;
}
.card {
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.card:hover {
    transform: scale(1.05);
    transition: 0.3s;
}
.titleCard {
   text-align: center;
   font-weight: bold;
}
.editCard {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.autorContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.input{
    width: 100%;
    height: 40px;
}
.modal {
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
.modal-content {
    width: 400px;
    height: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.buttonEdit{
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
</style>

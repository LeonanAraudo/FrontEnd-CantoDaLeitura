<template>
    <div class="container">
        <div v-for="livro in store.livros" :key="livro.id" class="card">
            <div class="autorContainer">
                <p class="autor">
                    {{ store.autores.find(autor => autor.id === livro.author)?.name || 'Autor desconhecido' }}
                </p>
            </div>
            <div class="titleCard">
                <p>{{ livro.title }}</p>
            </div>
            <div class="editCard">
                <p>{{ livro.data_publicação }}</p>
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
                <input class="input" v-model="livroSelecionado.title" placeholder="Editar título" />
                <input class="input" v-model="livroSelecionado.data_publicação" type="date"/>
                <select class="input" v-model="livroSelecionado.author" name="author" id="AutorBook" required >
                    <option v-for="autor in store.autores" key:autor.id :value="autor.id">{{ autor.name }}</option>
                 </select>
                <button @click="salvarEdicao" class="buttonEdit">Salvar</button>
                <button @click="fecharModal" class="buttonEdit" >Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usaBiblioteca } from '@/stores/counter';
import { ref , onMounted} from 'vue';

const store = usaBiblioteca();
const modalAberto = ref(false);
const livroSelecionado = ref({});

const abrirEdicao = (livro) => {
    livroSelecionado.value = { ...livro }; 
    modalAberto.value = true;
};

const salvarEdicao = async () => {
    store.editarLivro(livroSelecionado.value.id, {
        ...livroSelecionado.value,
        author_id: livroSelecionado.value.author 
    });
    modalAberto.value = false;

};

const fecharModal = () => {
    modalAberto.value = false;
};

onMounted(() => {
  store.fetchLivros(); 
  store.fetchAutores();
});

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

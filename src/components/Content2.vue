<template>
    <div class="container">
        <div class="tierContainer">
            <button @click="newModalAberto" class="buttonTops">Ranking autores com mais publicações 🏆</button>
        </div>
        <DataTable :value="store.livros" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 60rem">
            <Column field="authorName" header="Autor">
                <template #body="slotProps">
                    {{ store.autores.find(a => a.id === slotProps.data.author)?.name }}
                </template>
            </Column>
            <Column field="title" header="Nome do livro" style="width: 25%"></Column>
            <Column field="data_publicação" header="Data de publicação" style="width: 25%"></Column>
            <Column field="representative" header="" style="width: 25%">
            <template #body="slotProps">
                <img 
                    class="cursor"
                    width="17" height="17" 
                    src="https://img.icons8.com/metro/26/edit.png" 
                    alt="edit" 
                    @click="abrirEdicao(slotProps.data)"
                />
             </template>
            </Column>
        </DataTable>
        <div v-if="topAuthors" class="modal">
            <div class="classificar">
                <div v-for="(autor, index) in store.topAutores" :key="index">
                    <p class="colocacao">{{ index + 1 }}</p>
                    <p class="colocados">{{ autor.name }}</p>
                </div>
                <div @click="newModalFechado" class="backContainer"><p class="x">X</p></div>
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const store = usaBiblioteca();
const modalAberto = ref(false);
const livroSelecionado = ref({});
const topAuthors = ref(false)

const abrirEdicao = (livro) => {
    livroSelecionado.value = { ...livro }; 
    modalAberto.value = true;
};
const salvarEdicao = async () => {
    store.editarLivro(livroSelecionado.value.id,livroSelecionado.value);
    modalAberto.value = false;
};
const newModalAberto = ()=>{ topAuthors.value = true }

const newModalFechado = ()=>{ topAuthors.value = false }

const fecharModal = () => { modalAberto.value = false };

onMounted(() => {
    store.fetchLivros(); 
    store.fetchAutores();
    store.fetchTopAutores();
});

</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
}
.card {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Montserrat";
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
}
.autorContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat";
}
.cursor{
    cursor: pointer;
}
.input{
    width: 100%;
    height: 40px;
    font-family: "Montserrat";
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
.tierContainer{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: baseline;
}
.buttonTops{
    width: 30%;
    height: 35px;
    background: linear-gradient(45deg,#ffcc00, #cc7a00);
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
}
.buttonTops:hover{
    transform: scale(1.1);
    transition:all 0.3s;
    background-color: rgb(14, 14, 14);
}
.classificar{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: black;
    padding-left: 40px;
}
.colocacao{
    font-family: 'Saira Stencil One';
    color: #fff;
    font-size: 5vw;
}
.colocados{
    color: #fff;
    font-size: 1.2vw;
}
.x{
    color: #fff;
    cursor: pointer;
}
.backContainer{
    font-size: 2vw;
    height: 80%;
}
@media(max-width: 600px){
    .tierContainer{
        margin-bottom: 200px;
    }
    .buttonTops{
        width: 60%;
    }
    .buttonEdit{
        height: 6vw;
        font-size: 2vw;
    }
    .colocacao{
        font-size: 10vw;
    }
    .colocados{
        font-size: 3vw;
    }
    .card{
        width: 150px;
        height: 150px;
    }
}
</style>

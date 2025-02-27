<template>
    <div class="container">
        <div v-for="(livro, index) in livros" :key="index" class="card">
            <div class="titleCard">
                <p>{{ livro.titulo }}</p>
            </div>
            <div class="editCard">
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
                <input v-model="livroSelecionado.titulo" placeholder="Editar título" />
                <button @click="salvarEdicao">Salvar</button>
                <button @click="fecharModal">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const livros = ref([]);
const modalAberto = ref(false);
const livroSelecionado = ref({});

onMounted(() => {
    livros.value = [
        { id: 1, titulo: "O Senhor dos Anéis as reliquias da " },
        { id: 2, titulo: "Game of Thrones" },
        { id: 3, titulo: "Dark Souls - História" },
        { id: 1, titulo: "O Senhor dos Anéis" },
        { id: 2, titulo: "Game of Thrones" },
        { id: 3, titulo: "Dark Souls - História" },
        { id: 1, titulo: "O Senhor dos Anéis" },
        { id: 2, titulo: "Game of Thrones" },
        { id: 1, titulo: "O Senhor dos Anéis" },
        { id: 2, titulo: "Game of Thrones" },
        { id: 3, titulo: "Dark Souls - História" },
        { id: 1, titulo: "O Senhor dos Anéis" },
        { id: 2, titulo: "Game of Thrones" },
        { id: 3, titulo: "Dark Souls - História" },
        { id: 1, titulo: "O Senhor dos Anéis" },
        { id: 2, titulo: "Game of Thrones" },
        { id: 3, titulo: "Dark Souls - História" }
    ];
});

const abrirEdicao = (livro) => {
    livroSelecionado.value = { ...livro }; 
    modalAberto.value = true;
};

const salvarEdicao = () => {
    const index = livros.value.findIndex(l => l.id === livroSelecionado.value.id);
    if (index !== -1) {
        livros.value[index].titulo = livroSelecionado.value.titulo;
    }
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
    gap: 20px;
    flex-wrap: wrap;
}
.card {
    width: 200px;
    height: 150px;
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
    justify-content: flex-end;
    cursor: pointer;
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
}
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>

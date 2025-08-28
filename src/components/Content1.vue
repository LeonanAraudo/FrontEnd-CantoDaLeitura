<template>
    <div class="containerContent1">
        <form class="formulario" @submit="enviarFormulario($event)">
            <div class="infos">
                <label class="label" for="NameBook">Título do livro</label>
                <input 
                    class="titleInput" 
                    id="NameBook" 
                    v-model="dados.title" 
                    type="text" 
                    required 
                    placeholder="Insira o título do livro"
                />
            </div>

            <div class="doubleInfos">
                <div class="infos">
                    <label class="label2" for="DateBook">Data de publicação</label>
                    <input 
                        class="specialInput" 
                        id="DateBook" 
                        name="data_publicação" 
                        v-model="dados.data_publicação" 
                        type="date" 
                        required
                    />
                </div>

                <div class="infos">
                    <label class="label2" for="AutorBook">Autor do Livro</label>
                    <select 
                        class="specialInput" 
                        name="author" 
                        id="AutorBook" 
                        required 
                        v-model="dados.author"
                    >
                        <option 
                            v-for="autor in store.autores" 
                            :key="autor.id" 
                            :value="autor.id"
                        >
                            {{ autor.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="buttonContainer">
                <button class="button" type="submit">Cadastrar</button>
            </div>
        </form>

        <div class="alingAutorCad">
            <p class="blueText">
                Autor não cadastrado? 
                <span class="openCad" @click="abrirCadastro">Cadastre aqui</span>
            </p>
        </div>
    </div>
    <div v-if="cadAberto" class="containerAutor">
        <div class="autorForm">
            <h3>Cadastrar autor</h3>
            
            <form @submit.prevent="cadastrarAutorNaApi">
                <div>
                    <input 
                        v-model="novoAutor" 
                        class="autorInput" 
                        type="text" 
                        placeholder="Escreva o nome do autor"
                    />
                </div>
                <div>
                    <button class="buttons" type="submit">Cadastrar</button>
                </div>
            </form>
            
            <button @click="fecharCadastro" class="buttons">Cancelar</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usaBiblioteca } from '@/stores/counter';

const store = usaBiblioteca();
const novoAutor = ref("");
const cadAberto = ref(false);

const dados = ref({
    title: "",
    data_publicação: "",
    author: "",
});

onMounted(() => {
    store.fetchAutores();
});

const cadastrarAutorNaApi = async () => {
    try {
        const autorData = { name: novoAutor.value };
        
        const response = await fetch("https://desafio-backend-obsis.onrender.com/authors/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(autorData),
        });

        if (!response.ok) {
            throw new Error("Erro ao cadastrar o autor");
        }

        const autorCriado = await response.json();
        store.addAutor(autorCriado);
        
        alert("Autor cadastrado com sucesso");
        novoAutor.value = "";
        cadAberto.value = false;

    } catch (erro) {
        alert(erro.message);
    }
};

const enviarFormulario = async (event) => {
    event.preventDefault();
    console.log(dados.value);
    
    try {
        const response = await fetch("https://desafio-backend-obsis.onrender.com/books/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(dados.value),
        });
        
        console.log(response);

        if (!response.ok) {
            throw new Error("Erro ao cadastrar livro");
        }
        
        alert("Livro cadastrado com sucesso");
        dados.value = { title: "", data_publicação: "", author: "" };
        store.addLivro(dados.value);
        
    } catch (erro) {
        alert(erro.message);
    }
};

const abrirCadastro = () => (cadAberto.value = true);
const fecharCadastro = () => (cadAberto.value = false);
</script>

<style scoped>
.containerContent1 {
    width: 100%;
    height: 100%;
    padding: 20px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
}

.formulario {
    width: 50%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
    font-family: "Montserrat";
}

.infos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
}

.doubleInfos {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10%;
}

.titleInput {
    width: 90%;
    height: 2.5vw;
    font-size: 1vw;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 15px;
    background-color: #D0D0D0;
}

.specialInput {
    width: 100%;
    height: 2.5vw;
    border-radius: 5px;
    font-size: 1vw;
    border: none;
    outline: none;
    background-color: #D0D0D0;
}

.label {
    font-size: 1.1vw;
    width: 88%;
    color: #000;
}

.label2 {
    font-size: 1.1vw;
    width: 95%;
    color: #000;
}

.buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.button {
    background-color: #370000;
    color: #fff;
    border: none;
    width: 30%;
    height: 2.5vw;
    cursor: pointer;
    border-radius: 5px;
    font-family: "Montserrat";
    font-size: 1.2vw;
}

.button:hover {
    transition: all 0.3s;
    background-color: #a30303;
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

.autorInput {
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
    padding-left: 5px;
}

.buttons {
    font-family: "Montserrat";
    background-color: #370000;
    color: #fff;
    border: none;
    width: 100%;
    height: 2.5vw;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.2vw;
}

.blueText {
    color: rgb(0, 0, 0);
    font-family: "Montserrat";
    text-align: center;
    margin-right: 10px;
    font-size: 1vw;
}

.openCad {
    font-weight: bold;
    color: #370000;
    cursor: pointer;
}

@media (max-width: 600px) {
    .containerContent1 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .formulario {
        width: 100%;
    }
    
    .titleInput {
        height: 30px;
        width: 90%;
        font-size: 3vw;
    }
    
    .specialInput {
        height: 30px;
        font-size: 3vw;
        width: 100%;
    }
    
    .doubleInfos {
        width: 90%;
    }
    
    .button {
        width: 50%;
        height: 3vh;
        font-size: 4vw;
    }
    
    .buttons {
        height: 6vw;
        font-size: 3vw;
    }
    
    .label, 
    .label2, 
    .openCad, 
    .blueText {
        font-size: 3vw;
    }
}
</style>
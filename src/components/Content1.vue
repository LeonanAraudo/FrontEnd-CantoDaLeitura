<template>
   <form class="formulario">
    <div class="infos">
        <label class="label" for="NameBook">Título do livro</label>
        <input class="titleInput" id="NameBook" type="text" placeholder="Insira o título do livro"/>
    </div>
    <div  class="infos">
        <label for="DateBook">Data de publicação</label>
        <input class="dateInput" id="DateBook" type="date"/>
    </div>
    <div class="infos">
        <label for="DateBook">Autor do Livro</label>
        <select name="" id="">
            <option value="opt1">Opção 1</option>
        </select>
    </div>
    <div>
        <button type="submit">Cadastrar</button>
    </div>
   </form>
</template>

<script setup>
</script>

<style scoped>
.formulario{  
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 20px;
}
.infos{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    color: #fff;
}
.titleInput{
    width: 60%;
    height: 35px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 15px;
}
.label{
    width: 60%;
}
.dateInput{
    width: 30%;
    height: 35px;
    font-size: 17px;
    border-radius: 5px;
}
</style>

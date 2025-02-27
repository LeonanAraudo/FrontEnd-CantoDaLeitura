<template>
   <form class="formulario">
    <div class="infos">
        <label class="label" for="NameBook">Título do livro</label>
        <input class="titleInput" id="NameBook" type="text" placeholder="Insira o título do livro"/>
    </div>
    <div class="doubleInfos">
        <div  class="infos">
            <label class="label2" for="DateBook">Data de publicação</label>
            <input class="dateInput" id="DateBook" type="date"/>
        </div>
        <div class="infos">
            <label class="label2" for="DateBook">Autor do Livro</label>
            <select class="selectInput" name="" id="">
                <option value="opt1">Opção 1</option>
            </select>
        </div>
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
.selectInput{
    width: 70%;
    height: 2.5vw;
    border-radius: 5px;
}
.dateInput{
    width: 70%;
    height: 2.5vw;
    font-size: 1vw;
    border-radius: 5px;
}
.label{
    font-size: 1.2vw;
    width: 60%;
}
.label2{
    font-size: 1.2vw;
    width: 70%;
}
</style>

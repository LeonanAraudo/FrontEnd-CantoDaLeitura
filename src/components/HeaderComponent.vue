<template>
    <header class="container">
      <div class="logo">
        <img class="imgLogo" src="/logo1.png" alt="logo" >
      </div>
    </header>
</template>

<script setup>
</script>

<style scoped>
.container{
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  background-color: #370000;
}
.logo{
  width: 14vw;
  height: 4.3vw;
  margin-left: 20px;
}
.imgLogo{
  width: 100%;
  height: 100%;
  background-size: cover;
}
@media(max-width:600px){
  .logo{
    width:100vw;
    height: 15vw;
  }
  .imgLogo{
    width: 40%;
  }
}
</style>

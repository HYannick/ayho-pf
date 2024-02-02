<template>
  <div class="heading">
    <div class="logo">
      <img :src="'logo.svg'" alt="logo"/>
    </div>
    <h1 class="name">Yannick <span>Houssin</span></h1>
    <p class="intro">Développeur front-end freelance confirmé, je vous accompagne avec passion depuis plus de 8 ans dans la réalisation technique de vos projets.
      J’interviens principalement sur le développement front de projets web et d’applications mobiles pour des entreprises de toutes tailles. C'est
      avec
      plaisir que je vous accompagnerai dans le développement de vos projets !</p>
    <div class="social">
      <a href="https://www.linkedin.com/in/yannick-houssin-96b70666/" target="_blank">
        Linkedin
      </a>
      <div class="dot"></div>
      <a href="https://github.com/HYannick" target="_blank">
        Github
      </a>
      <div class="dot"></div>
      <a href="https://www.malt.fr/profile/yannickhoussin" target="_blank">
        Malt
      </a>
    </div>
  </div>
  <div class="divider"></div>
</template>
<style lang="scss">
.social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto 0;
  max-width: 500px;
  .dot {
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 3px;
  }
}
.divider {
  width: 100%;
  height: 2px;
  background-color: #000;
  margin: 50px 0;
  opacity: 0.1;
}
.name {
  text-align: center;
  font-size: 70px;
  font-weight: lighter;
  span {
    font-weight: bold;
  }
}
.heading {
  max-width: 1366px;
  padding: 50px;
  margin: 0 auto;
}
.intro {
  text-align: center;
  font-weight: 100;
  font-size: 20px;
}
.logo {
  margin: 0 auto;
  width: 100px;
  aspect-ratio: 1;
  padding: 15px;
  border-radius: 50px;
  box-shadow: 0 0 0 5px #000;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
<script setup lang="ts">
</script>
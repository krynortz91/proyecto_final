<template>
  <section class="hero">
    <video class="hero__video" autoplay muted playsinline loop>
      <source src="https://cdn2.hubspot.net/hubfs/5540962/EcoCamp_2019/Video/EcoCamp%20Homepage%20Video%202%20L.mp4" type="video/mp4" >
    </video>
    <div class="hero__content">
      <h1 class="hero__title">Conectando con la tierra</h1>
      <p class="hero__text">Escapa del bullicio de la ciudad y relájate en la naturaleza</p>
      <!-- <a class="hero__link"><p></p></a> -->
    </div>
  </section>

  <section id="quienessomos" class="container">
    <div class="row">
      <h2 class="col">Quienes Somos</h2>
    </div>
    
    <div class="seccion__content row">
      <p class="col">Somos una empresa dedicada a ofrecer una experiencia única de alojamiento en domos sustentables en la hermosa tierra austral. Nos enorgullece proporcionar un ambiente ecológico y sostenible para nuestros huéspedes, mientras disfrutan de una estadía cómoda y tranquila en medio de la naturaleza. ¡Bienvenidos a nuestro paraíso patagónico!</p>
    </div>
  </section>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
  .hero {
    width: 100vw;
    position: relative;
  }
  .hero__video{
    max-height: 80vh;
    width: 100vw;
    object-fit: cover;
    position: relative;
  }
.hero__content{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    color: #FFF;
    z-index: 1;
  }
  .hero__title{
    color: #FFF;
    font-size: 64px;
    font-size: 32px;
    margin-bottom: 20px;
 

  }
  .hero__text{
      color: #FFF;
      font-size: 20px;
      margin-bottom: 20px;
  }
  .hero__link{
      color: #333;
      font-size: 20px;
      background-color: #FFF;
      border: 2px solid #FFF;
      text-decoration: none;
      padding: 10px;
      border-radius: 2px;
  }

  .container{
    background-color: none;
  }
  @media screen and (min-width: 768px) {
    .hero__title{
      font-size: 64px;
    }
  }
  @media screen and (min-width: 992px) {
   .hero__title{
      font-size: 72px;
    }
  }
</style>

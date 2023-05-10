<template>
  <div id="carouselSouvenirs" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="9" aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselSouvenirs" data-bs-slide-to="10" aria-label="Slide 11"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" v-for= "souvenir in souvenirs" :key="souvenir.id" >
      <img :src= "souvenir.image" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ souvenir.name }}</h5>
        <p>{{ souvenir.description }}</p>
        <a :href="'#'+souvenir.id">Ver más</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselSouvenirs" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselSouvenirs" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section v-for="souvenir in souvenirs" class="container" :id ="souvenir.id">
  <div class="row">
    <h2>{{ souvenir.name }}</h2>
    
  </div>
  <div class="row">
    <div class="col">
      <img :src= "souvenir.image" class="d-block w-100" alt="...">
    </div>
    <div class="col">
      <p class="descripcion">{{ souvenir.description }}</p>
      <div class="precio">{{ souvenir.price }}</div>

    </div>
  </div>


</section>
</template>
<script>
import { mapState } from 'vuex';
import { Souvenirs } from '@/services/Souvenirs.js';

export default {
  name: "souvenirs",
  components: {
  },
  data() {
    return {
      souvenirs: [],
      cargando: false
    };
  },
  computed: {
    ...mapState(['souvenirs'])
  },
  created: async function () {
    try {
      this.cargando = true;
      // Simulación de obtención de datos desde el archivo Souvenirs.js
      this.souvenirs = Souvenirs.getAllSouvenirs();
      console.log(this.souvenirs);
      this.cargando = false;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
#carouselSouvenirs img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}
/* #products__cards{
    background-color: #F2F0EB ;
    padding: 2rem;
  } */

</style>

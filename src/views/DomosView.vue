<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="carouselDomo" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.ecocamp.travel/hubfs/2%20-%20Domo%20Suite_resultado.webp" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://domosprefabricados.cl/images/slider/1.webp" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/logo.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselDomo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselDomo" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    
  </div>
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

<style>


.carousel-item img{
  height: 700px;
  object-fit: cover;
}
</style>
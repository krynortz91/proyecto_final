<template>
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="ave in aves">
                <div class="card h-100">
                <img :src="ave.images.main" class="card-img-top" alt="...">
                <!-- <img :src="ave.images.map" class="card-img-top" alt="..."> -->
                

                <div class="card-body">
                    <h5 class="card-title">{{ ave.name.spanish }}</h5>
                    <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                    <!-- <h4 class= "card-description">{{ ave.iucn.description }}</h4> -->
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "fauna",
  components: {
  },
  data() {
    return {
      aves: [],
      cargando: false
      
    };
  },
//   computed: {
//     ...mapState(['domos'])
//   },
  created: async function () {
    try {
        let promesa = await fetch('https://aves.ninjas.cl/api/birds')
         let birds = await promesa.json();
        this.aves = birds.slice(0, 10);
        console.log(this.aves);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    
}
}

</script>
<template> 
  <div class="navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="" width="60"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link class="link-nav px-3" to="/">Inicio</router-link>
            <router-link class="link-nav px-3" to="/domos">Domos</router-link>
            <router-link class="link-nav px-3" to="/productos">Souvenirs</router-link>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  </template>
      
  <script>

  //import { mapGetters, mapMutations } from 'vuex';
  // import { auth } from "@/auth/auth.service";

  export default {
      name: 'NavBar',
      //  computed:{
      // //...mapGetters(['loginTrue']),
      //  },
      // methods:{
      //     ...mapMutations(['cambiaEstadoLoginFalse']),
      //     async logout() {
      //         try {
      //             await auth.signOut();
      //             this.$store.state.cursos=[]
      //             this.$store.state.usuarioConectado=''
      //             this.cambiaEstadoLoginFalse();
      //             this.$router.push('/');
                  
      //         } catch(error){
      //             console.log(error)
      //         }
      //     }
      // }
  };

</script>

<style>
#login{
  cursor: pointer;
}
.navbar{
  list-style-type: none;
  background-color: #DAB6FC;
  color: azure;
  padding: .5rem 2rem;
  font-size: 16px;
  margin: 0%;
  font-family: 'Montserrat', sans-serif;
}
.link-nav{
  text-decoration: none;
  color: azure;
  transition: all 0.5s ease;
}
.link-nav:hover{
  color: #F57ED2;
  transform: scale(1.2);
}
.list-item{
  cursor: pointer;
}
.btn-logout{
  text-decoration: none;
  color: azure;
  border: none;
  transition: all 0.5s ease;
  background-color: #F57ED2;
}
.btn-logout:hover{
  transform: scale(1.2);
}
.btn.btn-no{
  background-color: #82daf0;
  color: azure;
}
.btn.btn-no:hover{
  background-color: #71c3d7;
  color: azure;
}
.btn.btn-si{
  background-color: #f082bf;
  color: azure;
}
.btn.btn-si:hover{
  background-color: #d676ab;
  color: azure;
}
#exampleModal{
  font-family: 'Montserrat', sans-serif;
}
</style>
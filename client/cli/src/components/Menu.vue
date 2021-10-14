<template>
  <div id="app">
    <div id="container">
      <b-container fluid>
        <b-row>
          <b-col lg="12">
            <div id="nav">
              <b-navbar id="navbar" toggleable="lg" type="" variant="">
                <b-navbar-brand href="#" class="text_brand"
                  >EasyReserve</b-navbar-brand
                >

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav> </b-navbar-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                      <router-link to="/">Inicio</router-link>
                    </b-nav-item>

                    <b-nav-item-dropdown text="Habitaciones" right>
                      <b-dropdown-item>
                        <router-link
                          to="/habitaciones_junior"
                          class="text_sub_menu"
                          >Junior</router-link
                        >
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <router-link
                          to="/habitaciones_sencillas"
                          class="text_sub_menu"
                          >Sencilla</router-link
                        >
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <router-link
                          to="/habitaciones_presidenciales"
                          class="text_sub_menu"
                          >Presidencial</router-link
                        >
                      </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item>
                      <router-link to="/nosotros">Sobre Nosotros</router-link>
                    </b-nav-item>
                    <b-nav-item>
                      <router-link to="/dashboard"
                        >Gestionar Habicaciones</router-link
                      >
                    </b-nav-item>

                    <b-nav-item-dropdown text="Sesion">
                      <!-- Using 'button-content' slot -->
                      <div >
                        <!--condicion para renderizar sesion  -->
                        <b-dropdown-item href="#" >
                          <router-link to="/login" class="text_sub_menu"
                            >Profile</router-link
                          >
                        </b-dropdown-item>

                        <b-dropdown-item href="#" @click.prevent="removerItem" >
                          <router-link
                            to="/login"
                            
                            class="text_sub_menu"
                            >Sing up</router-link
                          >
                        </b-dropdown-item>
                      </div>
                      <div>
                        <b-dropdown-item href="#" >
                          <router-link to="/login" class="text_sub_menu"
                            >Login</router-link
                          >
                        </b-dropdown-item>
                      </div>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    var auth = window.localStorage.getItem("auth");
    
    var autenticacion = { mostrar: Boolean };
    console.log("su autentificacion esta :" + auth);
    if (auth === null) {
      autenticacion.mostrar = false;
    } else {
      autenticacion.mostrar = true;
    }
    return {
      autenticacion,
    };
  },
  methods: {

    removerItem() {
      window.localStorage.removeItem("auth");
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container {
  background: rgb(51, 50, 50);
  padding-bottom: 10px;
  padding-right: 50px;
  margin-bottom: 20px;
}

.text_sub_menu {
  color: rgba(51, 50, 50, 0.8) !important;
}

.text_brand {
  color: rgba(216, 88, 163, 0.9) !important;
}

#nav-collapse {
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fb8ece;
}
</style>
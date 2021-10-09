<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="#">EasyReserve</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item>
                            <router-link to="/">Inicio</router-link>
                        </b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="Habitaciones" right>
                            <b-dropdown-item>
                                <router-link to="/habitaciones_junior">Junior</router-link>
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <router-link to="/habitaciones_sencillas">Sencilla</router-link>
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <router-link to="/habitaciones_presidenciales">Presidencial</router-link>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>

                            <b-nav-item>
                                <router-link to="/nosotros">Sobre Nosotros</router-link>
                            </b-nav-item>
                                       <b-nav-item>
                                <router-link to="/dashboard">Gestionar Habicaciones</router-link>
                            </b-nav-item>

                        <b-nav-item-dropdown text="Sesion" class="float-right">
                            <!-- Using 'button-content' slot -->
                            <div> <!--condicion para renderizar sesion  -->
                                <b-dropdown-item href="#">Profile</b-dropdown-item>
                                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                            </div>
                            <div >
                                <b-dropdown-item href="#">
                                    <router-link to="/login">Login</router-link>
                                </b-dropdown-item>
                            </div>
                        </b-nav-item-dropdown>
                               
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
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

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
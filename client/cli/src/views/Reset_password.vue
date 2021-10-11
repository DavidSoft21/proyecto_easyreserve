<template>
  <div class="crear_cuenta">
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-container fluid="sm">
      <h1>Recuperar Cuenta</h1>
      <b-row>
        <b-col lg="4"> </b-col>
        <b-col lg="4">
          <b-form @submit.prevent="registrarUsuario" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Nombre usuario:"
              label-for="input-1"
              description="Nombre usuario."
            >
              <b-form-input
                id="input-1"
                v-model="form.userName"
                type="text"
                placeholder="Nombre usuario."
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Recuperar</b-button>
          </b-form>
          <div>
            <div>
              <router-link to="/login">Iniciar Sesion</router-link>
            </div>
            <div>
              <router-link to="/crear_cuenta">Registrarse</router-link>
            </div>
          </div>
        </b-col>

        <b-col lg="4"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Crear_cuenta",
  data() {
    return {
      form: {
        userEmail: "",
        userPassword: "",
      },
      show: true,
    };
  },
  props: {
    msg: String,
  },
  show: true,
  accounts: [],
  methods: {
    registrarUsuario() {
      console.log("buscando usuario...");
      this.axios.get("/accounts").then((res) => {
        this.accounts = res.data;
        this.accounts.forEach((value, index) => {
          if (this.form.userEmail === value.userEmail) {
            console.log("user ok");
            if (this.form.userPassword === value.userPassword) {
              console.log("pass ok");
              window.localStorage.setItem("auth", "ok");
              this.$router.push({ path: "/dashboard" });
            }
          }
        });
      });
    },
  },
};
</script>
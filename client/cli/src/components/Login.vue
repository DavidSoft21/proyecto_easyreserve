<template>
  <div class="login">
    <b-container fluid="sm">
         <h1>{{ msg }}</h1>
      <b-row>
        <b-col lg="4" >
        </b-col>

        <b-col lg="4" >
          <b-form @submit.prevent="buscarUsuario" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email Usuario:"
              label-for="input-1"
              description="Ingrese el email."
            >
              <b-form-input
                id="input-1"
                v-model="form.userEmail"
                type="email"
                placeholder="Ingrese el email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Ingrese Contraseña:"
              label-for="input-2"
              description="Ingrese la contraseña."
            >
              <b-form-input
                id="input-2"
                v-model="form.userPassword"
                type="password"
                placeholder="Ingrese la contraseña"
                required
              ></b-form-input>
            </b-form-group>
            <div>
              <div>
                 <router-link to="/crear_cuenta">Iniciar Sesion</router-link>
              </div>
              <div>
                 <router-link to="/reset_password">Olvido su contraseña?</router-link>
              </div>
            </div>

            <b-button type="submit" variant="primary">Ingresar</b-button>
          </b-form>
        </b-col>

        <b-col lg="4">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
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
    buscarUsuario() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

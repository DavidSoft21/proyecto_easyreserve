<template>
  <div class="crear_cuenta">
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-container fluid="sm">
      <h1>Registrarse</h1>
      <b-row>
        <b-col lg="4"> </b-col>
        <b-col lg="4">
          <b-form @submit.prevent="registrarUsuario" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Nombres:"
              label-for="input-1"
              description="Nombres."
            >
              <b-form-input
                id="input-1"
                v-model="form.firstName"
                type="text"
                placeholder="Nombres."
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Apellidos:"
              label-for="input-2"
              description="Apellidos."
            >
              <b-form-input
                id="input-2"
                v-model="form.LastName"
                type="text"
                placeholder="Apellidos."
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Nombre usuario:"
              label-for="input-3"
              description="Nombre usuario."
            >
              <b-form-input
                id="input-3"
                v-model="form.userName"
                type="text"
                placeholder="Nombre usuario."
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Email:"
              label-for="input-4"
              description="Email."
            >
              <b-form-input
                id="input-4"
                v-model="form.userEmail"
                type="text"
                placeholder="Email."
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="Contraseña:"
              label-for="input-5"
              description="Contraseña."
            >
              <b-form-input
                id="input-5"
                v-model="form.userPassword"
                type="text"
                placeholder="Contraseña."
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="Comfirmar contraseña:"
              label-for="input-6"
              description="Comfirmar contraseña."
            >
              <b-form-input
                id="input-6"
                v-model="form.confirmUserPassword"
                type="text"
                placeholder="Comfirmar ontraseña."
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Registrar</b-button>
          </b-form>
          <div>
            <div>
              <router-link to="/login">Iniciar Sesion</router-link>
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
        firstName: "",
        LastName: "",
        userName: "",
        userEmail: "",
        userPassword: "",
        confirmUserPassword: "",
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
      this.axios
        .post("/create/account", this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
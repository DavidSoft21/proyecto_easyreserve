<template>
  <div>
    <b-form @submit.prevent="crear_hab" @reset="onReset" v-if="show">
      <b-container>
        <b-form-group id="nombre" label="nombre:" label-for="nombre">
          <b-form-input
            id="nombre"
            v-model="form.nombre"
            placeholder="Enter nombre"
            required
          ></b-form-input>
        </b-form-group>

        <label for="precio">Boton para precio</label>
        <b-form-spinbutton
          id="precio"
          v-model="form.precio"
          min="50000"
          max="100000000000"
          step="1000"
        ></b-form-spinbutton>
        <p>va: {{ this.form.precio }}</p>

        <b-form-group id="tipo_hab" label="tipo_hab:" label-for="tipo_hab">
          <b-form-select
            id="tipo_hab"
            v-model="form.tipo_hab"
            :options="tipo_hab"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group>
          <b-form-checkbox
            id="estado"
            v-model="form.estado"
            name="estado"
            value="accepted"
            unestado-value="not_accepted"
            >Disponibilidad de la habitacion
          </b-form-checkbox>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-container>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Crear_habitacion",
  beforeCreate() {
    console.log("metodo beforeCreate");
    var auth = window.localStorage.getItem("auth");
    console.log("su autentificacion esta :" + auth);

    if (auth !== "ok") {
      console.log("no logged");
      this.$router.push({
        path: "/",
      });
    }
  },
  data() {
    return {
      form: {
        nombre: "",
        precio: "",
        estado: "",
      },
      tipo_hab: [
        { text: "Select One", value: null },
        "Habitaciones_junior",
        "Habitaciones_presidenciales",
        "Habitaciones_sencillas",
      ],
      show: true,
    };
  },
  methods: {
    crear_hab() {
      console.log(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.nombre = "";
      this.form.tipo_hab = "";
      this.form.precio = "";
      this.form.estado = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
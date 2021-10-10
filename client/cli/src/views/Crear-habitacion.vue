<template>
  <div>
     <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-container>

      <b-form-group id="Nombre" label="Name:" label-for="Nombre">
        <b-form-input
          id="Nombre"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-file
        v-model="form.file"
        :state="Boolean(file)"
        placeholder="Elija un archivo o suéltelo aquí ..."
        drop-placeholder="Elija la imagen"
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

      <label for="precio">Boton para precio</label>
      <b-form-spinbutton id="precio" v-model="form.value" min="50000" max="100000000000" step="1000"></b-form-spinbutton>
      <p>Precio: {{ value }}</p>

      <b-form-group id="Informacion" label="Ingrese la informacion" label-for="Informacion">
        <b-form-input
          id="Informacion"
          v-model="form.name2"
          placeholder="Ingrese la informacion"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="Tipos_Habitacion" label="Tipos_Habitacion:" label-for="Tipos_Habitacion">
        <b-form-select
          id="Tipos_Habitacion"
          v-model="form.Tipos_Habitacion"
          :options="Tipos_Habitacion"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group>
      <b-form-checkbox
        id="Activo"
        v-model="form.checked"
        name="Activo"
        value="accepted"
        unchecked-value="not_accepted"
      >La habitacion esta disponible
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
    data() {
      return {
        form: {
          name: '',
          file: null,
          value: 50000,
          name2:'',
          checked: []
        },
        Tipos_Habitacion: [{ text: 'Select One', value: null }, 'Habitaciones_junior', 'Habitaciones_presidenciales', 'Habitaciones_sencillas'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.file = null
        this.form.Tipos_Habitacion = null
        this.form.value = 50000
        this.form.name2 = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
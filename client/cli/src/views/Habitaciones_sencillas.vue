<template>
<b-container>
  <div>
    <h1>Habitaciones Sencillas</h1>
    <b-card
      title="Habitacion sencilla"
      img-src="https://hotelseminariobilbao.com/wp-content/uploads/2017/08/02.Habitacion-Suite-1024x480.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 350px"
      class="mb-2"
    >
      <b-card-text>
        Esta habitacion cuenta con todo lo necesario para su estadia cuenta con, baño, cama, tv, escritorio, mesa de noche y mas.
      </b-card-text>

      <b-button href="#" variant="primary">Reservar</b-button>
    </b-card>
  </div>
</b-container>
</template>

<script>
// @ is an alias to /src
//import Login from '@/components/Login.vue'

export default {
  name: 'Sencilla',
  components: {
    //Login
  }
}
</script>

<template>
  <b-container>
    <b-row>
      <h1 id="titulo">Habitaciones Presidenciales</h1>
      <b-col lg="4">
        <b-card
          title="Habitación Presidencial"
          img-src="https://www.oceaniacruises.com/sites/default/files/marina-suit-and-state-rooms-hero-1024x480-oceania-suite.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 350px"
          class="mb-2"
        >
          <b-card-text>
            Esta habitacion es pequeñacuenta con una cama y baño.
          </b-card-text>

          <b-button href="#" variant="primary">Reservar</b-button>
        </b-card>
      </b-col>

      <b-col lg="4">
        <b-card
          title="Habitación Presidencial"
          img-src="https://www.oceaniacruises.com/sites/default/files/marina-suit-and-state-rooms-hero-1024x480-oceania-suite.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 350px"
          class="mb-2"
        >
          <b-card-text>
            Esta habitacion es pequeñacuenta con una cama y baño.
          </b-card-text>

          <b-button href="#" variant="primary">Reservar</b-button>
        </b-card>
      </b-col>
      <b-col lg="4">
        <b-card
          title="Habitación Presidencial"
          img-src="https://www.oceaniacruises.com/sites/default/files/marina-suit-and-state-rooms-hero-1024x480-oceania-suite.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 350px"
          class="mb-2"
        >
          <b-card-text>
            Esta habitacion es pequeñacuenta con una cama y baño.
          </b-card-text>

          <b-button href="#" variant="primary">Reservar</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
//import Login from '@/components/Login.vue'

export default {
  name: "Presidencial",
  components: {},
};
</script>

<style>
#titulo {
  margin-bottom: 80px;
}

b-card {
  margin: 50px;
}
</style>




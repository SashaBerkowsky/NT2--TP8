<template>
  <section class="src-componentes-alumnos">
    <div class="jumbotron p-3">
      <h1>Alumnos</h1>
      <hr />

      <table class="table">
        <tr class="bg-dark text-white">
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
        </tr>

        <tr
          class="bg-table"
          v-for="(alumno, index) in alumnosVuex"
          :key="index"
        >
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.email }}</td>
          <td>{{ alumno.edad }}</td>
        </tr>
      </table>
      <hr />
      <h4 v-if="alumnosVuex.length > 0" class="alert alert-warning">
        Cantidad de alumnos encontrados: {{ alumnosVuex.length }}
      </h4>
      <h4 v-else class="alert alert-warning">No hay alumnos cargados</h4>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-alumnos',
    props: [],
    mounted () {
        this.$store.dispatch('getAlumnos')
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
      alumnosVuex(){
        return this.$store.state.alumnos
      }
    }
}


</script>

<style scoped lang="css">
.src-componentes-alumnos {
}
.jumbotron {
  background-color: rgb(149, 214, 181);
}

.bg-table {
  background-color: burlywood !important;
}
</style>

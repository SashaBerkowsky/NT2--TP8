export default {
  name: "src-componentes-alumno-form",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 5,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },

    async enviar() {
      console.log({ ...this.formData });
      if (this.formState.$valid) {
        this.$store.dispatch("addAlumno", this.formData);
        this.formData = this.getInicialData();
        this.formState._reset();
      } else {
        alert("Datos invalidos");
      }
    },
  },
};

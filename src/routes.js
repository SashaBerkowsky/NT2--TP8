import Vue from "vue";
import VueRouter from "vue-router";
import Alumnos from "./components/Alumnos";
import AlumnoForm from "./components/AlumnoForm/AlumnoForm.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Alumnos },
    { path: "/crearAlumno", component: AlumnoForm },
  ],
});

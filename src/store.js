import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL_RECURSOS = "https://60ad2d839e2d6b0017459278.mockapi.io/tp4/alumnos";

export default new Vuex.Store({
  state: {
    alumnos: [],
  },
  actions: {
    async getAlumnos({ commit }) {
      try {
        const { data: alumnos } = await axios(URL_RECURSOS);
        commit("getAlumnos", alumnos);
      } catch (err) {
        commit("getAlumnos", []);
      }
    },
    async addAlumno({ commit }, alumno) {
      try {
        await axios.post(URL_RECURSOS, alumno);
        commit("addAlumno", alumno);
      } catch (err) {
        alert("ERR POSTING ALUMNO: " + err.message);
      }
    },
  },
  mutations: {
    getAlumnos(state, alumnos) {
      state.alumnos = alumnos;
    },
    addAlumno(state, alumno) {
      state.alumnos.push(alumno);
    },
  },
});

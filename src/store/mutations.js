import { PUSHTODO, DELTODO, TOGTODO, AMENDTODO } from "./mutations-type.js";

let id = 0;
export default {
  [PUSHTODO](state, payload) {
    payload.id = id++;
    payload.complete = false;
    state.todos.push(payload);
  },
  [DELTODO](state, payload) {
    state.todos.forEach((v, i, arr) => {
      if (v.id == payload.id) {
        arr.splice(i, 1);
        return;
      }
    });
  },
  [TOGTODO](state, payload) {
    state.todos.forEach(v => {
      if (v.id == payload.id) {
        v.complete = !v.complete;
        return;
      }
    });
  },
  [AMENDTODO](state, payload) {
    state.todos.forEach(v => {
      if (v.id == payload.id) {
        v.txt = payload.txt;
        return;
      }
    });
  },
};

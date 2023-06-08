// untuk menggabungkan atuh dan message 
// Fungsi combineReducers digunakan dalam Redux untuk menggabungkan beberapa reducer menjadi satu objek reducer tunggal. Fungsi ini membantu dalam mengorganisir logika reducer dalam aplikasi Redux yang lebih besar.

import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import movieReducer from "./movies";

export default combineReducers({
  auth,
  message,
  movies: movieReducer,
})
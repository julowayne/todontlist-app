import axios from 'axios';
import router from '../../../router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export const login = ({commit}, form) => {
  axios("http://127.0.0.1:8000/api/auth/login", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        email: form.email,
        password: form.password,
      } 
    })
    .then((response)=> {
      console.log(response)
      commit('token', response.data.token)
      const user = {
        name: response.data.name,
        email: response.data.email,
        created_at: response.data.created_at
      }
      commit('data', user)
      router.push({ name: `Home` })
    })
    .catch(error => {
      console.log(error)
  });
}

export const register = ({commit}, form) => {
    axios("http://127.0.0.1:8000/api/auth/register", {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      name: form.name,
      email: form.email,
      password: form.password,
    } 
  })
  .then((response)=> {
    commit('token', response.data.token)
    const user = {
      name: response.data.name,
      email: response.data.email,
      created_at: response.data.created_at
    }
    commit('data', user)
    router.push({ name: `Home` })
  })
  .catch(error => {
    console.log(error)
  });
}
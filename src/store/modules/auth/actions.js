import axios from 'axios';
import router from '../../../router'


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
      router.push({ path: `/` })
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
    router.push({ path: `/` })
  })
  .catch(error => {
    console.log(error)
  });
}
export const tasks = ({getters, commit}) => {
  axios("http://127.0.0.1:8000/api/tasks",{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getters.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    })
    .then((response)=> {
      console.log(response)
      commit('tasks', response.data.tasks)
    })
    .catch(error => {
      console.log(error)
  });
}

export const addTask = ({getters, commit}, task) => {
  axios("http://127.0.0.1:8000/api/tasks",{
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getters.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      body: task.content,
      done: task.done
    } 
    })
    .then((response)=> {
      commit('addTask', response.data.tasks)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
  });
}


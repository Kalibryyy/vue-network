import axios from '@/plugins/axios';

export const state = () => ({
  guests: [],
});

export const getters = {
  getCurrentGuest: (state) => (id) => {
    return state.guests.find((guest) => guest._id === parseInt(id))
  }
}

export const mutations = {
  SET_GUESTS(state, data) {
    state.guests = data;
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getGuests')
  },
  getGuests({ commit }) {
    return axios.get('/users').then(res => {
      commit('SET_GUESTS', res.data);
    })
  },
}
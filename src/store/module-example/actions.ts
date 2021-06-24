import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from '../types';
import axios from 'axios'

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  async loadPosts({state, commit}) {
    if(!state.posts.hasOwnProperty('collection'))
    try {
      const posts = await axios('https://images-api.nasa.gov/search?q=mars');
      console.log('posts', posts.data);
      commit('someMutation', posts.data)
    } catch (error) {
      console.log(error)
    }
  },
  somePost({state, commit}, id='wewe') {
    console.log('somePost action', state)
    const findPost = state.posts.collection.items.find(el => el.data[0].nasa_id === id)
     commit('somePost', findPost)
  }
};

export default actions;

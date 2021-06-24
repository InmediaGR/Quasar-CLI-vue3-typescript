import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from '../types';
// import { Item } from '../types';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someAction(state) {
    return state.prop
  },
  somePosts(state) {
    return state.posts
  },
  somePost(state) {
     return state.post
  }
};

export default getters;

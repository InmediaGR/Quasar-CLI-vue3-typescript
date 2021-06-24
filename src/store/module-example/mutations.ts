import { MutationTree } from 'vuex';
import { ExampleStateInterface, Pokedex, Item } from '../types';


const mutation: MutationTree<ExampleStateInterface> = {
  // someMutation (/* state: ExampleStateInterface */) {
  //   // your code
  // },
  someMutation (state:ExampleStateInterface, payload:Pokedex) {
    state.posts = payload
  },
  somePost(state:ExampleStateInterface, payload:Item) {
    state.post = payload
  }
};

export default mutation;

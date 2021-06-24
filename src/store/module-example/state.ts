import { ExampleStateInterface, Pokedex, Item } from '../types';


function state(): ExampleStateInterface {
  return {
    prop: false,
    posts: {} as Pokedex,
    post:{} as Item
  }
};

export default state;

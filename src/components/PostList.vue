<template>
  <div class="container-list">
    <template v-if="postsInfo.posts.collection">
      <div v-for="(post, index) in postsInfo.posts.collection.items" :key="index">
        <Suspense>
          <Card :post="post" class="card" />
        </Suspense>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Card from './Card.vue';
import { Pokedex } from '../store/types'

export default defineComponent({
  name: 'PostList',
  components: { Card },
  props: {
    posts: {
      type: Object as PropType<Pokedex>,
      required: true,
    },
  },
  setup(props) {
    return {
      postsInfo: props,
    };
  },
});
</script>
<style lang="scss" scoped>
.container-list {
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
    width: 440px;
    max-width: 440px;
  }
}
</style>

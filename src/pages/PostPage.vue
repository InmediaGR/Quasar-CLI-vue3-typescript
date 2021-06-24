<template>
  <div class="container" v-if="typeof post === 'object'">
    <Suspense>
    <div class="post" v-if='post.data'>
      <q-card class="my-card">
        <q-img :src="post.links[0].href" v-if="post.links">
          <div class="absolute-bottom text-h6">
            {{ post.data[0].title }}
          </div>
        </q-img>
      </q-card>
      <div class="description">{{ post.data[0].description }}</div>
    </div>
    </Suspense>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { storeKey } from '../store/index';



export default defineComponent({
  name: 'PostPage',
  setup() {
    const route = useRoute();
    const store = useStore(storeKey);


    void store.dispatch('example/loadPosts').then(() => {
      console.log('555')
      void store.dispatch('example/somePost', route.params.id);
    });



    const post = computed(():any => {
      console.log('PostPage', route.params.id);
      return store.getters['example/somePost'];
    });

    return {
      post,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>

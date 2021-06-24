<template>
  <q-page class="row items-center justify-evenly">
    <Suspense>
      <PostList :posts="postsList" />
    </Suspense>
  </q-page>
</template>

<script lang="ts">
import PostList from 'src/components/PostList.vue';
import { defineComponent, ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from '../store/index';

export default defineComponent({
  name: 'PageIndex',
  components: { PostList },
  setup() {
    const store = useStore(storeKey);

    let postsList = computed(():any => {
      return store.getters['example/somePosts'];
    });

    return {
      postsList,
    };
  },
});
</script>

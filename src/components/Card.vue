<template>
  <div class="post" @click="goToPost(info.post.data[0].nasa_id)">
    <q-card class="my-card">
      <q-img :src="info.post.links[0].href" v-if="info.post.links">
        <div class="absolute-bottom text-h6">
          {{ info.post.data[0].title }}
        </div>
      </q-img>
    </q-card>
    <div v-html="description" class="description"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { Item } from '../store/types'

export default defineComponent({
  name: 'Card',
  props: {
    post: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
  setup(props) {
    let description =
       props.post.data[0].description.split(' ').slice(0, 30).join(' ').toString() + '<span> ...read more</span>';

    const router = useRouter();

    const goToPost = function (id: string): any {
      console.log('id', id);
      void router.push('/post' + id);
    };

    return {
      info: props,
      description,
      goToPost,
    };
  },
});
</script>

<style lang="scss">
.post {
  margin-bottom: 60px;
  cursor: pointer;
}
.description {
  background-color: rgb(231, 231, 231);
  padding: 7px;
  padding-top: 15px;
}
.description span {
  font-style: italic;
  color: rgb(64, 80, 224);
}
</style>

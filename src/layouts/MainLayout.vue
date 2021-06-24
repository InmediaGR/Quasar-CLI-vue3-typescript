<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="goHome"/>

        <q-toolbar-title @click="goHome"> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {  useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { storeKey } from '../store/index';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const store = useStore(storeKey);
    void store.dispatch('example/loadPosts');

    // const route = useRoute();
    const router = useRouter();

    const goHome = function () {
      void router.push('/');
    };

    // watch(
    //   () => route.params.id,
    //   () => {
    //     console.log('route.params', route.params.id);
    //   }
    // );
    return {
      goHome
    };
  },
});
</script>

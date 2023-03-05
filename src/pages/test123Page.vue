<!-- XXX tryout in here? -->

<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('gallery_headline') }}</h4>
    <h5>
      {{ $t('gallery_subheadline') }}
    </h5>
    <div
      class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
    >
      <q-img
        v-for="imgsrc in imgs"
        :key="imgsrc"
        width="300px"
        style="max-height: 300px"
        :src="imgsrc"
        fit="contain"
        loading="lazy"
      ></q-img>
      <!-- <video width="300" style="overflow: hidden" controls>
        <source
          src="src/assets/gallery/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video element. Kindly update it to
        latest version.
      </video> -->
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'PageName'
  setup() {
    return {
      imgs: [
        'https://picsum.photos/1200/800',
        'https://picsum.photos/1200/800',
        'https://picsum.photos/1200/800',
        'https://picsum.photos/1200/800',
        'https://picsum.photos/1200/800',
        'https://picsum.photos/1200/800',
        'https://picsum.photos/1200/800',
      ],
    };
  },
});
</script>

+
<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('music_headline') }}</h4>
    <div class="q-mb-md">
      <span style="font-size: 24px">
        {{ $t('music_recommendation') }}
      </span>
      <q-btn
        class="float-right"
        color="primary"
        text-color="secondary"
        :label="$t('music_shuffle')"
        icon="shuffle"
        @click="($event) => (links_recom = randomize(links_recom))"
      />
    </div>
    <div style="max-height: 600px; overflow: scroll">
      <div v-for="lrec in links_recom" :key="lrec" class="q-ma-md">
        <q-video
          style="height: 330px"
          loading="lazy"
          fetchpriority="high"
          :src="lrec"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      links_recom: this.randomize(
        this.createEmbeded([
          'https://www.youtube.com/playlist?list=OLAK5uy_nH99tyjJtLp-Fk1gFjhWLf51cGPSjIE0E',
          'https://www.youtube.com/watch?v=e4QZ_aUs69s',
          'https://www.youtube.com/watch?v=t_dP9Jp5Yo4',
          'https://www.youtube.com/watch?v=d020m8_PMGU',
          'https://www.youtube.com/watch?v=t8HNHFFZPhU',
          'https://www.youtube.com/watch?v=UYqRE8WRSog',
          'https://www.youtube.com/watch?v=Vn8phH0k5HI',
          'https://www.youtube.com/watch?v=8eyWTVwhPMs',
          'https://youtu.be/v-QD7vaHQgY',
          'https://www.youtube.com/watch?v=Pkfc8mh377E',
          'https://www.youtube.com/watch?v=M73x3O7dhmg',
          'https://www.youtube.com/watch?v=BNig6xG36i4',
          'https://www.youtube.com/watch?v=ccR4RvZwuEc',
          'https://www.youtube.com/watch?v=UtQpSGyPCBE',
          'https://www.youtube.com/watch?v=KK9kXITV_dw',
          'https://www.youtube.com/watch?v=tQidkessjZA',
          'https://www.youtube.com/watch?v=pwz3roWATog',
          'https://www.youtube.com/watch?v=2G8MMMn6Nq4',
          'https://www.youtube.com/watch?v=t4DX-kUDVLM',
          'https://www.youtube.com/watch?v=41o5QeG-E_Y',
          'https://www.youtube.com/watch?v=4RcFPLt3Dd0',
          'https://www.youtube.com/watch?v=zfYfvXTydGg',
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zC4voWF4hVlfzE5-Llz1ULN',
        ])
      ),
    };
  },
  methods: {
    createEmbeded: function (obj: Array<string>) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = obj[i]
          .replace('watch?v=', 'embed/')
          .replace('playlist?list', 'embed/videoseries?list')
          .replace('https://youtu.be/', 'https://www.youtube.com/embed/');
      }
      return obj;
    },
    randomize: function (obj: Array<string>) {
      return obj.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
});
</script>

<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('project_headline') }}</h4>

    <q-timeline color="imm-timeline">
      <q-timeline-entry :title="$t('project_timeline_project3_title')">
        <q-carousel
          v-model="slideP3"
          v-model:fullscreen="fullscreenP3"
          animated
          arrows
          infinite
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/project3/1.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/project3/2.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/project3/3.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/project3/4.jpg"
            ></q-img>
          </q-carousel-slide>

          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreenP3 ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenP3 = !fullscreenP3"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          {{ $t('project_timeline_project3_description_first') }}
          <br /><br />
          {{ $t('project_timeline_project3_description_second') }}
        </div>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_project2_title')">
        <q-carousel
          v-model="slideP2"
          v-model:fullscreen="fullscreenP2"
          animated
          arrows
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          infinite
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/project2/1.png"
            ></q-img>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="imm-p-0-important">
            <video controls>
              <source
                src="src/assets/projects/project2/2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element. Kindly update it
              to latest version.
            </video>
          </q-carousel-slide>

          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreenP2 ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenP2 = !fullscreenP2"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-timeline-entry>
      <q-timeline-entry
        :title="$t('project_timeline_project1_title')"
        :subtitle="$t('project_timeline_project1_title_subtitle')"
      >
        <q-video
          loading="lazy"
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/KXlHK0VuDJg"
        ></q-video>
        <div class="q-py-md">
          {{ $t('project_timeline_project1_description_first') }} <br /><br />
          {{ $t('project_timeline_project1_description_second') }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'PageName',
  setup() {
    return {
      slideP2: ref(1),
      slideP3: ref(1),
      fullscreenP2: ref(false),
      fullscreenP3: ref(false),
    };
  },
});
</script>

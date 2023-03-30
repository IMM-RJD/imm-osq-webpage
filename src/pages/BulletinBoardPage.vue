<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('bulletinboard_headline') }}</h4>

    <p>
      {{ $t('bulletinboard_description') }}
    </p>

    <shoutout-component :shoutouts="shoutouts"></shoutout-component>
  </q-page>
</template>

<script lang="ts">
import { Shoutout } from 'components/models';
import ShoutoutComponent from 'components/ShoutoutComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BulletinBoardPage',
  components: { ShoutoutComponent },
  setup() {
    const shoutouts = ref<Shoutout[]>([
      {
        id: 0,
        imgSrc: 'src/assets/team/persona-dummy.png',
        imgAlt: 'persona-dummy',
        imgPosition: '50% 0%',
        funkyStyles: true,
        title: {
          de: 'Title deutsch',
          en: 'Ttitle english',
        },
        subtitle: {
          de: 'subtitle deutsch',
          en: 'subtitle english',
        },
        description: {
          de: 'Deutsche Beschreibung.',
          en: 'English description.',
        },
        phone: '1234 5668 78',
        email: 'email@email.com',
        homepage: 'http://www.homepage.com',
        homepageText: 'homepage.com',
        facebook: 'profilename',
        instagram: 'profilename',
        socialOrder: 'instagram, facebook',
      },
    ]);
    return { shoutouts };
  },
});
</script>

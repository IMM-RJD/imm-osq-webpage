<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('bulletinboard_headline') }}</h4>

    <h5>
      {{ $t('bulletinboard_description') }}
    </h5>

    <shoutout-component :shoutouts="shoutouts"></shoutout-component>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="2000"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="imm-timeline" />
    </q-page-scroller>
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
        imgSrc: 'src/assets/bulletinboard/worldcommunitygrid/wcg-logo.png',
        imgClass: 'q-py-md',
        imgPosition: '50% 0%',
        imgFit: 'contain',
        imgWrapBgColor: 'white',
        funkyStyles: true,
        bgColor: '#c7a583',
        title: {
          de: 'World Community Grid',
          en: 'World Community Grid',
        },
        subtitle: {
          de: 'ermöglicht es jedem, der einen Computer oder ein Android-Gerät besitzt, seine ungenutzte Rechenleistung zu spenden, um die wissenschaftliche Spitzenforschung zu Themen wie Gesundheit, Armut und Nachhaltigkeit voranzutreiben.',
          en: 'enables anyone with a computer or Android device to donate their unused computing power to advance cutting-edge scientific research on topics related to health, poverty and sustainability.',
        },
        introVideo: 'https://www.youtube.com/watch?v=P5QU_99oF5k',
        description: {
          de: 'Durch die Beiträge von Freiwilligen aus aller Welt hat World Community Grid bisher 31 Forschungsprojekte unterstützt, darunter die Suche nach wirksameren Behandlungsmethoden für Krebs, HIV/AIDS und wenig erforschte Tropenkrankheiten. Andere Projekte befassen sich mit der Suche nach kostengünstigen Wasserfiltersystemen und neuen Materialien zur effizienten Nutzung von Sonnenenergie.',
          en: 'Through the contributions of volunteers all over the globe, World Community Grid has supported 31 research projects to date, including searches for more effective treatments for cancer, HIV/AIDS and under-researched tropical diseases. Other projects are looking for low-cost water filtration systems and new materials for capturing solar energy efficiently.',
        },
        readmore: 'https://www.worldcommunitygrid.org/about/about.s',
        homepage: 'https://www.worldcommunitygrid.org/',
        homepageText: 'homepage',
        facebook: 'worldcommunitygrid.org',
        youtube: '@worldcommunitygrid7090',
        twitter: 'WCGrid',
        socialOrder: 'twitter, facebook, youtube',
      },
    ]);
    return { shoutouts };
  },
});
</script>

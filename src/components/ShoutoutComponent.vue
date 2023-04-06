<template>
  <div
    class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
  >
    <q-card
      v-for="shoutout in shoutouts"
      :key="shoutout.id"
      square
      flat
      :class="
        'text-white imm-shoutout-card ' +
        (shoutout.funkyStyles !== undefined && shoutout.funkyStyles
          ? 'imm-funky-corner-crop-lb '
          : '')
      "
      :style="'background-color:' + shoutout.bgColor"
    >
      <q-img
        width="100%"
        height="250px"
        :img-class="shoutout.imgClass || ''"
        :fit="shoutout.imgFit || 'cover'"
        :position="shoutout.imgPosition || '50% 50%'"
        :style="'background-color:' + shoutout.imgWrapBgColor || 'inherit'"
        loading="lazy"
        :src="shoutout.imgSrc"
        :alt="shoutout.imgAlt || getTitle(shoutout, $i18n.locale)"
      ></q-img>
      <div class="q-pb-none content-wrapper">
        <q-card-section class="q-pa-lg">
          <div class="text-h6 q-pb-xs">
            {{ getTitle(shoutout, $i18n.locale) }}
          </div>
          <div class="text-subtitle2">
            {{ getSubtitle(shoutout, $i18n.locale) }}
          </div>
        </q-card-section>

        <q-card-actions class="q-py-none">
          <q-space />
          <q-btn
            color="secondary"
            round
            dense
            :icon="
              shoutout.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
            "
            @click="shoutout.expanded = !shoutout.expanded"
          />
          <q-space />
        </q-card-actions>
        <q-slide-transition>
          <div v-show="shoutout.expanded">
            <q-card-section class="content-video q-pa-none">
              <div v-show="shoutout.introVideo" class="q-my-md">
                <q-video
                  :ratio="16 / 9"
                  :src="createEmbeded(shoutout.introVideo || '')"
                /></div
            ></q-card-section>
            <q-card-section class="content-description q-px-lg q-pt-xs">
              {{ getDescription(shoutout, $i18n.locale) }}
              <br />
              <q-btn
                v-show="shoutout.readmore"
                flat
                unelevated
                class="q-mt-xs"
                :no-caps="true"
                align="left"
                type="a"
                target="_blank"
                :href="shoutout.readmore"
                icon-right="keyboard_arrow_right"
                :label="$t('readmore')"
              ></q-btn>
            </q-card-section>

            <q-separator
              v-show="
                shoutout.phone ||
                shoutout.email ||
                shoutout.homepage ||
                shoutout.facebook ||
                shoutout.instagram ||
                shoutout.youtube ||
                shoutout.soundcloud ||
                shoutout.github ||
                shoutout.twitter
              "
              dark
            />
            <q-card-actions
              v-show="shoutout.phone || shoutout.email"
              vertical
              class="q-pb-none q-pt-md q-px-lg"
            >
              <q-btn
                v-show="shoutout.phone"
                unelevated
                class="q-mb-sm"
                :no-caps="true"
                align="left"
                type="a"
                :href="'tel:' + shoutout.phone?.replaceAll(' ', '')"
                icon="fa-solid fa-phone"
                :label="shoutout.phone"
              ></q-btn>
              <q-btn
                v-show="shoutout.email"
                flat
                unelevated
                class="q-mb-sm imm-ml-0-important"
                :no-caps="true"
                align="left"
                type="a"
                :href="'mailto:' + shoutout.email"
                icon="fa-solid fa-envelope"
                :label="shoutout.email"
              ></q-btn
            ></q-card-actions>
          </div>
        </q-slide-transition>

        <q-card-actions
          v-if="
            shoutout.homepage ||
            shoutout.facebook ||
            shoutout.instagram ||
            shoutout.youtube ||
            shoutout.soundcloud ||
            shoutout.github ||
            shoutout.twitter
          "
          align="evenly"
          class="q-px-md"
        >
          <q-btn
            v-show="shoutout.homepage"
            unelevated
            class="q-my-sm"
            :no-caps="true"
            align="left"
            type="a"
            :href="shoutout.homepage"
            target="_blank"
            icon="fa-solid fa-share"
            :label="shoutout.homepageText || shoutout.homepage"
          ></q-btn>
          <q-btn
            v-for="so in shoutout.socialOrder?.replaceAll(' ', '').split(',')"
            :key="so"
            unelevated
            :no-caps="true"
            align="left"
            type="a"
            :href="
              so == 'facebook'
                ? 'https://www.facebook.com/' + shoutout.facebook
                : so == 'instagram'
                ? 'https://www.instagram.com/' + shoutout.instagram
                : so == 'youtube'
                ? 'https://www.youtube.com/' + shoutout.youtube
                : so == 'soundcloud'
                ? 'https://www.soundcloud.com/' + shoutout.soundcloud
                : so == 'github'
                ? 'https://www.github.com/' + shoutout.github
                : so == 'twitter'
                ? 'https://twitter.com/' + shoutout.twitter
                : ''
            "
            target="_blank"
            :icon="'fa-brands fa-' + so"
          ></q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Shoutout } from './models';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ShoutoutComponent',
  props: {
    shoutouts: {
      type: Array as PropType<Shoutout[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
  methods: {
    getTitle(shoutout: Shoutout, locale: string): string {
      return locale === 'en-US'
        ? shoutout.title.en
        : locale === 'de'
        ? shoutout.title.de
        : 'missing title';
    },
    getSubtitle(shoutout: Shoutout, locale: string): string {
      return (
        '' +
        (locale === 'en-US'
          ? shoutout.subtitle?.en
          : locale === 'de'
          ? shoutout.subtitle?.de
          : 'missing subtitle')
      );
    },
    getDescription(shoutout: Shoutout, locale: string): string {
      return locale === 'en-US'
        ? shoutout.description.en
        : locale === 'de'
        ? shoutout.description.de
        : 'missing description';
    },
    createEmbeded: function (str: string): string {
      return str
        .replace('watch?v=', 'embed/')
        .replace('playlist?list', 'embed/videoseries?list')
        .replace('https://youtu.be/', 'https://www.youtube.com/embed/');
    },
  },
});
</script>

<style lang="scss">
.imm-shoutout-card {
  width: 400px;
  display: flex;
  flex-flow: column;
  border-radius: 0 10px 10px 0px !important;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid $primary;
  }
  > .content-wrapper {
    flex-grow: 10000;
    display: flex;
    flex-direction: column;
    > div > .content-description {
      flex-grow: 1;
      white-space: pre-line;
    }
  }
}
</style>

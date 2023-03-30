<template>
  <div
    class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
  >
    <q-card
      v-for="shoutout in shoutouts"
      :key="shoutout.id"
      :class="
        shoutout.funkyStyles !== undefined
          ? shoutout.funkyStyles
            ? 'bg-secondary text-white imm-shoutout-card funky'
            : 'bg-secondary text-white imm-shoutout-card'
          : 'bg-secondary text-white imm-shoutout-card'
      "
    >
      <q-img
        width="100%"
        height="250px"
        fit="cover"
        :position="shoutout.imgPosition || '50% 50%'"
        loading="lazy"
        :src="shoutout.imgSrc"
        :alt="
          shoutout.imgAlt !== undefined
            ? shoutout.imgAlt
            : getTitle(shoutout, $i18n.locale)
        "
      ></q-img>
      <div class="q-pb-none content-wrapper">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">
            {{ getTitle(shoutout, $i18n.locale) }}
          </div>
          <div class="text-subtitle2">
            {{ getSubtitle(shoutout, $i18n.locale) }}
          </div>
        </q-card-section>

        <q-card-actions class="q-pt-none">
          <q-space />
          <q-btn
            color="white"
            round
            flat
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
            <q-card-section class="content-description">
              {{ getDescription(shoutout, $i18n.locale) }}
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
                shoutout.github
              "
              dark
            />
            <q-card-actions
              v-show="shoutout.phone || shoutout.email || shoutout.homepage"
              vertical
              class="q-pb-none q-pt-md"
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
              ></q-btn>
              <q-btn
                v-show="shoutout.homepage"
                unelevated
                class="q-mb-sm"
                :no-caps="true"
                align="left"
                type="a"
                :href="shoutout.homepage"
                target="_blank"
                icon="fa-solid fa-share"
                :label="shoutout.homepageText || shoutout.homepage"
              ></q-btn>
            </q-card-actions>
          </div>
        </q-slide-transition>
        <q-card-actions
          v-if="
            shoutout.facebook ||
            shoutout.instagram ||
            shoutout.youtube ||
            shoutout.soundcloud ||
            shoutout.github
          "
          align="evenly"
        >
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
  },
});
</script>

<style lang="scss">
.imm-shoutout-card {
  width: 300px;
  display: flex;
  flex-flow: column;
  > .content-wrapper {
    flex-grow: 10000;
    display: flex;
    flex-direction: column;
    > .content-description {
      flex-grow: 1;
      white-space: pre-line;
    }
  }
}
.funky {
  transition: all 0.2s;
  &:hover {
    filter: blur(0px);
    opacity: 1;
  }
}
@media (min-width: $breakpoint-md-min) {
  .funky {
    filter: blur(15px);
    opacity: 0.6;
    &:hover {
      transform: scale(0.98) translateZ(0) perspective(1px);
    }
  }
}

// .corner-big-crop {
//   /* -webkit-clip-path: polygon(0 0,100% 0,100% 100%,50px 100%,0 calc(100% - 50px)); */
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 calc(100% - 50px));
// }
</style>

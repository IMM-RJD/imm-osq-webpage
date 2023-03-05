<template>
  <div
    class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
  >
    <q-card
      v-for="person in persons"
      :key="person.id"
      :class="
        person.funkyStyles !== undefined
          ? person.funkyStyles
            ? 'bg-secondary text-white imm-person-card funky'
            : 'bg-secondary text-white imm-person-card'
          : 'bg-secondary text-white imm-person-card'
      "
    >
      <q-img
        width="100%"
        height="250px"
        fit="cover"
        :position="person.imgPosition || '50% 50%'"
        loading="lazy"
        :src="person.imgSrc"
        :alt="person.imgAlt !== undefined ? person.imgAlt : person.firstName"
      ></q-img>
      <div class="q-pb-none content-wrapper">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">
            {{ person.firstName }} {{ person.lastName }}
          </div>
          <div class="text-subtitle2">
            {{ getRole(person, $i18n.locale) }}
          </div>
        </q-card-section>

        <q-card-section class="content-description">
          {{ getDescription(person, $i18n.locale) }}
        </q-card-section>

        <q-separator
          v-show="
            person.phone || person.email || person.homepage || person.instagram
          "
          dark
        />
        <q-card-actions
          v-show="person.phone || person.email || person.homepage"
          vertical
          class="q-pb-none q-pt-md"
        >
          <q-btn
            v-show="person.phone"
            unelevated
            class="q-mb-sm"
            :no-caps="true"
            align="left"
            type="a"
            :href="'tel:' + person.phone?.replaceAll(' ', '')"
            icon="fa-solid fa-phone"
            :label="person.phone"
          ></q-btn>
          <q-btn
            v-show="person.email"
            flat
            unelevated
            class="q-mb-sm imm-ml-0-important"
            :no-caps="true"
            align="left"
            type="a"
            :href="'mailto:' + person.email"
            icon="fa-solid fa-envelope"
            :label="person.email"
          ></q-btn>
          <q-btn
            v-show="person.homepage"
            unelevated
            class="q-mb-sm"
            :no-caps="true"
            align="left"
            type="a"
            :href="person.homepage"
            target="_blank"
            icon="fa-solid fa-share"
            :label="person.homepageText || person.homepage"
          ></q-btn>
        </q-card-actions>
        <q-card-actions
          v-if="
            person.facebook ||
            person.instagram ||
            person.youtube ||
            person.soundcloud
          "
          align="evenly"
        >
          <q-btn
            v-for="so in person.socialOrder?.replaceAll(' ', '').split(',')"
            :key="so"
            unelevated
            :no-caps="true"
            align="left"
            type="a"
            :href="
              so == 'facebook'
                ? 'https://www.facebook.com/' + person.facebook
                : so == 'instagram'
                ? 'https://www.instagram.com/' + person.instagram
                : so == 'youtube'
                ? 'https://www.youtube.com/' + person.youtube
                : so == 'soundcloud'
                ? 'https://www.soundcloud.com/' + person.soundcloud
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
import { Person } from './models';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PersonComponent',
  props: {
    persons: {
      type: Array as PropType<Person[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
  methods: {
    getRole(person: Person, locale: string): string {
      // check if role is a single property string or multilang-object
      return typeof person.role === 'string'
        ? person.role
        : locale === 'en-US'
        ? person.role.en
        : locale === 'de'
        ? person.role.de
        : 'missing role';
    },
    getDescription(person: Person, locale: string): string {
      return typeof person.description === 'string'
        ? person.description
        : locale === 'en-US'
        ? person.description.en
        : locale === 'de'
        ? person.description.de
        : 'missing description';
    },
  },
});
</script>

<style lang="scss">
.imm-person-card {
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
</style>

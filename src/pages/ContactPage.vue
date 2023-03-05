<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('contact_headline') }}</h4>

    <p class="q-mb-md">{{ $t('contact_p_first') }}</p>

    <person-component :persons="persons"></person-component>
  </q-page>
</template>

<script lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactPage',
  components: { PersonComponent },
  setup() {
    const persons = ref<Person[]>([
      {
        id: 0,
        imgSrc: 'src/assets/team/persona-dummy.png',
        imgAlt: 'persona-dummy',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Firstname',
        lastName: 'Lastname',
        role: {
          de: 'role Deutsch',
          en: 'role english',
        },
        description: {
          de: 'Deutsche Beschreibung. \n\n„Den Mutigen gehört die Welt.“',
          en: 'English description. \n\n "The brave own the world."',
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
    return { persons };
  },
});
</script>

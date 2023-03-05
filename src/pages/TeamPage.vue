<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">{{ $t('team_headline') }}</h4>

    <person-component :persons="persons"></person-component>
  </q-page>
</template>

<script lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TeamPage',
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
      {
        id: 1,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Arne',
        lastName: 'Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 2,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Copy Arne',
        lastName: 'Copy Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Copy Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'Copy English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 3,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Copy Arne',
        lastName: 'Copy Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Copy Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'Copy English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 4,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Copy Arne',
        lastName: 'Copy Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Copy Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'Copy English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 5,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Copy Arne',
        lastName: 'Copy Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Copy Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'Copy English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 6,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Copy Arne',
        lastName: 'Copy Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Copy Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'Copy English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 7,
        imgSrc: 'src/assets/team/persona-dummy.png',
        funkyStyles: false,
        firstName: 'Copy Arne',
        lastName: 'Copy Hintz',
        role: { de: 'IT & Sound', en: 'IT & Sound' },
        description: {
          de: 'Copy Deutsch Odio recusandae ipsum minus. Magni amet animi vel hic a veritatis et. Et occaecati iusto. Ut est itaque.',
          en: 'Copy English Et aut non quis fugit autem. Minus aut nobis eos et necessitatibus perferendis incidunt perspiciatis corrupti. Quia ut voluptatem nemo eos ipsam et quia ex non.',
        },
        email: 'Brannon_Schneider99@gmail.com',
        youtube: 'channel/as8df89asd98f8asdf98as89df98',
        soundcloud: 'profilename',
        socialOrder: 'soundcloud, youtube',
      },
    ]);
    return { persons };
  },
});
</script>

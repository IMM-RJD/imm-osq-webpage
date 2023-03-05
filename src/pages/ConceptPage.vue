<template>
  <q-img
    width="100%"
    loading="lazy"
    src="src/assets/concept/concept.jpg"
  ></q-img>

  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('concept_headline') }}</h4>

    <p>
      {{ $t('concept_p_first') }}
    </p>
    <p>
      {{ $t('concept_p_second') }}
    </p>
    <p>{{ $t('concept_p_third') }}</p>

    <q-img width="100%" loading="lazy" src="src/assets/imm-logo.png"></q-img>
    <q-btn
      href="http://www.cornify.com"
      icon="?0"
      flat
      dense
      size="xs"
      @click="dothecorni"
    ></q-btn>
  </q-page>
</template>

<script>
export default {
  setup() {
    function dothecorni(e) {
      e.preventDefault();
      cornify_add();
      return false;
    }

    return { dothecorni };
  },
};
</script>

<template>
  <q-page padding class="q-mx-md">
    <h3>{{ $t('imprint_headline') }}</h3>

    <div class="q-mb-xs">Jared Kunde</div>
    <div class="q-mb-xs">BestStreet 25</div>
    <div class="q-mb-md">789654 State</div>

    <q-btn
      flat
      dense
      unelevated
      class="q-mb-md"
      :no-caps="true"
      type="a"
      href="tel:456987123"
      icon="fa-solid fa-phone"
      label="456 987 123"
    ></q-btn
    ><br />
    <q-btn
      flat
      dense
      unelevated
      class="q-mb-md"
      :no-caps="true"
      type="a"
      href="mailto:Roselyn.Gleason81@yahoo.com"
      icon="fa-solid fa-envelope"
      label="click to email"
    ></q-btn>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<template>
  <!-- Hello and welcome my dear dev friend to quasar https://youtu.be/zas-tasp1ds?t=90 -->

  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar class="q-py-md">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <a class="imm-banner-logo" href="/"
          ><img src="src/assets/imm-name.jpg" alt=""
        /></a>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="km-background"
      show-if-above
      :mini="miniStateLeft"
      :width="220"
      :breakpoint="500"
      side="left"
      bordered
      @mouseover="miniStateLeft = false"
      @mouseout="miniStateLeft = true"
    >
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-ripple clickable to="/team">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-people-group" />
            </q-item-section>

            <q-item-section> {{ $t('Team') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/concept">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-shield-heart" />
            </q-item-section>

            <q-item-section> {{ $t('Concept') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/events">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-calendar-days" />
            </q-item-section>

            <q-item-section>
              {{ $t('Current_upcoming_events') }}
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/gallery">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-image" />
            </q-item-section>

            <q-item-section> {{ $t('Gallery') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/projects">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-shield-virus" />
            </q-item-section>

            <q-item-section> {{ $t('Past_projects') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/contact">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-envelope" />
            </q-item-section>

            <q-item-section> {{ $t('Contact') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/partner">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-children" />
            </q-item-section>

            <q-item-section> {{ $t('Sponsors_partner') }} </q-item-section>
          </q-item>

          <q-separator />

          <q-item v-ripple clickable to="/imprint">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-child" />
            </q-item-section>

            <q-item-section> {{ $t('Imprint') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/bulletinboard" class="q-mt-md">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-globe" />
            </q-item-section>

            <q-item-section> {{ $t('BulletinBoard') }} </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/music">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-music" />
            </q-item-section>

            <q-item-section> {{ $t('Mehr_klang') }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white q-py-xs">
      <div
        class="full-width row wrap justify-evenly items-start content-start q-py-xs"
      >
        <q-btn
          flat
          unelevated
          size="1rem"
          padding="10px"
          icon="fa-brands fa-facebook-f"
          href=""
          target="_blank"
        >
        </q-btn>
        <q-btn
          flat
          unelevated
          size="1rem"
          padding="10px"
          icon="fa-brands fa-instagram"
          href=""
          target="_blank"
        >
        </q-btn>
        <q-btn
          flat
          unelevated
          size="27px"
          dense
          padding="0px"
          icon="img:src/assets/imm-logo_white.png"
          to="/"
        >
        </q-btn>
        <q-fab
          outline
          padding="12px"
          color="secondary"
          icon="fa-solid fa-earth-americas"
          direction="up"
        >
          <q-fab-action
            padding="13px"
            :color="$i18n.locale === 'de' ? 'primary' : 'secondary'"
            class="imm-hover-bg-primary-important"
            icon="img:src/assets/icons/de.svg"
            @click="$i18n.locale = 'de'"
          />
          <q-fab-action
            padding="13px"
            :color="$i18n.locale === 'en-US' ? 'primary' : 'secondary'"
            class="imm-hover-bg-primary-important"
            icon="img:src/assets/icons/us.svg"
            @click="$i18n.locale = 'en-US'"
          />
        </q-fab>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      miniStateLeft: ref(true),
      miniState: ref(true),
    };
  },
};
</script>

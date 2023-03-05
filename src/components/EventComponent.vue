<style lang="scss">
.imm-event-card {
  width: 100%;
  max-width: 300px;
  > .content-wrapper {
    div > .content-description {
      white-space: pre-line;
    }
  }
}
</style>
<template>
  <div class="row wrap justify-evenly items-start content-start q-gutter-lg">
    <q-card
      :id="
        event.title
          .toLowerCase()
          .replaceAll(' ', '')
          .replaceAll('-', '')
          .slice(0, 10)
      "
      v-for="event in events"
      :key="event.id"
      class="bg-secondary text-white imm-event-card"
    >
      <div style="width: 100%">
        <q-dialog
          seamless
          position="bottom"
          v-model="clipAlert"
          :auto-close="true"
        >
          <q-card style="box-shadow: none !important">
            <q-linear-progress query color="secondary" />
            <q-card-section>
              <div class="text-h6">
                Eventlink erfolgreich in die Zwischenablage kopiert.
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
        <q-btn
          v-show="event.allowShare !== false && event.canceled !== true"
          style="position: absolute; top: 7px; right: 0px"
          icon="share"
          flat
          @click="
            copyToClipboard(
              window.location.href.split('/events')[0] +
                '/events#' +
                event.title
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .replaceAll('-', '')
                  .slice(0, 10)
            )
              .then(() => {
                clipAlert = true;
                window.setTimeout(function () {
                  clipAlert = false;
                }, 2000);
              })
              .catch(() => {
                // fail
              })
          "
        >
        </q-btn>
        <q-img
          :width="event.imgContainerWidth || '162px'"
          height="250px"
          fit="contain"
          :position="event.imgPosition || '50% 50%'"
          loading="lazy"
          :src="event.imgSrc"
          style="
            border-radius: 0rem 0rem 5px 5px;
            display: block;
            margin: 0 auto;
          "
        ></q-img>
      </div>
      <div v-show="event.canceled" class="q-pb-none content-wrapper">
        <q-card-section class="q-pb-md">
          <div class="text-h6">*** ENTFÄLLT ***</div>
        </q-card-section>
      </div>
      <div v-show="event.canceled !== true" class="q-pb-none content-wrapper">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">
            {{ event.title }} <br />
            <span style="color: #ee6d56">{{ event.dateText }}</span>
          </div>
        </q-card-section>

        <q-card-actions class="q-pt-none" v-show="event.link">
          <q-space />
          <q-btn
            :label="event.linkText || 'zum Ticketverkauf'"
            :href="event.link"
            target="_blank"
            flat
            dense
          />
        </q-card-actions>
        <q-card-actions class="q-pt-none">
          <q-space />
          <q-btn
            color="white"
            round
            flat
            dense
            :icon="event.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="event.expanded = !event.expanded"
          />
          <q-space />
        </q-card-actions>
        <q-slide-transition>
          <div v-show="event.expanded">
            <q-card-section class="q-py-xs">
              <div class="text-subtitle2">{{ event.location }}</div>
            </q-card-section>

            <q-card-section class="content-description">
              {{ event.description }}
            </q-card-section>

            <q-separator dark v-show="event.phone || event.email" />
            <q-card-actions
              vertical
              class="q-pb-none q-pt-md"
              v-show="event.phone || event.email"
            >
              <q-btn
                v-show="event.phone"
                unelevated
                class="q-mb-sm"
                :no-caps="true"
                align="left"
                type="a"
                :href="'tel:' + event.phone?.replaceAll(' ', '')"
                icon="fa-solid fa-phone"
                :label="event.phone"
              ></q-btn>
              <q-btn
                v-show="event.email"
                flat
                unelevated
                class="q-mb-sm imm-ml-0-important"
                :no-caps="true"
                align="left"
                type="a"
                :href="'mailto:' + event.email"
                icon="fa-solid fa-envelope"
                :label="event.emailText || event.email"
              ></q-btn>
            </q-card-actions>
            <q-card-actions class="q-pt-none">
              <q-space />
              <q-btn
                color="white"
                round
                flat
                dense
                :icon="
                  event.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                "
                @click="event.expanded = !event.expanded" />
              <q-space
            /></q-card-actions>
          </div>
        </q-slide-transition>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { copyToClipboard } from 'quasar';
import { Event } from './models';
import { defineComponent, PropType, ref } from 'vue';
export default defineComponent({
  name: 'EventComponent',
  props: {
    events: {
      type: Array as PropType<Event[]>,
      default: () => [],
    },
  },
  setup() {
    return { copyToClipboard, clipAlert: ref(false), window };
  },
});

// <event-component
//   :events="
//     // past events
//     events.filter((event) => {
//       if (date.getDateDiff(event.date, new Date(), 'days') < 0) {
//         event.link = undefined;
//         event.allowShare = false;
//       }
//       return date.getDateDiff(event.date, new Date(), 'days') < 0;
//     })
//   "
// ></event-component>
</script>

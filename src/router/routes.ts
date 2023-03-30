import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/music' },
      { path: 'team', component: () => import('pages/TeamPage.vue') },
      { path: 'concept', component: () => import('pages/ConceptPage.vue') },
      { path: 'events', component: () => import('pages/EventsPage.vue') },
      { path: 'gallery', component: () => import('pages/GalleryPage.vue') },
      { path: 'projects', component: () => import('pages/ProjectsPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'partner', component: () => import('pages/PartnerPage.vue') },
      {
        path: 'imprint',
        component: () => import('src/pages/ImprintPage.vue'),
      },
      {
        path: 'bulletinboard',
        component: () => import('src/pages/BulletinBoardPage.vue'),
      },
      { path: 'music', component: () => import('src/pages/MusicPage.vue') },
      { path: 'test123', component: () => import('pages/test123Page.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

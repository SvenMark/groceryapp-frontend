import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://a20a6efeacf549159bf28f224af337e0@sentry.io/1328772',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

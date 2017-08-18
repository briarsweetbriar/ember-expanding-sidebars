import Ember from 'ember';
import layout from '../templates/components/ember-expanding-sidebar-section';

const {
  Component,
  computed,
  get,
  getOwner,
  getProperties,
  isPresent,
  set
} = Ember;

const {
  alias,
  and,
  notEmpty
} = computed;

const { String: { camelize } } = Ember;
const { inject: { service } } = Ember;

export default Component.extend({
  layout,

  classNames: ['ember-expanding-sidebar-section'],
  hook: 'ember_expanding_sidebar_section',
  tagName: 'li',

  router: service('-routing'),

  currentRouteName: alias('applicationController.currentRouteName'),
  hasSections: notEmpty('section.sections'),
  hasVisibleSections: and('hasSections', 'isActive'),

  init(...args) {
    const applicationController = getOwner(this).lookup('controller:application');

    set(this, 'applicationController', applicationController);

    return this._super(...args);
  },

  isActive: computed('currentRouteName', 'fullRoute', {
    get() {
      const {
        currentRouteName,
        fullRoute
      } = getProperties(this, 'currentRouteName', 'fullRoute');

      return currentRouteName.indexOf(`${fullRoute}.`) === 0;
    }
  }).readOnly(),

  fullRoute: computed('parentRoute', 'section.route', {
    get() {
      const parentRoute = get(this, 'parentRoute');
      const route = get(this, 'section.route');

      return isPresent(parentRoute) ? `${parentRoute}.${route}` : route;
    }
  }).readOnly(),

  name: computed('section.route', 'section.name', {
    get() {
      return get(this, 'section.name') || get(this, 'section.route');
    }
  })
});

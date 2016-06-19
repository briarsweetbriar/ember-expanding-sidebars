import Ember from 'ember';
import layout from '../templates/components/ember-expanding-sidebar';

const { Component } = Ember;

export default Component.extend({
  layout,

  classNames: ['ember-expanding-sidebar'],
  hook: 'ember_expanding_sidebar',
  tagName: 'ul'
});

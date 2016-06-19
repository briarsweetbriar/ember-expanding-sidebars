import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('test', function() {
    this.route('foo', function() {
      this.route('bar', function() {
        this.route('baz');
      });
      this.route('bar2');
    });
    this.route('alpha');
  });
});

export default Router;

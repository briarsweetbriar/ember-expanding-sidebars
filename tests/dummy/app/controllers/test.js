import Ember from 'ember';

export default Ember.Controller.extend({
  sections: [{
    route: 'foo',
    sections: [{
      route: 'bar',
      sections: [{
        route: 'baz'
      }]
    }, {
      route: 'bar2'
    }]
  }, {
    route: 'alpha',
    name: 'omega'
  }]
});

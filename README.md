[![npm version](https://badge.fury.io/js/ember-expanding-sidebars.svg)](https://badge.fury.io/js/ember-expanding-sidebars)
[![Build Status](https://travis-ci.org/null-null-null/ember-expanding-sidebars.svg?branch=master)](https://travis-ci.org/null-null-null/ember-expanding-sidebars)

# ember-expanding-sidebars

A simple sidebar for Ember.js routes that expands and collapses, depending on the current route.

## Installation

`ember install ember-expanding-sidebars`

## Usage

```js
export default Ember.Controller.extend({
  sections: [{
    route: 'baz',
    sections: [{
      route: 'child-of-baz',
      sections: [{
        route: 'grandchild-of-baz'
      }]
    }]
  }]
})
```

```hbs
{{ember-expanding-sidebar parentRoute="foo.bar" sections=sections}}
```

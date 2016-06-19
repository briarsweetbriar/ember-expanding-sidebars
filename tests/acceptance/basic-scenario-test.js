import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { $hook, hook } from 'ember-hook';

moduleForAcceptance('Acceptance | basic scenario');

test('basic scenario', function(assert) {
  assert.expect(10);

  visit('/test').then(() => {
    assert.equal($hook('ember_expanding_sidebar').length, 1, 'a single sidebar is present');
    assert.equal($hook('ember_expanding_sidebar_section').length, 2, 'two sections are present');
    assert.equal($hook('ember_expanding_sidebar_section_link').eq(0).text().trim(), 'foo', 'first link has correct text');
    assert.equal($hook('ember_expanding_sidebar_section_link').eq(1).text().trim(), 'omega', 'second link has correct text');

    return click(`${hook('ember_expanding_sidebar_section_link')}:nth(0)`);
  }).then(() => {
    assert.equal($hook('ember_expanding_sidebar').length, 2, 'sub-sidebar sidebar is present');
    assert.equal($hook('ember_expanding_sidebar_section').length, 4, 'four sections are present');

    return click(`${hook('ember_expanding_sidebar_section_link')}:nth(1)`);
  }).then(() => {
    assert.equal($hook('ember_expanding_sidebar').length, 3, 'sub-sub-sidebar sidebar is present');
    assert.equal($hook('ember_expanding_sidebar_section').length, 5, 'four sections are present');

    return click(`${hook('ember_expanding_sidebar_section_link')}:nth(0)`);
  }).then(() => {
    assert.equal($hook('ember_expanding_sidebar').length, 2, 'sub-sub-sidebar sidebar is closed');
    assert.equal($hook('ember_expanding_sidebar_section').length, 4, 'four sections are present after close');
  });
});


import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-time-diff', 'helper:display-time-diff', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{display-time-diff inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});


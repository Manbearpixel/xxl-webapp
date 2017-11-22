import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('token-value-data-list', 'Integration | Component | token value data list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{token-value-data-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#token-value-data-list}}
      template block text
    {{/token-value-data-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { computed } from '@ember/object';
import Table from 'ember-light-table';

export default Ember.Component.extend({
  model: [
    { firstName: 'Henry', lastName: 'Smith' },
    { firstName: 'Henry', lastName: 'Smith' },
    { firstName: 'Henry', lastName: 'Smith' },
    { firstName: 'Henry', lastName: 'Smith' },
    { firstName: 'Henry', lastName: 'Smith' },
    { firstName: 'Henry', lastName: 'Smith' } ],

  columns: computed(function() {
    return [{
      label: 'First Name',
      valuePath: 'firstName',
      width: '150px'
    }, {
      label: 'Last Name',
      valuePath: 'lastName',
      width: '150px'
    }];
  }),

  table: computed('model', function() {
   return new Table(this.get('columns'), this.get('model'));
  })
});

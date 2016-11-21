import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    deletePet(pet) {
      let confirmation = confirm('Confirmar a exclusão');

      if (confirmation) {
        pet.destroyRecord();
      }
    }
  }
});

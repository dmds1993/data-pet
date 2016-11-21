import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('pet');
  },

  actions: {

    deletePet(pet) {
      let confirmation = confirm('Confirmar exclusão');

      if (confirmation) {
        pet.destroyRecord();
      }
    }
  }
});

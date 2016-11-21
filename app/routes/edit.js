import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('pet', params.pet_id);
  },

  actions: {

    savePet(newPet) {
      newPet.save().then(() => this.transitionTo('index'));
    }
  }
});

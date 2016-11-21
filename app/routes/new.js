import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('pet');
  },

  actions: {

    savePet(newPet) {
      newPet.save().then(() => this.transitionTo('index'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
  }
});

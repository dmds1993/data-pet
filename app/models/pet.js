import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),
  raca: DS.attr('string'),
  sexo: DS.attr('string'),
  idade: DS.attr('number'),
});

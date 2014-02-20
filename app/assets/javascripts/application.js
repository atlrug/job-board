//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require job_board

window.App = Ember.Application.create();
App.deferReadiness();

//= require_tree .

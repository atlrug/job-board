//= require sinon
//= require application
//= require ember-mocha-adapter

Ember.Test.adapter = Ember.Test.MochaAdapter.create();
App.setupForTesting();
App.injectTestHelpers();

mocha.globals(['Ember', 'DS', 'App']);
chai.Assertion.includeStack = true;
Konacha.reset = Ember.K;
$.fx.off = true;

afterEach(function() {
  App.reset();
});

App.advanceReadiness();

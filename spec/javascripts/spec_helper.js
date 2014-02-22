//= require sinonjs
//= require fixtures
//= require application
//= require ember-mocha-adapter

Ember.Test.adapter = Ember.Test.MochaAdapter.create();
App.setupForTesting();
App.injectTestHelpers();

mocha.globals(['Ember', 'DS', 'App', 'FIXTURES']);
chai.Assertion.includeStack = true;
Konacha.reset = Ember.K;
$.fx.off = true;

server = sinon.fakeServer.create();
server.autoRespond = true;

beforeEach(function(done) {
  Ember.run(function() {
    App.advanceReadiness();

    App.then(function() {
      done();
    });
  });
});

afterEach(function() {
  App.reset();
});

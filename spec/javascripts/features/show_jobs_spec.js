//= require spec_helper

describe('showing a list of jobs', function() {
  before(function() {
    server.respondWith('GET', '/jobs', FIXTURES['GET /jobs']);
  });

  it('displays a list of jobs', function(done) {
    visit('/').
    then(function() {
      expect($('.job').length).to.eq(2);
      done();
    });
  });
});

App.Router.reopen({
  location: 'history'
});

App.Router.map(function() {
  this.resource('jobs', { path: '/' });
});

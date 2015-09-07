githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var access_token = '1239cb7e2d8af52f750c7ebb8146837182ddf40a'

  var searchResource = $resource('https://api.github.com/search/users');

  var self = this;

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);
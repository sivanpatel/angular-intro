describe('factory: Search', function() {

  var search;

  beforeEach(module('GitUserSearch'));

  beforeEachFunction();

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
    httpBackend.flush();  
  });

});
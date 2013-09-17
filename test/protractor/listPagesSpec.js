describe('ListPagesSpec', function() {

  it('should load the /lists page', function() {
    var ptor = protractor.getInstance();
    ptor.get('http://localhost:8888/#/lists');
    ptor.sleep(5000);
    expect(ptor.findElement(protractor.By.id('view')).getText()).toContain('Collection of Lists');
  });

  it('should load the /lists/new page', function() {
    var ptor = protractor.getInstance();
    ptor.get('http://localhost:8888/#/lists/new');
    ptor.sleep(5000);
    expect(ptor.findElement(protractor.By.id('view')).getText()).toContain('Create New List');
  });

});

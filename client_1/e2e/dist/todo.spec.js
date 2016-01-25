describe('Searh Todo', function () {
    beforeEach(function () {
        browser.get('/');
    });
    it('should successfully search todo', function () {
        var search = element(by.id('search_todo'));
        search.sendKeys('one');
        // search.sendKeys(protractor.Key.ENTER);
        var todos = element.all(by.css('.collection-item'));
        todos.map(function (element) { return element.getText(); })
            .then(function (txts) { return expect(txts[0]).toBe('one'); });
        // expect(todos[0].getText()).toBe('one');
    });
});

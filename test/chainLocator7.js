describe('Protractor chailLocator Demo App', function() {
    it('Locator', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();
       /* element(by.css('td:nth-Child(3)')).getText().then(function(text){
            console.log(text);

 });*/
       element(by.repeater('result in memory')).element(by.css('td:nth-Child(3)')).getText().then(function(text){
            console.log(text);
        });
      
        //element(by.model('operator')).element(by.css('option:nthchild(4)')).click();
    });
  });
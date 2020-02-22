describe('Protractor ChainLocator Demo App', function() {
    it('open angularjs website', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();
        element(by.model('first')).sendKeys(6);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();
        element.all(by.repeater('result in memory')).count().then(function(text){
            console.log(text);  
        });
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){
                console.log(text);      
    });
   

  });
});
});
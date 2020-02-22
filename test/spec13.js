describe('Protractor Demo App', function(){
    it('should have a title', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();

        element(by.repeater('result in memory')).element(by.css('td:nth-Child(3)')).getText().then(function(text){
                console.log(text);      

        });
            element(by.model('operator')).element(by.css('option:nth-child(4)')).click();

    });

});
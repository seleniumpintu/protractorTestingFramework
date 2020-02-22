describe('Protractor Demo App', function(){
    it('should have a title', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3).then(function(){
            browser.sleep(5000);

        });
            
    });

});
 
    
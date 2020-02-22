describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();
        element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
            console.log(text);
        });
      

    });
  });
  
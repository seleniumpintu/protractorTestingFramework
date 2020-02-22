describe('Protractor ChainLocator Demo App', function() {
    function add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();  
    }
    it('open angularjs website', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

            add(2,3);
            add(5,3);
            add(4,6);
            add(6,2);
            add(8,8);
       
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){
                console.log(text);      
    });
   

  });
});
});
describe('Protractor nonangular Demo App', function() {
    it('open nonagular website', function(){
        browser.waitForAngularEnabled(false); 
        browser.get('http://google.com.com/');
                
    });
        
});
    
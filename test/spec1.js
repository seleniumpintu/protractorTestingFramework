
describe('protractor baby step', function() {
    
    it('open angolarjs website', function() {

        browser.get('https://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);
        console.log('i am the last step to execute');
        
    });
        
    
});
    
describe('protractor alert step', function() {
    
    it('open nonangolar website', function() {

        browser.waitForAngularEnabled(false); 
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id('confirmbtn')).click();

browser.switchTo().alert().dismiss().then(function(){
    browser.sleep(7000);
})
  


    });
});
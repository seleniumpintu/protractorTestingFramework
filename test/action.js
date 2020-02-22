describe('action Demo App', function() {
    it('open angularjs website', function(){
browser.get('http://posse.com/');
element(by.model("userInputQuery")).sendkeys("river");
browser.actions().mouseMove(element(by.model("locationQuery")).sendkeys("London")).perform();
browser.actions.sendkeys(protractor.key.ARROW_DOWN).perform();
browser.actions.sendkeys(protractor.key.ENTER).perform().then(function(){
    browser.sleep(5000);
})
});

});
describe('protractor frame step', function() {
    
    it('open nonangolar website', function() {

        //browser.waitForAngularEnabled(false); 
        browser.driver.manage().window().maximize(),
        browser.get('http://qaclickacademy.github.io/protocommerce/');
         
    
       browser.sleep(7000);

element(by.name('name')).sendkeys('pintu');
element(by.id("exampleInputPassword1")).sendkeys("pintukr13456");
element(by.css("input[type='checkbox]")).click();
element(by.cssContainingText("[id='exampleFormControlSelect1']option","Femal")).click();
element.all(by.name("inlineRadioOptions")).fiest().click();
element(by.buttonText("submit")).click().then(function(){
element(by.css("div[class='success']")).getText().then(function(text){
    console.log(text);
});
});

element(by.name("name")).clear();
element(by.name("name")).sendkeys("p").then(function(){
    element(by.css("[class='alert alert-danger']")).getText().then(function(text){
        console.log(text);
    });
});
    });
});

describe('protractor synchronization step', function() {
    
    it('open nonangolar website', function() {

        browser.waitForAngularEnabled(false); 
        browser.driver.manage().window().maximize(),
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');


        element(by.css("a[href*='loadAjax']")).click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id("loader"))),0000);
       // browser.sleep(7000);
            element(by.id('results')).getText().then(function(text){
                console.log(text);
            });

        


        });


    });

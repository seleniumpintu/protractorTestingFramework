// An example configuration file.
exports.config = {
    //The address of a running selenium server
    seleniumAddress : 'http://localhost:4444/wd/hub',
    
        specs: ['./jsonobject1.js'],
        onPrepare:function()
        {
        browser.driver.manage().window().maximize();
        }
     
    }
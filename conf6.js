var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// An example configuration file.
exports.config = {
    //directConnect: true,
   
   // Capabilities to be passed to the webdriver instance.
   capabilities: {
     'browserName':'chrome',
   },
   
    // seleniumAddress:'http://localhost:4444/wd/hub',
   
     specs: ['./jsonobject1.js'],

     onPrepare:function()
     {
     browser.driver.manage().window().maximize();
     },
   
      //protractor-jasmine2-html-reporter
      onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
          })
        );
      
     },
     suites:
     {
Smoke :('jsonobject.js','spec.js'),
Regressions: ('all1.js','spec4.js'),
     },
  // Options to be passed to Jasmine-node. for color screenshot
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
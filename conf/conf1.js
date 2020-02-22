exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
     directConnect: true,
  
     specs: ['../test/spec4.js'],

           // Capabilities to be passed to the webdriver instance.
        capabilities: {
            'browserName': 'firefox'
            
          }

    };

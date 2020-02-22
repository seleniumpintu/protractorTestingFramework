describe('A spec (with setup and tear-down)', function() {
    var obj=require("../framework/pom.js");
    beforeEach(function() {
        obj.getURL(); 
      });
    it('should have a title', function() {
       
        //obj.getURL();
        obj.firstinput.sendKeys(2);
        obj.secondinput.sendKeys(3);
        obj.goButton.click();

  expect(obj.result.getText()).toEqual('5');
        obj.result.getText().then(function(text){
            console.log(text);
        });
    });
    afterEach(function() {
        console.log("test is completed");  
      });

    });
  
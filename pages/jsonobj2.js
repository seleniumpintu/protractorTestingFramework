describe('A spec (with setup and tear-down)', function() {

    var obj=require("../framework/pom.js");
    var d=require("./framework/data1.js");
    console.log(d.datadrive.firstinput);
    beforeEach(function() {
        obj.getURL(); 
      });
    it('should have a title', function() {
       
        //obj.getURL();
        obj.firstinput.sendKeys(d.datadrive.firstinput);
        obj.secondinput.sendKeys(d.datadrive.secondinput);
        obj.goButton.click();

  expect(obj.result.getText()).toEqual(d.datadrive.result);
        obj.result.getText().then(function(text){
            console.log(text);
        });
    });
    afterEach(function() {
        console.log("test is completed");  
      });

    });
  
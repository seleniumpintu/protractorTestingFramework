describe('Protractor Demo App', function() {
    var obj=require("../framework/pom.js");

    it('should have a title', function() {
       
        obj.getURL();
        obj.firstinput.sendKeys(2);
        obj.secondinput.sendKeys(3);
        obj.goButton.click();

  expect(obj.result.getText()).toEqual('5');
        obj.result.getText().then(function(text){
            console.log(text);
        });
    });


    });
  
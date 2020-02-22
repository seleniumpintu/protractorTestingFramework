describe('protractor pom and datadriven Demo App', function() {
    var obj=require("./pom.js");
    var d=require("./datadriven1.js");

    console.log(d.datadriver.firstinput1);
    console.log(d.datadriver.secondinput1);
    console.log(d.datadriver.result1);

    beforeEach(function()
    {
        obj.getURL();  
    });

    it('pom test', function() {

       
        obj.firstinput.sendKeys(d.datadriver.firstinput1);
        obj.sceondinput.sendKeys(d.datadriver.secondinput1);

        obj.goButton.click();

        expect(obj.result.getText()).toEqual(d.datadriver.result1);
        obj.result.getText().then(function(text){
        console.log(text);
        
    });  
  
});
afterEach(function(){
    console.log("test is completed");
  });
});
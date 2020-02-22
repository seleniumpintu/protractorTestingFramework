describe('protractor pom and datadriven Demo App', function() {
    var obj=require("./pom.js");
    var using=require('jasmine-data-provider');
    var d=require("./datadriven2.js");

    //console.log(d.datadriver.firstinput1);
    //console.log(d.datadriver.secondinput1);
    //console.log(d.datadriver.result1);

    beforeEach(function()
    {
        obj.getURL();  
    });
    //data stores actual data
    //description store sub object name
    //for every iteration one data set is picked
    using(d.datadriven, function (data, description) {
        it('pom and datadriven testing:'+description, function() {

       
            obj.firstinput.sendKeys(data.firstinput1);
            obj.sceondinput.sendKeys(data.secondinput1);
    
            obj.goButton.click();
      
    
            expect(obj.result.getText()).toEqual(data.result1);
            obj.result.getText().then(function(text){
            console.log(text);
        
        });  
      
    });

    });


afterEach(function(){
    console.log("test is completed");
  });
});
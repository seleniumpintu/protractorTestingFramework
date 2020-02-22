function car()
{
    this.colour="red";
    this.engine="tubo";
    this.brand="bmw";
    this.search="by.css('input')";

    this.getModel=function()
    {
        console.log("this is 2020 model");
    }
}
var a=new car();
a.getModel();
console.log(a.engine);
console.log(a.search);
console.log(a.colour);
console.log(a.brand);

function car()
{
    this.colour="red";
    this.engine="tubo";
    this.brand="bmw";

    this.getModel=function()
    {
        console.log("this is 2020 model");
    }
}
var a=new car();
a.getModel();

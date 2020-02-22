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
module.exports=new car();

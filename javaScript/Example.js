console.log("hello pintu kumar");
var a=4;
var b="pintu";
console.log(a);
console.log(b);
var c="one";
if(c=="one"){
    console.log("statment is one");  
}else if (c=="two"){
    console.log("statment is two"); 
}else if(c=="three"){
console.log("statment is three");
}else{
    console.log("statment is false")
 
}
console.log("****************************");
for(var i=1;i<=100;i++)
{
    console.log(i)
}
console.log("****************************");
var j=1;
while(j<5){
    console.log(j);
    j++;
}
console.log("****************************");
var k=10;
do{
    
    console.log(k);
    k++;
 } while(k<6)
 console.log("****************************");
 function add(a,b){
     return a+b;
 }
 console.log(add(2,3));
 console.log(add(2,5));
 console.log(add(6,3));
 console.log(add(4,6));
 console.log("****************************");
 //var a=4;
 var b=["hello", "world","4","goodbay"];
 console.log(b.length+":size of the array");
 for(var i=0;i<b.length;i++)
 {
     console.log(b[i]);
 }
 console.log("****************************");
 var c=new Array();
 c[0]="pintu";
 c[1]="rohna";
 c[2]="risha";
 c[3]="roshni";
 c[4]="sunil;";
 console.log("size of the array:"+c.length);
 for(var i=0;i<c.length;i++){
 console.log(c[i]);
 }
 console.log("reverse order");
 for(var j=c.length-1;j>=0;j--)
 {
    console.log(c[j]);
 }
 
 console.log("****************************");
 console.log("string literal decleration");
 var str="pintu";
 console.log(str.charAt(3));
 var name=str.concat(" kumar");
 console.log(name);
 console.log(str.indexOf("t"));
 console.log(str.slice(1,4));
 console.log(name.toUpperCase());
 console.log(str.toLowerCase());
 var str1="sunil  ";
 console.log(str1);
 console.log(str1.trim());
 console.log("string object decleration using new keyword");
 var str2=new String("pintu");
 console.log(str2);
 console.log(str2.charAt(3));
 var name=str2.concat(" kumar");
 console.log(name);
 console.log(str2.indexOf("t"));
 console.log(str2.slice(1,4));
 console.log(name.toUpperCase());
 console.log(str2.toLowerCase());
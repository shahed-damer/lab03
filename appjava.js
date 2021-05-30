/*var flo = "Carnations";




var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var favkindflower  = prompt("What is your fav kind of flower  ?");

if(favkindflower === flo ){
  document.write("<p> Welcome to the club </p>")
}else if(favkindflower === "Gardenias"){
  document.write('<img src="https://www.almanac.com/sites/default/files/image_nodes/gardenia-close.jpg"/>')
}else{
  alert('please next time answer either Carnations or Gardenias') }

*/
 alert("please choose a name from among these names {shahed,damer}");
 
 var userName = prompt ("please enter your name");
 
 alert("please choose a age from among these ages {20,23}");
 
 var userAge = prompt("please enter your Age");
 
 while(userName =="shahed" && userName =="damer"){
   alert( "welcome"+userName+"in our web site");
   userName = prompt ("please enter your name");
  }

  while(userAge==20 && userAge==23){
   alert ("your in your sweet tweenten");
    userAge = prompt("please enter your Age");
   }
 
alert("if you like Strawberries, choose how many photos do you want for it ?");
 

var  favaret =prompt ("enter number of photos!!");
for(let i=0;i<favaret;i++)
{document.write('<img src="https://static.dw.com/image/38549598_303.jpg"/>');}

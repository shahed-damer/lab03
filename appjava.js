var flo = "Carnations";




var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var favkindflower  = prompt("What is your fav kind of flower  ?");

if(favkindflower === flo ){
  document.write("<p> Welcome to the club </p>")
}else if(favkindflower === "Gardenias"){
  document.write('<img src="https://www.almanac.com/sites/default/files/image_nodes/gardenia-close.jpg"/>')
}else{
  alert('please next time answer either Carnations or Gardenias') }


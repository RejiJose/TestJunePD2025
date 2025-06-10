//Task 1: Find an image for each food below and assign as value of the "url" key

let data = [{title:"Pizza", url:"",price:9.99},
            {title:"Hamburger", url:"",price:5.99},
            {title:"Hot Dog",url:"",price:3.99},
            {title:"Pretzel",url:"",price:2.99},
            {title:"Chicken Tenders",url:"",price:6.99},
            {title:"Fish Sticks",url:"",price:4.99},
            {title:"Roasted Peanuts",url:"",price:1.99}
           ];


function fastfood(){
  let output = document.getElementById("output");
  let build = "";

  //Task 2: Generate cards using the information contained in the array 'data'. The div belongs to classes 'fitted' and 'card'. Make title an h3 and price a paragraph.

  
  output.innerHTML = build;
}

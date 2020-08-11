/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleFunc(dropMenuID) {
  //alert("toggleFunc");
  document.getElementById(dropMenuID).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  //alert("window.onclick");
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function updateMenu(ID, titulo){
  //alert("updateMenu");
  document.getElementById(ID).innerHTML = titulo;

  var list = [];

  if (titulo == "Calculator"){
    list = calculatorList = ["ti-83 plus calculator", "ti-84 plus calculator", "ti-84 plus CE calculator", "ti-89 calculator"];
  }
  else if (titulo == "Samsung Galaxy"){
    list = ["Samsung Galaxy s4", "Samsung Galaxy s5", "Samsung Galaxy s6", "Samsung Galaxy s7", "Samsung Galaxy s8", "Samsung Galaxy s9", "Samsung Galaxy s10", "Samsung Galaxy s20"];
  }
  else if (titulo == "Samsung Note"){
    list = ["Samsung Galaxy Note 5", "Samsung Galaxy Note 8", "Samsung Galaxy Note 9"];
  }
  else if (titulo == "iPhone"){
    list = ["iPhone 6 plus", "iPhone 6", "iPhone 7 plus", "iPhone 7", "iPhone 8 plus", "iPhone 8", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone 11 Pro", "iPhone 11 Pro Max", "iPhone 11"];
  }
  else if (titulo == "Apple Watch"){
    list = ["Apple Watch Series 1", "Apple Watch Series 3", "Apple Watch Series 4", "Apple Watch Series 5"];
  }
  else if (titulo == "Airpods"){
    list = ["Apple Airpods 1st Generation", "Apple Airpods 2nd Generation", "Apple Airpods Pro"];
  }
  else if (titulo == "GoPro"){
    list = ["GoPro Hero 8 Black", "GoPro Max", "GoPro Hero 7 Black", "GoPro Hero 8 Silver"];
  }
  else if (titulo == "PlayStation"){
    list = ["PlayStation 1", "PlayStation 2", "PlayStation 3", "PlayStation 4"];
  }
  else if (titulo == "Xbox"){
    list = ["Xbox 360", "Xbox One", "Xbox One S", "Xbox One X"];
  }
  else if (titulo == "Nintendo"){
    list = ["Nintendo Wii", "Nintendo Wii U", "Nintendo Switch", "Nintendo Switch Lite", "Nintendo DS", "Nintendo 3DS", "Nintendo 2DS"];
  }
  else if (titulo == "Book"){
    list = ["To Kill a Mockingbird", "Fahrenheit 451", "1984", "Romeo and Juliet", "The Catcher in the Rye", "The Diary of a Young Girl", "The Adventures of Huckleberry Finn", "The Book Thief", "Night  (The Night Trilogy, #1)", "The Help", "Of Mice and Men", "Looking for Alaska", "Speak", "The Perks of Being a Wallflower", "The Great Gatsby", "Lord of the Flies", "The Outsiders", "A Tale of Two Cities", "The Hiding Place: The Triumphant True Story of Corrie Ten Boom", "Hamlet", "Macbeth", "All Quiet on the Western Front", "The Grapes of Wrath", "The Absolutely True Diary of a Part-Time Indian", "Frankenstein", "Anthem", "Wuthering Heights", "The Scarlet Letter", "The Lord of the Rings (The Lord of the Rings, #1-3)", "Gone with the Wind", "Life of Pi", "Catch-22 (Catch-22, #1)", "A Separate Peace", "East of Eden", "Oliver Twist", "Witch Born (Witch Song, #2)", "The Pilgrim's Progress", "The Metamorphosis", "Tuesdays with Morrie", "The Strange Case of Dr. Jekyll and Mr. Hyde", "A Brief History of Time", "Jane Eyre", "Lies My Teacher Told Me: Everything Your American History Textbook Got Wrong", "Julius Caesar", "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)", "The Gettysburg Address", "Pride and Prejudice", "Up from Slavery", "Dead Poets Society", "Crime and Punishment", "Invisible Man", "Travels with Charley: In Search of America", "The Pearl", "Death of a Salesman", "I, Robot (Robot, #0.1)", "The Picture of Dorian Gray", "As I Lay Dying", "Mere Christianity", "The Story of My Life", "Test Anxiety Cure: Scientifically Proven Ways to Succeed and Score High in All Exams", "An Inspector Calls", "The Edge of Everything (Haven, #3)", "Carter Reed (Carter Reed, #1)", "Rules of Entanglement (Fighting for Love, #2)", "I Am Malala: The Story of the Girl Who Stood Up for Education and Was Shot by the Taliban", "Their Eyes Were Watching God", "Stuart Little", "Native Son", "Passing", "Thirteen Reasons Why", "The Alchemist", "Frankenstein: The 1818 Text", "Willow", "Ready Player One (Ready Player One, #1)", "Cat's Cradle", "Scott Pilgrim, Volume 1: Scott Pilgrim's Precious Little Life", "The Giver (The Giver, #1)", "Salvation on Sand Mountain: Snake-Handling and Redemption in Southern Appalachia", "Ragtime", "The Tempest", "The Princess Bride", "The Golden Compass (His Dark Materials, #1)", "Uncle Tom's Cabin", "The Autobiography of Miss Jane Pittman", "The Hobbit, or There and Back Again", "Ender's Game (Ender's Saga, #1)", "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)", "One Flew Over the Cuckoo's Nest", "The Sound and the Fury", "Treasure Island", "Anne of Green Gables (Anne of Green Gables, #1)", "Charlie and the Chocolate Factory (Charlie Bucket, #1)", "Long Walk to Freedom", "Matilda", "The Wonderful Wizard of Oz (Oz, #1)", "The First American: The Life and Times of Benjamin Franklin", "Gulliver's Travels", "Old Yeller", "In Cold Blood", "The Count of Monte Cristo"];
  }


  displayItems(list);

}

function simpleHTMLChange(ropa){
  //returns the function for a button
  return function(){
    document.getElementById('itemButton').innerHTML = ropa;
  }
}

function displayItems(itemList){
  //make the buttons to be displayed in the drop down menu
  var element = document.getElementById("categoryDependent");
  element.innerHTML = "";

  var i;
  for(i = 0; i < itemList.length; i++){
    var ropa = itemList[i];

    var para = document.createElement("button");

    para.onclick = simpleHTMLChange(ropa);
    para.id = "dropOption";
    para.innerHTML = ropa;

    document.getElementById("categoryDependent").appendChild(para);

  }

}



function accessPhotos(){
  //make the directory to the graphs
  var directory = "./PNG/";
  var itemName = document.getElementById("itemButton").innerHTML.replace(" ", "_");

  avgPriceDirectory = directory + itemName + "_avgPrice.png"
  volumeDirectory = directory + itemName + "_volume.png"
  //alert(avgPriceDirectory)
  //alert(volumeDirectory)
  
  //force the directories for testing
  //avgPriceDirectory = "./PNG/ti-83_plus_calculator_avgPrice.png"
  //volumeDirectory = "./PNG/ti-83_plus_calculator_volume.png"



  //after finding the photo's by their directory, make <img> elements and place them in the HTML to be viewed
  document.getElementById("photos").innerHTML = "";

  var para = document.createElement("img");
  para.src = avgPriceDirectory;
  document.getElementById("photos").appendChild(para);

  var para = document.createElement("img");
  para.src = volumeDirectory;
  document.getElementById("photos").appendChild(para);

  /*
  if (outer == "Calculator" || outer == "Samsung Galaxy" || outer == "Samsung Note" || outer == "iPhone"){
    directory = "C:\\Users\\nimar\\AppData\\Local\\Programs\\Python\\Python37\\Ebay\\Device_Scraping\\PNG_Devices\\";
    //alert("devices");
  }
  else{
    directory = "C:\\Users\\nimar\\AppData\\Local\\Programs\\Python\\Python37\\Ebay\\Book_Scraping\\PNG_Books\\";
    //alert("books");
  }
  */
}

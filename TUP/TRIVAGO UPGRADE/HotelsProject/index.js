document.querySelector('.logout-link').addEventListener('click', function(){


  var answer = confirm('do you want to log out ?')

    if(answer === true){
      localStorage.removeItem('usertokens')
      alert("you have been logged out .. to make bookings you need to be logged in")
      
      window.location.href = "../Login&Reg/login.html";
    }

  
  })

var div = document.querySelector('.hotels-container')
var hotelsProfiles = JSON.parse(localStorage.getItem('ourHotelProfiles'))

// console.log(hotelsProfiles)

hotelsProfiles.find(function(hotels, index){
     console.log(hotels)

    if(hotelsProfiles.length > 0){

        if(div !== undefined){

            div.innerHTML += `
                             <div class="hotel">
                             <div class="column">
                                    <img src="images/the table bay.jpg" alt="">
                              </div>
                             <div class="column">
                                    <h2>${hotels.name}</h2>
                                   <p>Address: ${hotels.address}</p>
                                  <p>Phone: ${hotels.number}</p>
                            </div>
                            <div class="column">
                                  <h2>Deals from</h2>
                                  <p>R2 000</p>
                                 <button type="button" class="button" id="${index}">View Deal</button>
                            </div>
                           </div>`
        }
        
    }

})

var json = JSON.parse(localStorage.getItem('ourHotelProfiles'));

var searchForm = document.querySelector('.form');
var div = document.querySelector('.hotels-container')
var cityInput = document.getElementById('city-input').value
console.log(cityInput)

searchForm.addEventListener('submit', function(e){
  e.preventDefault();

//   for(obj in json) {
//     console.log(json[obj].name); //compare this with your "searchtext"
//     if(cityInput !== json[obj].name){
//       div.style.display = "none";
//       console.log(div)
//       console.log(cityInput)
//     }
// }

})


// function myFunction() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           li[i].style.display = "";
//       } else {
//           li[i].style.display = "none";
//       }
//   }
// }






  
  var localData = JSON.parse(localStorage.getItem('ourHotelProfiles'));

 var parent = document.querySelector('.hotels-container');
 
 parent.addEventListener('click', function(e) {
   
  var itemId = parseInt(e.target.id);
  var localIndex = localData.find(function(item, index) {
    return itemId === index
  })
  
  var hotelInfo = {
    name : localIndex.name,
  }

  var encoded = encodeURIComponent(hotelInfo.name);
  window.location.href = '../HarooAccomo/Haroo/index.html' + '?' + encoded;
  console.log(encoded);
  
 })

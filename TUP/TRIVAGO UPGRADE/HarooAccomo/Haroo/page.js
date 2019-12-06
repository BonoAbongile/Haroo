document.addEventListener('DOMContentLoaded', function() {
    getInfo()
})

function getInfo() {
    var info = decodeURIComponent(window.location.search);
    var name = info.substr(1, info.length)
    
    var hotelInfo = JSON.parse(localStorage.getItem('ourHotelProfiles'));
    var getName = hotelInfo.find(function(hotel){
        return hotel.name === name;
    })

    var heading = document.querySelector('.heading');
    heading.innerHTML =  `<h1>${getName.name}</h1>
                            <p>${getName.address}</p>
                            <p>${getName.email}</p>
                            <p>Ratings: ${getName.rating}</p>
                        `

    var mapSide = document.querySelector('.map');
    mapSide.innerHTML = `<h2>How To Reach Hotel</h2>
                         <img src="images/map.jpg" alt=""><br>
                         <label for="">Hotel Address:</label>
                         <p>${getName.address}</p>
                        <button class="button">Get Directions</button>
                        `

    var hotelName = document.querySelector('.hotel-name h2')
    hotelName.textContent = getName.name;



   var roomsContainer = document.getElementById('rooms')
   var allrooms = getName.rooms;
    
   allrooms.find(function(room, index){
      

    roomsContainer.innerHTML += `<div class="containers">
                                        <div class="half">
                                            <img src="images/bed.jpg" alt="">
                                        </div>

                                        <div class="half">
                                            <h1>${room.roomname}</h1>
                                            <p>Room size: ${room.roomsize}</p>
                                            <p>Max people: ${room.max}</p>
                                            <p>Bed type: ${room.bedType}</p>
                                        </div>
                                 </div>
                                 <div id="containers">
                                        <div class="four">
                                            <h1>Non-refundable</h1>
                                        </div>

                                        <div class="four">
                                            <li>Available/Range: ${room.range}</li>
                                            <li>Ocean View</li>
                                            <li> Breakfast Included</li>
                                            <li>Is child allowed: ${room.isChildAllow}</li>
                                        </div>

                                        <div class="four">
                                            <p> ${room.price} for 1night</p>
                                           </div>

                                        <div class="four">
                                            <button id=${index}>BOOK NOW</button>
                                        </div>
                                </div>
                                <span></span>
                                `
    // console.log(room)
    // console.log(index)
   })
   // console.log(getName);
    
    var footer = document.getElementById('footer')
    footer.innerHTML = ` <span></span>
                            <h1>${getName.name}, For the World</h1>
                            <p>${getName.address}</p>
                            <p>Hotel Reservation System | 2019 © haroo.com. All rights reserved | Contacts</p>
                        `
}

var hotelData = JSON.parse(localStorage.getItem('ourHotelProfiles'));
var rooms = hotelData[0].rooms;
console.log(rooms)
var roomsContainer = document.getElementById('rooms')

roomsContainer.addEventListener('click', function(e) {
    var itemId = parseInt(e.target.id);
    var getRooms = rooms.find(function(hotel, index){
        return  itemId === index; //itemId === index; 
    })

     var roomInfo = {
         name : getRooms.roomname,
       }

       var encoded = encodeURIComponent(roomInfo.name);
         window.location.href = 'booking.html' + '?' + encoded;
       console.log(encoded);
})

   

//console.log(getRooms.rooms[1].roomname)

//  var roomsContainer = document.getElementById('rooms')
 
//  roomsContainer.addEventListener('click', function(e) {
   
//   var itemId = parseInt(e.target.id);
//   var localIndex = localData.find(function(item, index) {
//     return itemId === index
//   })
  
//   var hotelInfo = {
//     name : localIndex.name,
//   }

//   var encoded = encodeURIComponent(hotelInfo.name);
//  // window.location.href = '../HarooAccomo/Haroo/index.html' + '?' + encoded;
//   console.log(encoded);
// })

document.addEventListener('DOMContentLoaded', function() {
    getInfo()
})


function getInfo(){
    var info = decodeURIComponent(window.location.search);
    var name = info.substr(1, info.length)
    console.log(name)

    var hotelInfo = JSON.parse(localStorage.getItem('ourHotelProfiles'));
    console.log(hotelInfo)
    var getRooms = hotelInfo[0].rooms;

    var getName = getRooms.find(function(hotel){
        return hotel.roomname === name;
    })

    console.log(getName)

    var heading = document.querySelector('.top')
        heading.innerHTML = `<h1>${hotelInfo[0].name}</h1>
                                <p>${hotelInfo[0].address}</p>
                               <p>Ratings: ${hotelInfo[0].rating}</p>
                                 <span></span>
                            `

    var roomContentContainer = document.querySelector('.booking')
    roomContentContainer.innerHTML = `<h1>Booking Details:</h1>
                                        <span></span>
                                        <h2>${getName.roomname}</h2>
                                    <div class="check-in">
                                        <label for="">Check-in</label>
                                        <label for="">Check-out</label>
                                        <span></span>
                                        <label for="">Max number of people: ${getName.max}</label>
                                    </div>
                                         <img src="images/bed4.jpg" alt="">
                                    <li>Non-refundable</li>
                                    <li>Breakfast included</li>
                                    <li> Bed type: ${getName.bedType}</li>
                                    <li>Room size: ${getName.roomsize}</li>
                                    <li> Similar number of rooms left: ${getName.range}</li>
                                    <div class="price">
                                        <label for="">Price</label><p>${getName.price}</p>
                                    </div>
                                        <h4>INCLUDED</h4>
                                        <p>Taxes and Fees<br>
                                            Not included: 1% Tourism fee
                                        </p>
                                        <h4>NOTICE!</h4>
                                        <p>Local taxes and fees are paid at the property.</p>
                                        <p>Is child allowed ? ${getName.isChildAllow}</p>`
}

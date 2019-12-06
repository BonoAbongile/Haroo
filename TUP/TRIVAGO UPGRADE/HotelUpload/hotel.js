var hotelName = document.getElementById('hotel-name')
var hotelNumber = document.getElementById('hotel-number')
var hotelEmail = document.getElementById('hotel-email')
var hotelAddress = document.getElementById('hotel-address')
//social media inputs
var facebookPlat = document.getElementById('facebook')
var twitterPlat = document.getElementById('twitter')
var instagramPlat = document.getElementById('instagram')
var linkedinPlat = document.getElementById('linkedin')
// rooms inputs 
var roomName = document.getElementById('room-name')
var priceInputs = document.getElementById('room-price')
var maxpeopleInputs = document.getElementById('room-max')
var aboutchildInputs = document.getElementById('room-childAllowed')
var roomsizeInputs = document.getElementById('room-size')
var bedtypeInputs = document.getElementById('room-bed')
var roomRange = document.getElementById('room-range')

// room2 inputs 
var roomName2 = document.getElementById('room-name2')
var priceInput2 = document.getElementById('room-price2')
var maxpeopleInput2 = document.getElementById('room-max2')
var aboutchildInputs2 = document.getElementById('room-childAllowed2')
var roomsizeInputs2 = document.getElementById('room-size2')
var bedtypeInputs2 = document.getElementById('room-bed2')
var roomRange2 = document.getElementById('room-range2')

// room3 inputs
var roomName3 = document.getElementById('room-name3')
var priceInput3 = document.getElementById('room-price3')
var maxpeopleInput3 = document.getElementById('room-max3')
var aboutchildInputs3 = document.getElementById('room-childAllowed3')
var roomsizeInputs3 = document.getElementById('room-size3')
var bedtypeInputs3 = document.getElementById('room-bed3')
var roomRange3 = document.getElementById('room-range3')

//ratings 
var starRating = document.querySelector('.rating-options')

var form = document.getElementById('my-form')
var HotelProfiles = []

    // if(localStorage.getItem('ourHotelProfiles') == null){
    //     localStorage.setItem('ourHotelProfiles', JSON.stringify(HotelProfiles))
    // }

    form.addEventListener('submit', function(e){
        e.preventDefault();
    
        setHotelProfile()

        window.location.href = '../HotelsProject/index.html'
    })

function setHotelProfile(){

    var hotelProfObject = {

        name:hotelName.value,
        address:hotelAddress.value,
        email:hotelEmail.value,
        number:hotelNumber.value,
        rating: starRating.value,
        socialplatforms:[{facebook:"www.facebook.com/" + facebookPlat.value, 
                          twitter:twitterPlat.value,
                          instagram:instagramPlat.value,
                          linkedind:linkedinPlat.value}],
        rooms:[{ roomname:roomName.value,
                 max:maxpeopleInputs.value, 
                 price:priceInputs.value, 
                 isChildAllow:aboutchildInputs.value, 
                 bedType:bedtypeInputs.value,
                 roomsize:roomsizeInputs.value + " cm",
                 range:roomRange.value,
                 isBooked:false, 
                 checkin:null, 
                 checkout:null, 
                 userid:null,},

                 {roomname:roomName2.value,
                    max:maxpeopleInput2.value, 
                    price:priceInput2.value, 
                    isChildAllow:aboutchildInputs2.value, 
                    bedType:bedtypeInputs2.value,
                    roomsize:roomsizeInputs2.value + " cm",
                    range:roomRange2.value,
                    isBooked:false, 
                    checkin:null, 
                    checkout:null, 
                    userid:null,},

                    {roomname:roomName3.value,
                        max:maxpeopleInput3.value, 
                        price:priceInput3.value, 
                        isChildAllow:aboutchildInputs3.value, 
                        bedType:bedtypeInputs3.value,
                        roomsize:roomsizeInputs3.value + " cm",
                        range:roomRange3.value,
                        isBooked:false, 
                        checkin:null, 
                        checkout:null, 
                        userid:null,}
                ]

    }

    HotelProfiles = JSON.parse(localStorage.getItem('ourHotelProfiles')) != null ? JSON.parse(localStorage.getItem('ourHotelProfiles')) : []
    HotelProfiles.push(hotelProfObject)
    localStorage.setItem('ourHotelProfiles', JSON.stringify(HotelProfiles))


    // if(localStorage.getItem('ourHotelProfiles') != null){
    //     HotelProfiles = JSON.parse(localStorage.getItem('ourHotelProfiles'))
    //     HotelProfiles.push(hotelProfObject)
    //     localStorage.setItem('ourHotelProfiles', JSON.stringify(HotelProfiles))
    //   }
    //   else{
    //     HotelProfiles.push(hotelProfObject)
    //     localStorage.setItem('ourHotelProfiles', JSON.stringify(HotelProfiles))
    //   }
}


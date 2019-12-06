if(localStorage.getItem('usertokens') !== null){
    window.location.href = "../HotelsProject/index.html"
    document.querySelector('.logout-link').textContent = "LogOut";
}

var signInbtn = document.getElementById('login-show')
signInbtn.addEventListener('click', function(){

    var loginForm = document.querySelector('.bottom__form')
    loginForm.style.top = '300px'

    var regForm = document.querySelector('.bottom__register-form')
    regForm.style.top = '0'
    
})

var signInbtn2 = document.getElementById('login2-show')
signInbtn2.addEventListener('click', function(){

    var loginForm = document.querySelector('.bottom2__form')
    loginForm.style.top = '300px'

    var regForm = document.querySelector('.bottom2__register-form')
    regForm.style.top = '0'
    
})

// FORM VALIDATION STARTS HERE

document.addEventListener('DOMContentLoaded', function(){
    var UserLogform = document.querySelector('.bottom__form')
    var UserRegform = document.querySelector('.bottom__top-form')
    var HotelLogform = document.querySelector('.bottom2__form')
    var HotelRegform = document.querySelector('.bottom2__top-form')

    UserLogform.addEventListener('submit', function(e){
    e.preventDefault()

    UserLogInValidate()
    })

    UserRegform.addEventListener('submit', function(e){
    e.preventDefault()
       
    UserRegValidate()
    })

    HotelLogform.addEventListener('submit', function(e){
    e.preventDefault()

    HotelLogValidate()
    })

    HotelRegform.addEventListener('submit', function(e){
    e.preventDefault()

    HotelRegValidate()
    })
})

//Hotel Forms functionalities
function HotelRegValidate(){

var name = document.getElementById('reg2-name').value
var email = document.getElementById('reg2-email').value
var password = document.getElementById('reg2-password').value
var confpass = document.getElementById('reg2-cpassword').value
var errors = []

if(name == "" || email == "" || password == "" || confpass == "" || confpass != password){

    if(name == ""){
        errors.push({
            errorTitle: ' Missing name value'
        })
    }
    
    if(email == ""){
        errors.push({
            errorTitle: ' Missing email value'
        })
    }
    
    if(password == ""){
        errors.push({
            errorTitle: ' Missing password value'
        })
    }
    
    if(confpass != password){
        errors.push({
            errorTitle: ' Password not the same'
        })
    }

    console.log(errors)

   localStorage.setItem('errors', JSON.stringify(errors))

    var divPaste = document.querySelector('.paste ul')
    var locErrors = JSON.parse(localStorage.getItem('errors'))

    locErrors.find(function(error){
        divPaste.innerHTML += `<li>
                                     ${error.errorTitle}
                              </li>`
    })
}


if(name != "" && email != "" && password != "" && confpass == password){

    var oldHotels = [];

    var newHotel = {
        name:name,
        email:email,
        password:password
    }

    // oldHotels.push(newHotel)
    // // console.log(oldUsers)
    // localStorage.setItem('hotels', JSON.stringify(oldHotels))
    // alert('You are succesfully registerd !!')
    // window.location.reload()


    if(localStorage.getItem('hotels') != null){
        oldHotels = JSON.parse(localStorage.getItem('hotels'))
        oldHotels.push(newHotel)
        localStorage.setItem('hotels', JSON.stringify(oldHotels))
      }
      else{
        oldHotels.push(newHotel)
        localStorage.setItem('hotels', JSON.stringify(oldHotels))
      }
  
      window.location.reload()
    
}

}
function HotelLogValidate(){

var email = document.getElementById("email2-input").value;
var password = document.getElementById("password2-input").value;

var localHotels = JSON.parse(localStorage.getItem('hotels'))

console.log(localHotels)
localHotels.find(function(users){
    if(users.email === email && users.password === password){
        window.location.href = "../HotelUpload/hotel.html"
    }

    if(users.email != email || users.password != password){
        // window.location.reload()

    var errors = []

    var localUsers = JSON.parse(localStorage.getItem('hotels'))
    
    if(email == ''){
        errors.push({errorTitle: 'Email needed'})
    }

    if(password == ''){
        errors.push({errorTitle: 'Password needed'})
    }

    var checkExist = localUsers.find(function(user){
        return user.email == email && user.password == password
    })
    
    console.log(checkExist)

    if(email != '' && password != ''){
        if(checkExist == undefined){
            errors.push({errorTitle: 'Either your hotel does not exist or incorrect email or password'})
        }
    }

    localStorage.setItem('Login errors', JSON.stringify(errors))
    
    var errorDiv = document.querySelector('.for-hotel-errors ul')

    var localErrors = JSON.parse(localStorage.getItem('Login errors'))
    localErrors.find(function(error){
        errorDiv.innerHTML += `<li>
                                 ${error.errorTitle}
                          </li>`
    })
    }

})
}


//User Forms functionalities
function UserLogInValidate(){
var email = document.getElementById("email-input").value;
var password = document.getElementById("password-input").value;

var localUsers = JSON.parse(localStorage.getItem('users'))
localUsers.find(function(users){
    if(users.email === email && users.password === password){

        function generateToken(n) {
            var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var token = '';
            for(var i = 0; i < n; i++) {
                token += chars[Math.floor(Math.random() * chars.length)];
            }
            return token;
        }
        
        var generated = generateToken(33);
    
        var tokenArr = []
        localStorage.setItem('usertokens', JSON.stringify(tokenArr))
    
        var tokenObj = {
            token:generated
        }

        if(tokenObj != null){
            var toke = JSON.parse(localStorage.getItem('usertokens'))
            toke.push(tokenObj)
        }
        else{
            var toke = JSON.parse(localStorage.getItem('usertokens'))
            toke.push(tokenObj)
        }
        
        localStorage.setItem('usertokens', JSON.stringify(toke))
        // alert("Login successfully")
        window.location.href = "../HotelsProject/index.html";

        }

        if(users.email != email || users.password != password){
            // window.location.reload()

        var errors = []

        var localUsers = JSON.parse(localStorage.getItem('users'))
        
        if(email == ''){
            errors.push({errorTitle: 'Email needed'})
        }

        if(password == ''){
            errors.push({errorTitle: 'Password needed'})
        }

        var checkExist = localUsers.find(function(user){
            return user.email == email && user.password == password
        })

        console.log(checkExist)

        if(email != '' && password != ''){
            if(checkExist == undefined){
                errors.push({errorTitle: 'Either you dont exist or incorrect email or password'})
            }
        }

        localStorage.setItem('Login errors', JSON.stringify(errors))
        
        var errorDiv = document.querySelector('.for-login-errors ul')

        var localErrors = JSON.parse(localStorage.getItem('Login errors'))
        console.log(localErrors)
        localErrors.find(function(error){
            errorDiv.innerHTML += `<li>
                                     ${error.errorTitle}
                              </li>`
        })
        }
})
}
function UserRegValidate(){

var name = document.getElementById('reg-name').value
var email = document.getElementById('reg-email').value
var password = document.getElementById('reg-password').value
var confpass = document.getElementById('reg-cpassword').value
var errors = []

if(name == "" || email == "" || password == "" || confpass == "" || confpass != password){

    if(name == ""){
        errors.push({
            errorTitle: ' Missing name value'
        })
    }
    
    if(email == ""){
        errors.push({
            errorTitle: ' Missing email value'
        })
    }
    
    if(password == ""){
        errors.push({
            errorTitle: ' Missing password value'
        })
    }
    
    if(confpass != password){
        errors.push({
            errorTitle: ' Password not the same'
        })
    }

    console.log(errors)

    localStorage.setItem('errors', JSON.stringify(errors))

    var divPaste = document.querySelector('.for-errors ul')
    var locErrors = JSON.parse(localStorage.getItem('errors'))

    locErrors.map(function(error){
        divPaste.innerHTML += `<li>
                                     ${error.errorTitle}
                              </li>`
    })
}


if(name != "" && email != "" && password != "" && confpass == password){

    var oldUsers = [];

    var newUser = {
        name:name,
        email:email,
        password:password
    }
    console.log(newUser)

    // oldUsers.push(newUser)
    // // console.log(oldUsers)
    // localStorage.setItem('users', JSON.stringify(oldUsers))
    // alert('You are succesfully registerd !!')
    // window.location.reload();

    if(localStorage.getItem('users') != null){
        oldUsers = JSON.parse(localStorage.getItem('users'))
        oldUsers.push(newUser)
        localStorage.setItem('users', JSON.stringify(oldUsers))
      }
      else{
        oldUsers.push(newUser)
        localStorage.setItem('users', JSON.stringify(oldUsers))
      }

      alert('You are succesfully registerd !!')
      window.location.reload()
    
}
}





























// function errorPrinter(){

//         var email = document.getElementById("email-input").value;
//         var password = document.getElementById("password-input").value;
//         var errors = []

//         var localUsers = JSON.parse(localStorage.getItem('harooUsers'))
        
//         if(email == ''){
//             errors.push({errorTitle: 'Email needed'})
//         }

//         if(password == ''){
//             errors.push({errorTitle: 'Password needed'})
//         }

//         var checkExist = localUsers.find(function(user){
//             return user.email == email && user.password == password
//         })
//         console.log(checkExist)

//         if(email != '' && password != ''){
//             if(checkExist == undefined){
//                 errors.push({errorTitle: 'Either you dont exist or incorrect email or password'})
//             }
//         }

//         localStorage.setItem('Login errors', JSON.stringify(errors))
        
//         var errorDiv = document.querySelector('.for-errors ul')

//         var localErrors = JSON.parse(localStorage.getItem('Login errors'))
//         localErrors.map(function(error){
//             errorDiv.innerHTML += `<li>
//                                      ${error.errorTitle}
//                               </li>`
//         })
// }
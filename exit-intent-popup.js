// Create the HTML content for the exit intent pop-up
var exitIntentPopup = document.createElement('div');
exitIntentPopup.innerHTML = `
<div class="popup-outer" id="popup-outer">
        <div id="pop-up">
            <div id="close-btn">
                <button type="button" id="close-area" aria-label="Close">&times;</button>
            </div>
            <div class="container-main">
                <div class="container-popup">
                    <div class="left-container">
                        <div class="field-heading">
                            <p>
                                <span class="span-bold">
                                    GET $10 OFF WHEN YOU SIGN UP FOR
                                </span>
                                <br>
                                SAVINGS, NEWS, UPDATES AND MORE
                            </p>
                        </div>
                        <div class="input-field-name">
                            <input id="input-field" class="input-error" type="text" name="name" placeholder="Your Name">
                            <p id="name-error">Please enter Name</p>
                        </div>
                        <div class="input-field-email">
                            <input type="email" id="input-field-email" class="input-error" name="email" placeholder="Email Address">
                            <p id="email-error">Please enter a valid email</p>
                        </div>
                        <div class="input-field-checkbox">
                            <input type="checkbox" id="newsletter">
                            <label for="newsletter">Check this box to receive monthly newsletter.</label>
                            <p id="news-error">Please sign up to mothly newsletter. It's free !!!</p>
                        </div>
                        <div class="input-field-signup" id="submit">
                            <button id="button-signup" type="submit">SIGN UP</button>
                        </div>
                        <div class="input-field-policy">
                            <a href="#" class="privacy-policy">PRIVACY POLICY</a>
                        </div>
                    </div>
                    <div class="right-container">
                        <img class="popup-img"
                            src="https://useruploads.visualwebsiteoptimizer.com/useruploads/176372/images/339bf06d957c32e3b61f79b563f229af_offerx500.png">
                    </div>
                </div>
            </div>

        </div>
    </div>
`;

var style = document.createElement('style');
var css = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

        .popup-outer {
            z-index: 99999;
            padding: 30px;
            background-color: #504e4e;
            width: 700px;
            height: auto;
            margin: auto;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
        }

        #pop-up {
            font-family: "Roboto", sans-serif;
            background-color: #FDD503;
            margin: 20px;
        }

        #close-btn {
            margin-left: 95%;
            padding: 5px;
        }

        #close-area {
            background-color: #FDD503;
            border: none;
            font-size: 30px;
            color: #2d2c2c;
            padding: 0;
        }

        .container-popup {
            display: flex;
            padding: 0 10px 20px 10px;
        }

        .left-container {
            margin-left: 30px;
            width: 60%;
        }

        .right-container {
            margin: 2px;
            width: 40%;
            align-content: center;
        }

        .span-bold {
            font-weight: 900;
        }

        .field-heading {
            font-size: 18px;
            display: flex;
            justify-content: space-evenly;
            text-align: center;
        }

        .field-heading p {
            margin-bottom: 5px;
        }

        #input-field, #input-field-email {
            width: -webkit-fill-available;
            height: 50px;
            border: none;
            margin: 8px 0;
            padding: 10px 20px;
        }

        .input-field-checkbox {
            margin-bottom: 15px;
            font-family: math;
        }

        .input-field-signup,
        .input-field-policy {
            margin: 10px 0;
        }

        #newsletter {
            margin-left: 0;
            height: 15px;
            width: 15px
        }

        #button-signup {
            height: 50px;
            width: 100%;
            background-color: black;
            color: white;
            border: none;
            font-family: inherit;
        }

        .input-field-policy {
            text-align: center;
            margin-bottom: 0;
        }

        .privacy-policy {
            font-size: 13px;
            font-family: math;
        }

        .popup-img {
            height: 280px;
            width: 265px;
        }

        #name-error, #email-error, #news-error {
            font-size: 12px;
            margin: 0;
            padding: 10px 0;
            font-weight: bold;
            color: red;
            display: none;
        }

        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            .popup-outer {
                height: 100vh;
                width: 90%;
                z-index: 9999999999;
            }

            #pop-up {
                position: relative;
                top: 50%;
                left: 47%;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -o-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                height: 450px;
                margin: 0 10px;
            }

            #close-btn {
                margin-left: 89%;
            }

            #close-area {
                font-size: 40px;
            }

            .left-container {
                width: 100%;
                margin: 0;
            }

            .field-heading {
                margin-top: 20px;
                font-size: 15px;
            }

            .field-heading p {
                margin: 0 0 20px 0;
                padding: 0;
            }

            #input-field,
            #input-field-email {
                width: -webkit-fill-available;
                height: 30px;
                margin: 15px 0;
                font-size: 15px;
                padding: 5px 10px;
            }

            .input-field-checkbox {
                margin-top: 10px;
                font-family: sans-serif;
            }

            .right-container {
                display: none;
            }

            #name-error, #email-error, #news-error { 
                padding: 0;
            }
        }
        
        `;


// Set the CSS rules for the style element
style.innerHTML = css;

// Append the style to the head of the document
document.head.appendChild(style);

// Append the exit intent pop-up to the body of the document
document.body.appendChild(exitIntentPopup);
document.getElementById('popup-outer').style.display = 'none';

// Add an event listener for mouseout event
document.addEventListener('mouseout', function (e) {
    // If the mouse leaves the viewport from the top
    if (e.clientY <= 0) {
        if (document.cookie.includes('pop-up-cookie')) {
            console.log('Cookie already exists');
            // Cookie 'pop-up-cookie' already exists
        }
        else {
            // Show the exit intent pop-up
            document.getElementById('popup-outer').style.display = 'block';
            document.getElementById('input-field').value = '';
            document.getElementById('input-field-email').value = '';
            document.getElementById('newsletter').value = '';
            document.getElementById('input-field').focus();
        }
    }
});

if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Code to be executed if the user is accessing the website from a mobile device
    console.log('User is accessing the website from a mobile device');

    setTimeout(function () {
        if (document.cookie.includes('pop-up-cookie')) {
            console.log('Cookie already exists');
            // Cookie 'pop-up-cookie' already exists
        } else {
            // Show the exit intent pop-up
            document.getElementById('popup-outer').style.display = 'block';
            document.getElementById('input-field').value = '';
            document.getElementById('input-field-email').value = '';
            document.getElementById('newsletter').checked = false;
            document.getElementById('input-field').focus();
        }
    }, 5000);

}

// Add event listeners for the close and leave buttons
document.getElementById('close-area').addEventListener('click', function () {
    document.getElementById('popup-outer').style.display = 'none';
    console.log("Cookie created !")
    document.cookie = "cookie_name=pop-up-cookie; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    var generatedCookie = document.cookie;
    console.log(generatedCookie);
});

var nameInput = document.querySelector('.input-field-name input');
var emailInput = document.querySelector('.input-field-email input');
var newsletterCheckbox = document.getElementById('newsletter');

document.getElementById('button-signup').addEventListener('click', function (event) {
    event.preventDefault();

    if (document.cookie.includes('pop-up-cookie')) {
        var generatedCookie = document.cookie;
        console.log(generatedCookie); x
        // Cookie 'pop-up-cookie' already exists
    }
    else {
        event.preventDefault();

        // Get the values from the input fields
        var nameValue = nameInput.value.trim();
        var emailValue = emailInput.value.trim();

        document.getElementById('name-error').style.display = 'none';
        document.getElementById('email-error').style.display = 'none';
        document.getElementById('news-error').style.display = 'none';


        // Perform input validation
        if (nameValue === '') {
            // alert('Please enter your name');
            document.getElementById('name-error').style.display = 'block';
        }
        else if (emailValue === '') {
            // alert('Please enter a valid email address');
            document.getElementById('email-error').style.display = 'block';

        }
        else if (!newsletterCheckbox.checked) {
            // alert('Please tick the checkbox');
            document.getElementById('news-error').style.display = 'block';
        }
        else {
            document.cookie = "cookie_name=pop-up-cookie; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
            var generatedCookie = document.cookie;
            console.log('New Cookie Created');
            document.getElementById('popup-outer').style.display = 'none';
        }
    }
});

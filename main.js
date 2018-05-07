// Initialize Firebase
var config = {
  apiKey: "AIzaSyAFMGe8kdZCzCN8ujWq_v8i46L1YLO0hes",
  authDomain: "contactdetails-b5fdf.firebaseapp.com",
  databaseURL: "https://contactdetails-b5fdf.firebaseio.com",
  projectId: "contactdetails-b5fdf",
  storageBucket: "",
  messagingSenderId: "766928529312"
};
firebase.initializeApp(config);

// Reference contacts collection
var contactsRef = firebase.database().ref('contacts');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // get input
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveContact(name, phone, email, message);

  // show alert
  document.querySelector('.alert').style.display = 'block';

  //hide alert
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //clear form data
  document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// save message to firebase
function saveContact(name, phone, email, message){
  var newContactRef = contactsRef.push();
  newContactRef.set({
    name:name,
    phone:phone,
    email:email,
    message:message
  });
}

// init map
function initMap(){

  // map options
  var options = {
    zoom:8,
    center:{lat:-1.2921, lng:36.8219}
  }
  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:-1.2921, lng:36.8219},
    map:map
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>P.Mwangi</h1>'
  });

  marker.addListener('mouseover', function(){
    infoWindow.open(map, marker);
  });
}

// spinner
var myVar = setTimeout(showPage, 3000);

function myFunction() {
    myVar
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

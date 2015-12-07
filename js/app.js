//opening the ride search form
var rideSearch = document.getElementById('find-ride')
var myButton = document.getElementById('search-ride')
myButton.addEventListener('click', function() { rideSearch.className = 'show' })


//showing the about page when navigation link is clicked
var aboutPage = document.getElementById('about-page')
var myButton = document.getElementById('about-nav')
myButton.addEventListener('click', function() { aboutPage.className = 'show' })


//close the about page when arrow is clicked
var aboutButton = document.getElementById('about-page')
var myButton = document.getElementById('close-about')
myButton.addEventListener('click', function() { aboutButton.className = 'hide' })


//open the testimonials container when navigation link is clicked
var getTestimonials = document.getElementById('testimonials-container')
var myButton = document.getElementById('get-testimonials')
myButton.addEventListener('click', function() { getTestimonials.className = 'show' })


//close the testumonials container when arrow is clicked
var testimonialsButton = document.getElementById('testimonials-container')
var myButton = document.getElementById('close-testimonials')
myButton.addEventListener('click', function() { testimonialsButton.className = 'hide' })


//open the create a carpool container when navigation link is clicked
var createPage = document.getElementById('create-hide')
var myButton = document.getElementById('create-nav')
myButton.addEventListener('click', function() { createPage.className = 'show' })


//changing the text on button click when subscribing for newsletter
var myButton=document.getElementById('subscribe-button')
myButton.addEventListener('click', function() {
  var newsClick = document.getElementById('news-well')
  var newText = ('Thanks for subscribing!')
  newsClick.textContent= newText;
})

//change the text in the container after customer creates new carpool
var myButton=document.getElementById('submit')
myButton.addEventListener('click', function() {
  var submitNow = document.getElementById('submit-col')
  var newDiv = ('Thanks for creating an account. We will review your information and be contacting you shortly.')
  submitNow.textContent = newDiv;
})
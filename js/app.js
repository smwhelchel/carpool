var rideSearch = document.getElementById('find-ride')
var myButton = document.getElementById('search-ride')
myButton.addEventListener('click', function() { rideSearch.className = 'show' })

var aboutPage = document.getElementById('about-page')
var myButton = document.getElementById('about-nav')
myButton.addEventListener('click', function() { aboutPage.className = 'show' })

var aboutButton = document.getElementById('about-page')
var myButton = document.getElementById('close-about')
myButton.addEventListener('click', function() { aboutButton.className = 'hide' })

var getTestimonials = document.getElementById('testimonials-container')
var myButton = document.getElementById('get-testimonials')
myButton.addEventListener('click', function() { getTestimonials.className = 'show' })

var testimonialsButton = document.getElementById('testimonials-container')
var myButton = document.getElementById('close-testimonials')
myButton.addEventListener('click', function() { testimonialsButton.className = 'hide' })

var createPage = document.getElementById('create-hide')
var myButton = document.getElementById('create-nav')
myButton.addEventListener('click', function() { createPage.className = 'show' })


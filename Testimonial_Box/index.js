const testimonialsContainer = document.querySelector(".testimonials-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role= document.querySelector(".role")

const testimonials = [
    {
        name: "Angela Roberto",
        position: "Marketing",
        photo:'../Expanding_Cards/images/fruit-salad.webp',
        text: 
        "I've worked with literally hundreds of HTML/CSS developers and I have to say the spot goes to this lady. this lady is an amazing developer. She stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. She goes over and beyound and transforms ART into PIXELS - without a glitch, every time", 
    },
    {
        name: "Sasha Ho",
        position: "Accountant",
        photo: 'http://127.0.0.1:5501/Testimonial_Box/images/kids.png',
        text:
        "This lady is a top notch designer and front end developer. She communicates well, works fast and produces quality work. We have been lucky to work with her",
    },
    {
        name: "Veeti Seppanen",
        position: "Director",
        photo: 'http://localhost:5501/Testimonial_Box/images/nike.jpg',
        text:
        "This lady is a young and talented IT professional, proactive and responsible, with a strong work ethic. She is very strong in PSD2HTML conversions and HTML/CSS technologies. She is focused and has the good dynamics to achieve due dates and outstanding results",
    },
    {
        name: "Gordon Niskanen",
        position: "Data Entry",
        photo: 'http://localhost:5501/Testimonial_Box/images/programmer.jpg',
        text:
        "This lady is a hard worker. Communication was also very good with her and she was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him",
    },
]

let idx = 1

function updateTestimonial() {
    
    const {name, position,photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length- 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)
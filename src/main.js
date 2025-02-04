import './style.css'
import { gsap } from 'gsap';


const testimonial_data = [
  {
    name: 'Alice Johnson',
    rating: 4,
    message: "Peak Fitness transformed my workout routine! The trainers are knowledgeable and really care about your progress. They take the time to personalize each session, and I’ve seen great improvements in my fitness. Highly recommend if you want to reach your goals!"
  },
  {
    name: 'Michael Smith',
    rating: 5,
    message: "I have never felt stronger! The personalized training sessions push me beyond my limits in the best way. The trainers are exceptional, and the atmosphere is motivating. I highly recommend this gym to anyone serious about getting fit!"
  },
  {
    name: 'Sophia Williams',
    rating: 4,
    message: "The atmosphere at Peak Fitness is amazing, and the trainers are so supportive. The group sessions keep me motivated every day, and I feel like I am improving with each workout. It is a great place to work on your fitness goals."
  },
  {
    name: 'David Brown',
    rating: 5,
    message: "I love my experience at Peak Fitness! The Personal Training Package is worth every penny. The trainers personalize each session to fit my goals, and I feel stronger and more energized every day."
  },
  {
    name: 'Emma Davis',
    rating: 3,
    message: "Decent gym, but the scheduling could be better. The trainers are excellent, and the workouts are great. I have seen results, but the timing could be more flexible for me."
  },
  {
    name: 'James Wilson',
    rating: 4,
    message: "If you are looking for real results, this is the place. The trainers are professional, and the community is fantastic. I have seen great improvements in my fitness and look forward to every session."
  },
  {
    name: 'Olivia Martinez',
    rating: 5,
    message: "Joining Peak Fitness was the best decision I made! The personalized training and nutritional guidance helped me reach my goals faster than I expected. The trainers really care about your progress."
  },
  {
    name: 'Daniel Taylor',
    rating: 4,
    message: "I love the workouts at Peak Fitness! The trainers push you to be your best, but in a way that makes you want to keep coming back. I feel stronger with each session and look forward to the next one."
  },
  {
    name: 'Isabella Anderson',
    rating: 4,
    message: "Peak Fitness is an amazing place! The equipment is top-notch, and the trainers are motivating. Whether you are new to fitness or experienced, there is always a challenging workout waiting for you."
  },
  {
    name: 'William Thomas',
    rating: 5,
    message: "I have seen a huge transformation in just a few months! The training programs at Peak Fitness are incredible. My strength has increased, and my energy levels are through the roof. I could not be happier with my results."
  }
];

const animation_duration = 70 // Increase this value to slow down the animation

document.addEventListener('DOMContentLoaded', () => {
  let testimonialLists = document.querySelectorAll('.testimonial-list');


  const testimonialsHTML = testimonial_data.map(testimonial => `
  <li class="testimonial-card">
    <div class="testimonial-header">
      <h2>${testimonial.name}</h2>
      <div class="stars">
        ${'<img src="/star.svg" alt="star">'.repeat(testimonial.rating)}
      </div>
    </div>
    <p>"${testimonial.message}"</p>
  </li>
`).join('');

  testimonialLists.forEach(testimonials => {
    testimonials.innerHTML = testimonialsHTML.repeat(3);
  });



  const row1 = document.querySelector('.testimonial-list-1');
  const row2 = document.querySelector('.testimonial-list-2');

  const anim1 = gsap.to(row1, {
    x: '-50%',
    duration: animation_duration,
    repeat: -1,
    ease: 'linear'
  });

  const anim2 = gsap.to(row2, {
    x: '50%',
    duration: animation_duration,
    repeat: -1,
    ease: 'linear'
  });

  row1.addEventListener('mouseenter', function () {
    anim1.timeScale(0.3);
  });

  row1.addEventListener('mouseleave', function () {
    anim1.timeScale(1);
  });

  row2.addEventListener('mouseenter', function () {
    anim2.timeScale(0.3);
  });

  row2.addEventListener('mouseleave', function () {
    anim2.timeScale(1);
  });
});
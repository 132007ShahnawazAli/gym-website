import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


const testimonial_data = [
  {
    name: 'Alice Johnson',
    rating: 4,
    message: "Peak Fitness transformed my workout routine! The trainers are knowledgeable and really care about your progress. They take the time to personalize each session, and I've seen great improvements in my fitness."
  },
  {
    name: 'Michael Smith',
    rating: 5,
    message: "I have never felt stronger! The personalized training sessions push me beyond my limits in the best way. The trainers are exceptional, and the atmosphere is motivating."
  },
  {
    name: 'Sophia Williams',
    rating: 4,
    message: "The atmosphere at Peak Fitness is amazing, and the trainers are so supportive. The group sessions keep me motivated every day, and I feel like I am improving with each workout."
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

  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  if (mediaQuery.matches) {
    const service_cards = document.querySelectorAll('.service-cards');
    const service_card = document.querySelectorAll('.service-card');
    const service_content = document.querySelectorAll('.service-content');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.service-section',
        height: 'auto',
        pin: true,
        start: 'top 5%',
        end: 'bottom 70%',
        scrub: 1,
        ease: 'linear',
        onUpdate: () => {
          const serviceSection = document.querySelector('.service-section');
          serviceSection.style.height = `${service_cards.scrollHeight}px`;
        }
      }
    });

    tl.to(service_content, {
      height: 0,
      opacity: 0,
      stagger: {
        each: 0.5,
        from: 0,
        grid: "auto",
        ease: "power1.inOut",
        onComplete: function () {
          const lastCard = service_card[service_card.length - 1];
          gsap.set(lastCard, {
            height: 'auto',
            opacity: '1',
          });
        }
      },
      onUpdate: () => {
        const serviceSection = document.querySelector('.service-section');
        serviceSection.style.height = `${service_cards.scrollHeight}px`;
      }
    });

    tl.to(service_card, {
      marginBottom: 0,
      borderBottom: 'none',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      stagger: {
        each: 0.5,
        from: 0,
        grid: "auto",
        ease: "power1.inOut",
        onComplete: function () {
          const lastCard = service_card[service_card.length - 1];
          gsap.set(lastCard, {
            marginBottom: '',
            borderBottom: '',
            borderBottomLeftRadius: '',
            borderBottomRightRadius: '',
            height: 'auto',
            opacity: 1,
          });
        }
      },
      onUpdate: () => {
        const serviceSection = document.querySelector('.service-section');
        serviceSection.style.height = `${service_cards.scrollHeight}px`;
      }
    }, '<');
  }
});
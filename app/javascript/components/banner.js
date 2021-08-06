import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["You can add a movie list", "And you can add movies to the lists", "It's awesome!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

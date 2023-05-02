# Clock app

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM).

Check out my other solutions on Frontend Mentor at [@kaseyvee](https://www.frontendmentor.io/profile/kaseyvee) or [frontend-mentor-challenges](https://github.com/kaseyvee/frontend-mentor-challenges).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshots

#### Desktop View
![Desktop view](https://i.imgur.com/qEdkhND.png)

#### Mobile View
<p float="left">
  <img src="https://i.imgur.com/h7cichJ.png" alt="Mobile view" width="305">
  <img src="https://i.imgur.com/zg8DTHd.png" alt="Mobile view with details expanded" width="305">
</p>

### Built with

- [React](https://reactjs.org/) - JS library
- Framer Motion - React animation library
- react-moment - React date library
- Axios
- Sass
- Flexbox
- Mobile-first workflow
- [Programming Quotes API](https://github.com/lukePeavey/quotable)
- [World Time API](http://worldtimeapi.org/)
- [IP Geolocation API](https://freegeoip.app/)

### What I learned

I took this opportunity to get familiar with using React's useContext hook. I've used it in the past in a larger project- only implementing it in the end which turned out to be a nightmare. Haven't gone back to it since because of that but decided I should tackle it sooner rather than later if I ever want to try using Redux in the future.

Prop drilling sucks and this is the answer. It ended up being much simpler than I remember and made for much cleaner code.

This is also my first time with FEM premium- and man was setup fast with the given Figma files. This saved me so much time as it allowed me to create my own utility classes and removed the time it would have taken me to guess font sizes.
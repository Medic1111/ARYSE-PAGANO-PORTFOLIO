// MARIO ASSETS
import Mario from "../public/Mario/mario.png";

// MONSTERA ASSETS:
import Monstera from "../public/Monstera/monstera.png";

// MY PORTAL ASSETS:
import MyPortal from "../public/MyPortal/myPortal.png";

// HANDS ONLY
import HandsOnly from "../public/HandsOnly/handsOnly.png";

// FOOD-QR
import FoodQr from "../public/FoodQr/app.png";

//PORTAL-ZONE
import Zone from "../public/PortalZone/zone.png";

// MOOVEES
import Moovees from "../public/Moovees/moovee2.png";

import CryptoImg from "../public/Cryptaware/crypto.png";
// CHANGE

import Change from "../public/Change/1.png";
//

// NOMAD
import Nomad from "../public/Nomad/posts.png";

// PAYBACK
import Payback from "../public/Payback/home.png";
const projData = [
  {
    path: "Nomad-me",
    url: "https://nomad-me-v3.onrender.com/",
    name: "Nomad-me",
    repo: "https://github.com/Medic1111/NOMAD-ME-NO-TS",
    tech: "React, NodeJS, Express, MongoDB, Render, Jest, Super Test ",
    description:
      "A travel style social media application contained to remain a non-toxic environment, with light-hearted feedback on user's activities. Refactor version from a 6-week Chingu.io program, saving over 60% additions/deletions while adding extra features and security.",
    img1: Nomad,
  },
  {
    path: "PayBack App",
    url: "https://paybackapp.onrender.com/",
    name: "payback-app",
    repo: "https://github.com/jackieodonnell/PayBack-App",
    tech: "React, TypeScript, NodeJS, Express, MongoDB, Render, Jest, Super Test ",
    description:
      "GDI 2022 Hackathon award winner loan tracker application. Registered users may make borrow requests to another user, who will approve or deny it. If approved, the transaction gets tracked until paid-off. This is the MVP refactored version of the original delivered concept which was incomplete",
    img1: Payback,
  },
  {
    path: "Food-QR",
    url: "https://food-qr.onrender.com/",
    name: "Food-QR",
    repo: "https://github.com/Medic1111/FOOD-QR-FULL-STACK-TS",
    tech: "React, TypeScript, NodeJS, Express, MongoDB, Render ",
    description:
      "Full stack app that allows a food establishment to create a standardized online menu, and generates a QR Code that can be printed or downloaded enabling touchless menu visualization.",
    img1: FoodQr,
  },
  {
    path: "CRYPTAWARE",
    url: "https://cryptaware-u94a.onrender.com/",
    name: "Cryptaware",
    repo: "https://github.com/Medic1111/CRYPTAWARE-FULLSTACK-TS",
    tech: "React, TypeScript, NodeJS, Express, MongoDB, Render, Alphavantage API ",
    description:
      "Crypto-currency tracker build with React in Typescript. User may search for the intraday data for crypto-currencies of choice, bookmark favorites, and access latest news.",
    img1: CryptoImg,
  },
  {
    path: "Portal-zone",
    url: "https://portal-zone.onrender.com/",
    name: "Portal-zone",
    repo: "https://github.com/Medic1111/my-portal-v2",
    tech: "React, NodeJS, Express, MongoDB, bcrypt, socket.io, Heroku ",
    description:
      "Academic app that allows a registered mentor to create a class for which a key is generated. A student with access to that key may enroll and gain reading access to assignments posted by the teacher, as well as engage in real time chat in that particular class. ",
    img1: Zone,
  },
  // {
  //   path: "MOOVEES",
  //   url: "https://moovees-app.herokuapp.com/",
  //   name: "MOOVEES",
  //   repo: "https://github.com/Medic1111/MOOVEES-APP",
  //   tech: "React, NodeJS, Express, MongoDB, Render, imdb API, Jest",
  //   description:
  //     "TEST: username and password: testuser; Full stack movie tracker application that allows a registered user to search for movies and tv shows, and organize them into personal lists.",
  //   img1: Moovees,
  // },

  {
    path: "monstera",
    repo: "https://github.com/Medic1111/Monstera-MERN-STRIPE",
    url: "https://monstera-shop.herokuapp.com/",
    name: "Monstera",
    tech: "ReactJS, Redux, NodeJS, Express, Stripe API",
    description:
      "To Test: {cardNumber: 4242 4242 4242 4242, ExDate: 0424, CVC: 242, ZIP: 42424}; Minimalist shop experience for Monstera plant lovers. Built with React, state managed with Redux, payments with Stripe API",
    img1: Monstera,
  },
];

export default projData;

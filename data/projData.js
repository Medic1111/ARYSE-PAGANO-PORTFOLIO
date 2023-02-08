// FOOD-QR
import FoodQr from "../public/FoodQr/app.png";

//PORTAL-ZONE
import Zone from "../public/PortalZone/zone.png";

// CRYPTO
import CryptoImg from "../public/Cryptaware/crypto.png";

// NOMAD
import Nomad from "../public/Nomad/posts.png";

// PAYBACK
import Payback from "../public/Payback/home.png";

// m11
import M11 from "../public/M11/m11.png";

const projData = [
  {
    path: "m11-studio",
    url: "https://m11-n5ne.onrender.com/",
    name: "m11-studio",
    repo: "https://github.com/Medic1111/M11-STUDIO-REDUX",
    tech: "React/VITE, React-Redux, Redux Toolkit, Stripe, Twilio's Sendgrid, Nodemailer, NodeJS, Express, MongoDB",
    description:
      "Minimalist E-commerce for wall/street art lovers. A register user will experience a fun UI and engaging UX. The user is able to manage his/her cart and checkout to pay with a credit card, for which email notifications are sent.",
    img1: M11,
  },
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
];

export default projData;

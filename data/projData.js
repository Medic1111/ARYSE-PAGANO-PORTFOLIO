// MARIO ASSETS
import Mario from "../public/Mario/mario.png";

// DEEP SINK ASSETS:
// import DeepSink from "../public/DeepSink/deepSink.png";

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

//
const projData = [
  {
    path: "Portal-zone",
    url: "https://portal-zone.herokuapp.com/",
    name: "Portal-zone",
    repo: "https://github.com/Medic1111/my-portal-v2",
    tech: "React, NodeJS, Express, MongoDB, bcrypt, socket.io, Heroku ",
    description:
      "Full stack app that allows a registered mentor to create a class for which a key is generated. A student with access to that key may enroll and gain reading access to assignments posted by the teacher, as well as engage in real time chat in that particular class. Front end React, chat is possible via Socket.IO, backend with NodeJs, Express, bcrypt for security, and finally, mongoDB for database",
    img1: Zone,
  },

  {
    path: "Food-QR",
    url: "https://food-qr.herokuapp.com/",
    name: "Food-QR",
    repo: "https://github.com/Medic1111/food-QR",
    tech: "React, NodeJS, Express, MongoDB, Heroku ",
    description:
      "Full stack app that allows a food establishment to create an online menu, and generates a QR Code that can be used to enable touchless menu visualization. Created with React, state managed via Context, backend with NodeJs and Express, and mongoDB for database.",
    img1: FoodQr,
  },
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
  {
    path: "My Portal",
    url: "https://testing-portal-api.herokuapp.com/",
    name: "My Portal",
    repo: "https://github.com/Medic1111/my-portal",
    tech: "React, Redux, NodeJS, Express, MongoDB, BCRYPT, Heroku ",
    description:
      "To Test: {StudentId: 123456, Password: 123456};  Student portal where you can add your classes and track assignments and grades. Created with Create-React-App with State management via React-Redux and Redux-Toolkit. NodeJS backend with express server and mongoDB for database. Password Hashed and salted with Bcrypt.",
    img1: MyPortal,
  },
  {
    path: "hands-only",
    repo: "https://github.com/Medic1111/hands-only",
    url: "https://hands-only.herokuapp.com/",
    name: "Hands-Only",
    tech: "ReactJS, NodeJS, Express, MailChimp API, MongoDB",
    description:
      "To Test: {answers: c-b-c-a-c-a-b-c-a}; App created to boots efforts of helping peolple to provide hands-only CPR in case of cardiac-arrest. Quiz style with 9 explanations and questions which at the end allows for newsletter subscription. Front end done with React, state management via useContext hook, NodeJS back end with express server and MongoDB for database. MailChimp API integration for newsletter campaign.",
    img1: HandsOnly,
  },

  // {
  //   path: "deepsink",
  //   repo: "https://github.com/Medic1111/DeepSink-React-Context",
  //   url: "https://deepsink-133ff.web.app/",
  //   name: "Deep Sink",
  //   tech: "CSS, ReactJS",
  //   description:
  //     "React app selling scubadives, front end only, with state management via the useContext() hook. Other relevant approches include using portals for SEO and wrappers to maintain a cleaner code.",
  //   images: [DeepSink, DeepSinkCode1, DeepSinkCode2, DeepSinkCode3],

  //   img1: DeepSink,
  //   codeOne: DeepSinkCode1,
  //   codeTwo: DeepSinkCode2,
  //   codeThree: DeepSinkCode3,
  // },

  {
    path: "mario",
    repo: "https://github.com/Medic1111/Mario-Smack",
    url: "https://mario-whack.netlify.app/",
    name: "Mario Whack",
    tech: "HTML, CSS, JS",
    description:
      "Don't add this to your portfolio, they said. When learning web development, one of the common projects to tackle is the boring 'Whack a mole' game. I was never a fan of it and skipped it. Then, I was able to move a button. Literally, move a button at key press. That gave me a sense of 'Anything is possible' and along came my desktop version of whack a mole. Deciding to add it to my portfolio is based on my belief of 'you cannot forget where you started'. It's also the reason why I left the code UNTOUCHED, exactly as it was on my 3rd week of learning JS. Note: Nintendo owns everything related to Mario Bros. I'm just a fan of the plumber.",

    img1: Mario,
  },
];

export default projData;

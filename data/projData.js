// MARIO ASSETS
import Mario from "../public/Mario/mario.png";
import Mcode1 from "../public/Mario/codeOne.png";
import Mcode2 from "../public/Mario/codeTwo.png";
import Mcode3 from "../public/Mario/codeThree.png";

//DEEP SINK ASSETS:
// import DeepSink from "../public/DeepSink/deepSink.png";
// import DeepSinkCode1 from "../public/DeepSink/codeTwo.png";
// import DeepSinkCode2 from "../public/DeepSink/codeOne.png";
// import DeepSinkCode3 from "../public/DeepSink/codeThree.png";

// MONSTERA ASSETS:

import Monstera from "../public/Monstera/monstera.png";
import MonsteraCodeOne from "../public/Monstera/codeOne.png";
import MonsteraCodeTwo from "../public/Monstera/codeTwo.png";
import MonsteraCodeThree from "../public/Monstera/codeThree.png";

// MY PORTAL ASSETS:
import MyPortal from "../public/MyPortal/myPortal.png";
import MyPortalCodeOne from "../public/MyPortal/codeOne.png";
import MyPortalCodeTwo from "../public/MyPortal/codeTwo.png";
import MyPortalCodeThree from "../public/MyPortal/codeThree.png";

// HANDS ONLY

import HandsOnly from "../public/HandsOnly/handsOnly.png";

//
const projData = [
  {
    path: "My Portal",
    url: "https://testing-portal-api.herokuapp.com/",
    name: "My Portal",
    repo: "https://github.com/Medic1111/my-portal",
    tech: "React, Redux, NodeJS, Express, MongoDB, BCRYPT, Heroku ",
    description:
      "To Test: {StudentId: 123456, Password: 123456};  Student portal where you can add your classes and track assignments and grades. Created with Create-React-App with State management via React-Redux and Redux-Toolkit. NodeJS backend with express server and mongoDB for database. Password Hashed and salted with Bcrypt.",
    images: [MyPortal, MyPortalCodeOne, MyPortalCodeTwo, MyPortalCodeThree],
    img1: MyPortal,
    codeOne: MyPortalCodeOne,
    codeTwo: MyPortalCodeTwo,
    codeThree: MyPortalCodeThree,
  },
  {
    path: "monstera",
    repo: "https://github.com/Medic1111/Monstera-MERN-STRIPE",
    url: "https://monstera-shop.herokuapp.com/",
    name: "Monstera",
    tech: "ReactJS, Redux, NodeJS, Express, Stripe API",
    description:
      "To Test: {cardNumber: 4242 4242 4242 4242, ExDate: 0424, CVC: 242, ZIP: 42424}; Minimalist shop experience for Monstera plant lovers. Built with React, state managed with Redux, payments with Stripe API",
    images: [Monstera, MonsteraCodeOne, MonsteraCodeTwo, MonsteraCodeThree],
    img1: Monstera,
    codeOne: MonsteraCodeOne,
    codeTwo: MonsteraCodeTwo,
    codeThree: MonsteraCodeThree,
  },
  {
    path: "hands-only",
    repo: "https://github.com/Medic1111/hands-only",
    url: "https://hands-only.herokuapp.com/",
    name: "Hands-Only",
    tech: "ReactJS, NodeJS, Express, MailChimp API, MongoDB",
    description:
      "To Test: {answers: c-b-c-a-c-a-b-c-a}; App created to boots efforts of helping peolple to provide hands-only CPR in case of cardiac-arrest. Quiz style with 9 explanations and questions which at the end allows for newsletter subscription. Front end done with React, state management via useContext hook, NodeJS back end with express server and MongoDB for database. MailChimp API integration for newsletter campaign.",
    images: [HandsOnly],
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
    images: [Mario],

    img1: Mario,
    codeOne: Mcode1,
    codeTwo: Mcode2,
    codeThree: Mcode3,
  },
];

export default projData;

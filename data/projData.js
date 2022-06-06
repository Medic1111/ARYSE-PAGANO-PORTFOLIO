// MARIO ASSETS
// import Mario from "../public/Mario/mario.png";
// import Mcode1 from "../public/Mario/codeOne.png";
// import Mcode2 from "../public/Mario/codeTwo.png";
// import Mcode3 from "../public/Mario/codeThree.png";

// BLOG ASSETS
import Blog from "../public/Blog/Blog.png";
import Bcode1 from "../public/Blog/codeOne.png";
import Bcode2 from "../public/Blog/codeTwo.png";
import Bcode3 from "../public/Blog/codeThree.png";
//CARMEN ASSETS
// import Carmen from "../public/Carmen/Carmen.png";
// import Ccode1 from "../public/Carmen/codeOne.png";
// import Ccode2 from "../public/Carmen/codeTwo.png";
// import Ccode3 from "../public/Carmen/codeThree.png";

//POSTZONE ASSETS
// import PostZone from "../public/Postzone/PostZone.png";
// import Pcode1 from "../public/Postzone/codeOne.png";
// import Pcode2 from "../public/Postzone/codeTwo.png";
// import Pcode3 from "../public/Postzone/codeThree.png";

// SHOP ASSETS
// import Shop from "../public/Shop/Shop.png";
// import Scode1 from "../public/Shop/codeOne.png";
// import Scode2 from "../public/Shop/codeTwo.png";
// import Scode3 from "../public/Shop/codeFour.png";

// POSTMATE ASSETS
import PostMate from "../public/PostMate/postMate.png";
import PostCode1 from "../public/PostMate/codeOne.png";
import PostCode2 from "../public/PostMate/codeTwo.png";
import PostCode3 from "../public/PostMate/codeThree.png";

// INTERNATIONIZE ASSETS
// import Internationize from "../public/Internationize/internationize.png";
// import InterCode1 from "../public/Internationize/codeOne.png";
// import InterCode2 from "../public/Internationize/codeThree.png";
// import InterCode3 from "../public/Internationize/codeTwo.png";

// MAGENDA ASSETS:
// import Magenda from "../public/Magenda/Magenda.png";
// import MagendaCode1 from "../public/Magenda/codeOne.png";
// import MagendaCode2 from "../public/Magenda/codeTwo.png";
// import MagendaCode3 from "../public/Magenda/codeThree.png";

//DEEP SINK ASSETS:
import DeepSink from "../public/DeepSink/deepSink.png";
import DeepSinkCode1 from "../public/DeepSink/codeTwo.png";
import DeepSinkCode2 from "../public/DeepSink/codeOne.png";
import DeepSinkCode3 from "../public/DeepSink/codeThree.png";

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

//
const projData = [
  {
    path: "My Portal",
    url: "https://myschool-portal.web.app/",
    name: "My Portal",
    repo: "https://github.com/Medic1111/my-portal",
    tech: "React, React-Redux",
    description:
      "To Test: {StudentId: 1234, Password: 4321}; Front-end skills display application for students to keep track of their classes, grades, and assignments. Created with Create-React-App with State management via React-Redux and Redux-Toolkit.",
    images: [MyPortal, MyPortalCodeOne, MyPortalCodeTwo, MyPortalCodeThree],
    img1: MyPortal,
    codeOne: MyPortalCodeOne,
    codeTwo: MyPortalCodeTwo,
    codeThree: MyPortalCodeThree,
  },
  {
    path: "opiniomate",
    url: "https://opiniomate.herokuapp.com/",
    repo: "https://github.com/Medic1111/OpinionMate-News-EJS",
    name: "OpinioMate",
    tech: "News API, EJS, Passport, Express-session, NodeJS, Express, MongoDB",
    description:
      "To Test: {email: test@test.com, password: test};  Less focus on UI, more focus on implementing different skills. Backend App that consumes News API rendering the latest news heading. The user creates an account for which Passport is being used, and is logged in where all users get opinionate in regards the topic. The session is being managed by express-session. Passwords are hashed and salted with passport. Templating happens with EJS and data persists with MongoDB via Atlas.",
    images: [PostMate, PostCode1, PostCode2, PostCode3],
    img1: PostMate,
    codeOne: PostCode1,
    codeTwo: PostCode2,
    codeThree: PostCode3,
  },
  {
    path: "deepsink",
    repo: "https://github.com/Medic1111/DeepSink-React-Context",
    url: "https://deepsink-133ff.web.app/",
    name: "Deep Sink",
    tech: "CSS, ReactJS",
    description:
      "React app selling scubadives, front end only, with state management via the useContext() hook. Other relevant approches include using portals for SEO and wrappers to maintain a cleaner code.",
    images: [DeepSink, DeepSinkCode1, DeepSinkCode2, DeepSinkCode3],

    img1: DeepSink,
    codeOne: DeepSinkCode1,
    codeTwo: DeepSinkCode2,
    codeThree: DeepSinkCode3,
  },
  {
    path: "monstera",
    repo: "https://github.com/Medic1111/Monstera-Redux",

    url: "https://monstera-shop.web.app/",
    name: "Monstera",
    tech: "CSS, ReactJS, React-Redux, Redux-Toolkit",
    description:
      "Straight forward display of state management via React-Redux, along with Redux-toolkit. Created with create-react-app, styled with css. Modals are set within ReactDOM Portals to respect SEO.",
    images: [Monstera, MonsteraCodeOne, MonsteraCodeTwo, MonsteraCodeThree],

    img1: Monstera,
    codeOne: MonsteraCodeOne,
    codeTwo: MonsteraCodeTwo,
    codeThree: MonsteraCodeThree,
  },

  {
    path: "blog",
    repo: "https://github.com/Medic1111/Blog_EJS",
    url: "https://crud-blog-medic.herokuapp.com/",
    name: "Opinionate",
    tech: "EJS, NodeJS, Express, MongoDB, Mongoose, MongoDB Atlas",
    description:
      "Backend dynamically served Blog style project. Templated with EJS, allows for administration editing utilizing CRUD, and data persists via MongoDB and its wonders.",
    images: [Blog, Bcode1, Bcode2, Bcode3],

    img1: Blog,
    codeOne: Bcode1,
    codeTwo: Bcode2,
    codeThree: Bcode3,
  },

  // {
  //   path: "internationize",
  //   url: "https://internationize.netlify.app/",
  //   name: "Internationize",
  //   tech: "html, js, css, xmlhttp",
  //   description:
  //     "Cool little app that provides basic information about different countries, and consumes API the oldschool way: XMLHTTP",
  //   img1: Internationize,
  //   codeOne: InterCode1,
  //   codeTwo: InterCode2,
  //   codeThree: InterCode3,
  // },

  // {
  //   path: "mario",
  //   url: "https://mario-whack.netlify.app/",
  //   name: "Mario Whack",
  //   tech: "HTML, CSS, JS",
  //   description:
  //     "When learning web development, one of the common projects to tackle while learning JS is the 'Whack a mole' game. I was never a fan of it and was not excited to attempt that project, until I was able to move a button. Literally, move a button at key press. That gave me a sense of 'Anything is possible' and along came my desktop version of whack a mole. A lot more fun too. Note: Nintendo owns everything related to Mario Bros. I'm just a fan of the plumber.",
  //   img1: Mario,
  //   codeOne: Mcode1,
  //   codeTwo: Mcode2,
  //   codeThree: Mcode3,
  // },
  // {
  //   path: "carmen",
  //   url: "https://carmen-santiago.netlify.app/",
  //   name: "Carmen Santiago",
  //   tech: "html, js, css",
  //   description:
  //     "Oh man, I hope you had the pleasure to play the oldschool infamous Carmen Sandiego PC game! Miss it? Mine isn't as cool but it was a total throwback doing it. Great sense of accomplishment as this was done for my 2 month mark on my web-dev learning journey. Can you catch her? PS: Spoiler... you cannot.",
  //   img1: Carmen,
  //   codeOne: Ccode1,
  //   codeTwo: Ccode2,
  //   codeThree: Ccode3,
  // },
  // {
  //   path: "shop",
  //   name: "DaZZone",
  //   tech: "ReactJS, NodeJS, CSS, Express, MongoDB",
  //   description:
  //     "Full stack objective project using ReactJS to display React Hooks skills. Back End embraces NodeJS, Express, and MongoDB.",
  //   img1: Shop,
  //   codeOne: Scode1,
  //   codeTwo: Scode2,
  //   codeThree: Scode3,
  // },
  // {
  //   path: "postzone",
  //   name: "PostZone",
  //   tech: "CSS, ReactJS, MongoDB, NodeJS, Express",
  //   description:
  //     "Mock of a social profile page using the MERN stack allowing for CRUD operations.",
  //   img1: PostZone,
  //   codeOne: Pcode1,
  //   codeTwo: Pcode2,
  //   codeThree: Pcode3,
  // },

  // {
  //   path: "magenda",
  //   name: "Magenda",
  //   tech: "CSS, ReactJS, NodeJS, Express, MongoDB: (MERN)",
  //   description:
  //     "Learning CRUD is fun... Learning React... not so much. Considering I already had back-end and Mongo knowledge when I decided to learn react, implementing them together made the projects a lot more fun to develop. This is a simple and objective example of CRUD using MERN",
  //   img1: Magenda,
  //   codeOne: MagendaCode1,
  //   codeTwo: MagendaCode2,
  //   codeThree: MagendaCode3,
  // },
];

export default projData;

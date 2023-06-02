import { ICONS } from "../icons/icons";
import { CONSTANTS_IMAGES } from "../image-constants/image-constants";

export const CONSTANTS_DATA = {
  name: "Hello, I'm Siddharth Jain",
  describe: getDescription(),
  youtube_name: "Welcome to Codemadness,",
  youtube_description:
    " where coding, gaming, and laughter collide! Join me on a mad journey filled with hilarious shorts, coding tutorials, gaming madness, and lipsync shenanigans. Unleash the laughter with quick and quirky videos, learn and giggle through coding challenges, and dive into epic gaming sessions. Experience the  joy of lipsyncing with humor and style. Stay connected on  Instagram, Twitter, GitHub, Facebook, and Josh fo  behind-the-scenes peeks and exclusive content. Get ready for a  rollercoaster ride of laughter, coding adventures, gaming   thrills, and pure entertainment at Codemadness!",
  youtube_channel_link:
    "https://www.youtube.com/channel/UCqQuGOxGE8m7QkupTf9vm2A",
};

function getDescription() {
  const experienceStartDate = new Date(2021, 9, 6); // Month value starts from 0 (e.g., 5 represents June)
  const currentDate = new Date();
  const yearDiff =
    currentDate.getFullYear() - experienceStartDate.getFullYear();
  const monthDiff = currentDate.getMonth() - experienceStartDate.getMonth();
  const totalMonths = yearDiff * 12 + monthDiff;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `A passionate Software Engineer with ${years}.${months} years of industry experience. I hold a BCA degree and have a strong background in designing and developing innovative software solutions. Proficient in technologies like Javascript, React Native, React.js, Node.js, and Rest API, I am dedicated to delivering high-quality code and thrive in collaborative, cross-functional teams. Committed to continuous learning and staying up-to-date with the latest industry trends, I am excited to showcase my skills and contribute to impactful projects. Welcome to my portfolio website!`;
}

console.log(CONSTANTS_DATA.describe);

export const socialData = [
  {
    link: "https://github.com/jsidd06",
    icon: ICONS.git,
  },
  {
    link: "https://www.facebook.com/sidd.jain.90",
    icon: ICONS.fb,
  },
  {
    link: "https://twitter.com/codesiddharth",
    icon: ICONS.tw,
  },
  {
    link: "https://www.youtube.com/channel/UCqQuGOxGE8m7QkupTf9vm2A",
    icon: ICONS.yt,
  },
  {
    link: "https://www.linkedin.com/in/contact-siddharth-jain/",
    icon: ICONS.ln,
  },
];

export const language = [
  {
    languages: ["English", "Hindi", "Punjabi."],
  },
];

export const hobbies = [
  {
    hobbies: [
      "Coding",
      "Cricket",
      "Football",
      "Skating",
      "Badminton",
      "Chess.",
    ],
  },
];

export const education = [
  {
    college: "B.C.A.",
    school: ["12th class", " 10th class."],
    extra_course: [
      "Web development",
      "Hi-Tech",
      "Digital Marketing",
      "Network computer education",
      "CCC [Course on Computer concepts]",
      "American English Speaking",
      "SAS Training [Success After Success]",
      "HDFC Life",
      "BPO.",
    ],
  },
];

export const skills = [
  {
    languages: [
      "React.js",
      "React Native",
      "Typescript",
      "Rest API",
      "Node.js",
      "Mongo DB",
      "Jquery",
      "JavaScript",
      "Github Version control",
      "HTML5",
      "CSS",
      "C.",
    ],
    extraSkills: [
      "WordsPress",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Power Point",
      "Paint",
      "Linux",
      "Window 11",
      "CoralDraw.",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "TEAM X",
    duration: "05/2023-Present",
    role: "Fronted Developer",
    project_name: ["Game Zone"],
    technologies: ["React Native", "React.js", "Rest API"],
  },
  {
    id: 2,
    company: "DANK GLOBAL",
    duration: "02/2023-05/2023",
    role: "Fronted Developer",
    project_name: ["DANK GLOBAL APP PROJECT.", " JOIN DANK WEB PROJECT."],
    technologies: ["Typescript", "React Native", "React.js", "Rest API"],
  },
  {
    id: 3,
    company: "AARA TECHNOLOGY PVT.LTD",
    duration: " 07/2022-01/2023",
    role: "Web Designer",
    project_name: [
      "MY BILL WALLET APP PROJECT.",
      "POS WEB PROJECT.",
      "PORTAL WEB PROJECT.",
    ],
    technologies: ["React.js", "React Native", "Rest API"],
  },
  {
    id: 4,
    company: "QWERTY CODE PVT.LTD",
    duration: "05/2022-07/2022",
    role: "React Native Developer",
    project_name: ["BAAP NETWORK PROJECT."],
    technologies: ["React Native", "Rest API"],
  },
  {
    id: 5,
    company: "WONDER PILLARS TECHNOLOGY PVT.LTD ",
    duration: "09/2021-04/2022",
    role: "Software Developer",
    project_name: [
      "FIXCEL PROJECT.",
      "STOCK HISAB PROJECT.",
      "VANTAAN TAXI PROJECT",
    ],
    technologies: ["React.js", "Rest API", "JavaScript", "HTML5", "CSS"],
  },
];

export const MODAL_CONSTANT_DATA = [
  {
    id: 1,
    buttonText: "Experience",
    heading: "Experience",
    image: CONSTANTS_IMAGES.expImg,
  },
  {
    id: 2,
    buttonText: "Skills",
    heading: "Skills",
    image: CONSTANTS_IMAGES.skillImg,
  },
  {
    id: 3,
    buttonText: "Education",
    heading: "Education",
    description: "sfgsjkdfhskfhsk",
    image: CONSTANTS_IMAGES.educImg,
  },
  {
    id: 4,
    buttonText: "Hobbies",
    heading: "Hobbies",
    description: "sfgsjkdfhskfhsk",
    image: CONSTANTS_IMAGES.hobImg,
  },
  {
    id: 5,
    buttonText: "Languages",
    heading: "Languages",
    description: "sfgsjkdfhskfhsk",
    image: CONSTANTS_IMAGES.lanImg,
  },
];

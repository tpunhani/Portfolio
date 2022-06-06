/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Tarun Punhani",
  title: "Hi all, I'm Tarun",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and 2D games with Unity."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1siWkQamvNGIblWAHi0ngyCsrfVKy_PM3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tpunhani",
  linkedin: "https://www.linkedin.com/in/tpunhani/",
  gmail: "tpunhani@gmail.com",
  gamesite: "https://play.google.com/store/apps/details?id=com.tarunapps.runnybunny&hl=en_US&gl=US",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Currently doing my Master's in Computer Science from the University of Texas at Dallas.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications using React"
    ),
    emoji("⚡ Develop highly scalable and low latency REST services with Java and Spring boot."),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Dallas",
      logo: require("./assets/images/utd-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2021 - Dec 2022",
      desc: "In intelligent system track and took courses about Machine Learning, Natural Language processing, Web Development, Databases etc.",
      descBullets: [
        "Worked on Dating website as part of Web Development course in react and nodejs.",
        "Learned Virtual Reality game development with Oculus using Unity software."
      ]
    },
    {
      schoolName: "Dr. Akhilesh Das Gupta Institute of Technology & Management",
      logo: require("./assets/images/niec-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2010 - June 2014",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems etc.",
      descBullets: ["Developed official Android application for the college as part of Major project in the final semester."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Front End",
      progressPercentage: "30%"
    },
    {
      Stack: "Game Development",
      progressPercentage: "25%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Axxess",
      companylogo: require("./assets/images/axxess.png"),
      date: "Jan 2022 – Present",
      desc: "Working as a Software Engineer Intern in Axxess Homecare team.",
      descBullets: [
        "Extended key features and supported production bug fixes in a large user-base Axxess Home Care solution application (C#, .NET, SQL).",
        "Suggested improvements based on Kibana production logs and resolved Null Pointer exceptions."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Times Internet",
      companylogo: require("./assets/images/timesLogo.png"),
      date: "Sept 2020 – Jan 2021",
      descBullets: [
        "Implemented Back-end services with Node.js. Successful products include Club posts and daily posts for Longwalks journaling application (Javascript, Neo4j, elasticsearch).",
        "Created and maintained fully automated CI/CD pipeline for code deployments in Jenkins to reduce extra effort and saved around 30% of the time.",
        "Analyzed reports on user ratings and implemented new experiences based on real time customer feed backs."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Wynk Ltd",
      companylogo: require("./assets/images/wynkLogo.jpeg"),
      date: "Nov 2018 – Aug 2020",
      descBullets: [
        "Maintained and extended key functionalities of large-scale Music application. Millions of users consume and services operate at very high rates with very high reliability and very low latency. (Java, REST, Cassandra, SQL).",
        "Built and maintained high-performance, highly-scalable microservices allowing users to activate and deactivate HelloTunes.",
        "Developed end to end functional testing framework with Spring MVC framework to improve efficiency and saved 50% of the time.",
        "Supported Wynk Music Web application development UI using React and bootstrap.",
        "Involved in functional requirements review, suggested enhancements to improve quality based on production tickets."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/runnybunny.jpeg"),
      projectName: "Runny Bunny Android 2D Game",
      projectDesc: "Android 2D infinite scroller android game with Unity and C# programming language.",
      footerLink: [
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=com.tarunapps.runnybunny&hl=en_US&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/datingLogo.jpeg"),
      projectName: "UTDinder",
      projectDesc: "Web application that allow users to find there partners by swiping other profiles (React, Nodejs, Mongo, Firebase).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/vishnubapana/dating-app-website"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-4694275968",
  email_address: "tpunhani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

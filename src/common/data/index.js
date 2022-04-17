/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import LogoImageStick from "common/assets/image/header-logo.svg";

const MENU_ITEMS = [];

export const NavbarData = {
  logo: LogoImageStick,
  navItems: MENU_ITEMS,
  button: {},
};

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */
import springLogo from "common/assets/image/spring-logo.svg";

export const BannerData = {
  image: springLogo,
  logo: LogoImageStick,
  title: "Identity Spring",
  subtitle: "SkillWallet-powered Events.",
  text: "SkillWallet was designed to fuel a more meritocratic society, based on the Individuals, their Skills, and their participation in a Community. Join our Identity Spring, in a series of 15 events, with 400+k in rewards, going from regular Hackathons to Build-athons, and the first, fully decentralized Olympics of the free, non-governmental world.",
};

import cubeImage from "common/assets/image/cube.svg";
import aboutBg from "common/assets/image/about-bg.svg";
export const AboutData = {
  image: aboutBg,
  cubeImage: cubeImage,
  title: "Meta Olympics",
  subtitle: "powered by SkillWallet",
  text: "12 Competitions, 12 Skills, 300k USDC in reward. The biggest Coordination Game of all time: a celebration of Freedom, Talent & Individuality - to create the IdentityVerse together!",
  items: [
    {
      title: "Become a Volunteer",
      subtitle:
        "Volunteers can support the Community, be Olympics ambassadors, or help out in organizing the event(s).",
      button: {
        text: "Apply",
        link: "https://skillwallet.typeform.com/meta-volunteer",
      },
    },
    {
      title: "Become a Chaperon",
      subtitle:
        "Chaperons are able to mentors participants, build bridges to bring in people & value, and be Speakers during the event.",
      button: {
        text: "Apply",
        link: "https://skillwallet.typeform.com/meta-chaperon",
      },
    },
    {
      title: "Become a Partner",
      subtitle:
        "Partners can co-host a competition, sponsor side-events, or join us as DAO partner, to add value & expertise from their Community.",
      button: {
        text: "Apply",
        link: "https://skillwallet.typeform.com/meta-partner",
      },
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from "common/assets/image/events/event-image-1.svg";
import featureIcon2 from "common/assets/image/events/event-image-2.svg";
import featureIcon3 from "common/assets/image/events/event-image-3.svg";
import featureIcon4 from "common/assets/image/events/event-image-4.svg";
import featureIcon5 from "common/assets/image/events/event-image-5.svg";
import featureIcon6 from "common/assets/image/events/event-image-6.svg";
import featureIcon7 from "common/assets/image/events/event-image-7.svg";
import featureIcon8 from "common/assets/image/events/event-image-8.svg";
import featureIcon9 from "common/assets/image/events/event-image-9.svg";
import featureIcon10 from "common/assets/image/events/event-image-10.svg";
import featureIcon11 from "common/assets/image/events/event-image-11.svg";
import featureIcon12 from "common/assets/image/events/event-image-12.svg";

export const EventsData = {
  title: "First 100 to join the Olympics Get a Limited Edition Community Card",
  items: [
    {
      id: 1,
      icon: featureIcon1,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 2,
      icon: featureIcon2,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 3,
      icon: featureIcon3,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 4,
      icon: featureIcon4,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 5,
      icon: featureIcon5,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 6,
      icon: featureIcon6,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 7,
      icon: featureIcon7,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 8,
      icon: featureIcon8,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 9,
      icon: featureIcon9,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 10,
      icon: featureIcon10,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 11,
      icon: featureIcon11,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
    {
      id: 12,
      icon: featureIcon12,
      date: "Coming Soon",
      title: "Event Name",
      description: "Skill: To Be Decided",
    },
  ],
};

/* ------------------------------------ */
// Other Events data section
/* ------------------------------------ */
import ethGlobalIcon from "common/assets/image/other-events/eth-global.svg";
import spaghettSponson from "common/assets/image/other-events/spaghett-sponsor.svg";
import ethMainIcon from "common/assets/image/other-events/eth-main.svg";
import ethIcon from "common/assets/image/other-events/eth.svg";
import hacksIcon from "common/assets/image/other-events/hacks.svg";
import hacksMainIcon from "common/assets/image/other-events/hacks-main.svg";
import spaghettMainIcon from "common/assets/image/other-events/spaghett-main.svg";
import spaghettIcon from "common/assets/image/other-events/spaghett.svg";

export const OtherEventsData = {
  title: "Other Events",
  items: [
    {
      id: 1,
      topIcon: hacksIcon,
      mainIcon: hacksMainIcon,
      bottomIcon: ethGlobalIcon,
      title: "08-10/04/22",
      subtitle: "SkillWallet @ DAOHacks",
      description: `Join us at DAOHacks for the opportunity to explore new technologies, win incredible prizes,and hack for Public Goods & Personal Freedom.`,
      button: {
        link: "https://dao.ethglobal.com/",
        text: "Find Out More",
      },
    },
    {
      id: 2,
      topIcon: ethIcon,
      mainIcon: ethMainIcon,
      bottomIcon: ethGlobalIcon,
      title: "22-24/04/22",
      subtitle: "SkillWallet @ ETHAmsterdam",
      description: `Join us at ETHAmsterdam for the opportunity to explore new technologies, win incredible prizes,and hack for Public Goods & Personal Freedom.* Meet us in Amsterdam at our booth to join our side-events!`,
      button: {
        link: "https://amsterdam.ethglobal.com/",
        text: "Find Out More",
      },
    },
    {
      id: 3,
      topIcon: spaghettIcon,
      mainIcon: spaghettMainIcon,
      bottomIcon: spaghettSponson,
      title: "03-05/05/22",
      subtitle: "SkillWallet @ SpaghettETH",
      description: `Join us at ETHAmsterdam for the opportunity to explore new technologies, win incredible prizes,and hack for Public Goods & Personal Freedom.* Meet us in Milan at our booth to join our side-events!`,
      button: {
        link: "http://spaghett-eth.com/",
        text: "Find Out More",
      },
    },
  ],
};

/* ------------------------------------ */
// Calendar data section
/* ------------------------------------ */

import calendarIcon from "common/assets/image/calendar.svg";

const generateCalendarDays = ({ startAtWeekDay, days }) =>
  [...new Array(days + startAtWeekDay - 1)].map((_, dayIndex) => {
    return startAtWeekDay <= dayIndex + 1
      ? dayIndex - startAtWeekDay + 2
      : null;
  });

export const CalendarData = {
  link: {
    icon: calendarIcon,
    href: "/",
    text: "Download Calendar",
  },
  months: [
    {
      name: "April, 2022",
      days: generateCalendarDays({ startAtWeekDay: 6, days: 30 }),
      events: [
        {
          day: 8,
          name: "DAOHACKS",
        },
        {
          day: 9,
          name: "DAOHACKS",
        },
        {
          day: 10,
          name: "DAOHACKS",
        },
        {
          day: 22,
          name: "ETHAmsterdam",
        },
        {
          day: 23,
          name: "ETHAmsterdam",
        },
        {
          day: 24,
          name: "ETHAmsterdam",
        },
      ],
    },
    {
      name: "May, 2022",
      days: generateCalendarDays({ startAtWeekDay: 1, days: 7 }),
      events: [
        {
          day: 3,
          name: "SpaghettETH",
        },
        {
          day: 4,
          name: "SpaghettETH",
        },
        {
          day: 5,
          name: "SpaghettETH",
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News data section
/* ------------------------------------ */
import firstImage from "common/assets/image/news/first.svg";
import thirdImage from "common/assets/image/news/third.svg";
import timeAgoIcon from "common/assets/image/time-ago.svg";
import playIcon from "common/assets/image/play.svg";

export const NewsData = {
  title: "Event News",
  playIcon,
  timeAgoIcon,
  items: [ // example data
    {
      id: 1,
      image: firstImage,
      type: 'Tweet',
      title: 'Some Tweet title',
      text: `Lorem ipsum dolor sit amet, consectetuer 
      adipiscing elit. Aenean commodo ligula eget 
      dolor. Aenean massa. Cum sociis natoque 
      penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Donec quam felis, 
      ultricies nec, pellentesque eu, pretium quis, 
      sem. Nulla consequat mas`,
      time: '1h ago'
    },
    {
      id: 2,
      type: 'Medium Post',
      title: 'Excepteur sint occaecat cupidatat non proident, sunt in',
      text: `Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui 
      officia deserunt`,
      href: '/',
      time: '1h ago'
    },
    {
      id: 3,
      image: thirdImage,
      type: 'Youtube',
      title: 'Video Title to go here'
    },
  ],
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/logo-footer.svg";
import footerDiscord from "common/assets/image/discord-social.svg";
import footerGithub from "common/assets/image/github-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerMedium from "common/assets/image/medium-social.svg";

export const FooterData = {
  menu: [],
  logo: footerLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, SkillWallet.`,
  social: [
    {
      link: "https://discord.gg/jntyjSvFZd",
      icon: footerDiscord,
    },
    {
      link: "https://github.com/SkillWallet",
      icon: footerGithub,
    },
    {
      link: "https://twitter.com/SkillWalletID",
      icon: footerTwitter,
    },
    {
      link: "https://blog.skillwallet.id",
      icon: footerMedium,
    },
  ],
};

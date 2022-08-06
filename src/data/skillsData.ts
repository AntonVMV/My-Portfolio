import { ReactComponent as HTMLIcon } from "./icons/html.svg";
import { ReactComponent as CSSIcon } from "./icons/css.svg";
import { ReactComponent as SASSIcon } from "./icons/sass.svg";
import { ReactComponent as JSIcon } from "./icons/js.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as ReduxIcon } from "./icons/redux.svg";
import { ReactComponent as TsIcon } from "./icons/ts.svg";

export const techologies = [
  {
    text: "I understand the structure of an HTML document, tags, lists, links, forms. Trying to use semantic layout as much as possible. Know the basic principles of BEM naming, used it several times in pet projects.",
    icon: HTMLIcon,
  },
  {
    text: "Using css, I try to create the most responsive pages. Using flexbox and grid I make layouts more flexible. Also use media queries to make the application look good both on the desktop and on the small devices. Also using SCSS to styling my components.",
    icon: CSSIcon,
  },
  {
    text: "I've been working with JavaScript for over a year. During this time, I managed to figure out how things work - primitives, objects, functions, classes, loops, closures, interaction with DOM, browser API. Also working with asynchronous code (Promise, async/await), understand how event loop works, server requests with fetch and maybe something else that I forgot to mention.",
    icon: JSIcon,
  },
  {
    text: "Almost all of my recent work has been done with react. Mostly work with functional components and hooks, but I've also have experience with class components and lifecycle methods. I understand how the state works, props, component updates and try to optimize render. Work with application routing using react browser router",
    icon: ReactIcon,
  },
  {
    text: "I work with Redux in both functional and class components, understand the data flow. For asynchronous actions I use Thunk. Also use redux-toolkit, learning to use RTK Query when it's useful.",
    icon: ReduxIcon,
  },
  {
    text: "I started studying TS recently, but already trying to apply it in all my projects. I used it both with native JS (OOP, access modifiers) and with the React (for typing components, props, redux, etc.) Сontinue to study and use the best practices.",
    icon: TsIcon,
  },
];

export const otherTech = [
  "SCSS",
  "Redux-thunk",
  "Redux-toolkit",
  "Styled-components",
  "Axios",
  "Material UI",
];

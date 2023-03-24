import comp from "../../../assets/images/comp.png";

export type CourseType = {
  id: string;
  image: string;
  title: string;
  text: string;
  day: string;
  month: string;
  link: string;
};

export const courses = [
  {
    id: "01",
    image: comp,
    title: `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet consectetur.  Amet donec rutrum habitasse eu interdum dignissim arcu. `,
    day: "20",
    month: "марта",
    link: "/",
  },
  {
    id: "02",
    image: comp,
    title: `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet consectetur.  Amet donec rutrum habitasse eu interdum dignissim arcu. `,
    day: "20",
    month: "марта",
    link: "/",
  },
  {
    id: "03",
    image: comp,
    title: `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet consectetur.  Amet donec rutrum habitasse eu interdum dignissim arcu. `,
    day: "20",
    month: "марта",
    link: "/",
  },
];

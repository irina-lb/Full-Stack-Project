//icons import
import box from "./styles/icons/Box.png";
import sausage from "./styles/icons/Sausage.png";
import shipping from "./styles/icons/Shipping.png";
import steak from "./styles/icons/Steak.png";

//cards information about section
export const cards = [
  {
    icon: box,
    title: "Choose",
    text: "Our chef-design recipes will help you to find your favorite flavor.",
  },
  {
    icon: shipping,
    title: "Wait",
    text: "We deliver box with fresh ingredients right to your door.",
  },
  {
    icon: steak,
    title: "Cook",
    text: "Following our step-by-step instructions to create the magic.",
  },
  {
    icon: sausage,
    title: "Enjoy",
    text: "Experience the magic of cooking and enjoy the great food.",
  },
];

//prices for the filter

export const prices = [
  {
    id: 0,
    name: "All",
    limit: [],
  },
  {
    id: 1,
    name: "0€ - 10€",
    limit: [0, 10],
  },
  {
    id: 2,
    name: "11€ - 20€",
    limit: [11, 20],
  },
  {
    id: 3,
    name: "21€ - 30€",
    limit: [21, 30],
  },
  {
    id: 4,
    name: "More then 30€",
    limit: [30, 50],
  },
];

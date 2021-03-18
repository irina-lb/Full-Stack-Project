//icons import
import box from "./styles/icons/Box.png";
import spaghetti from "./styles/icons/Spaghetti.png";
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
    icon: spaghetti,
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
    name: "0€ - 9€",
    limit: [0, 9],
  },
  {
    id: 2,
    name: "11€ - 19€",
    limit: [11, 19],
  },
  {
    id: 3,
    name: "21€ - 29€",
    limit: [21, 29],
  },
  {
    id: 4,
    name: "30€ and more",
    limit: [30, 50],
  },
];

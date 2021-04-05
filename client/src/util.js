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

//faq section

export const faq = [
  {
    question: "How does the service work?",
    answer:
      "We are a health and quality recipe and ingredients box service. You can choose one or several recipes from our Menu and we will deliver the box with all necessary ingredients right to your door.",
  },
  {
    question: "What days do you deliver?",
    answer:
      "Our couriers deliver 7 days a week, giving you a plenty of chose and flexibility.",
  },
  {
    question: "Can I receive my delivery at a specific time?",
    answer:
      "You can choose specify time window, which will be comfortable for you. Delivery will be made between 8am - 7pm. ",
  },
  {
    question: "How long do the meals take to cook?",
    answer:
      "Our meals take from 15 to 60 min, also you can check the preparation time of each plate in our Menu section.",
  },
  {
    question: "Do you have recipes for 1 person?",
    answer:
      "Yes, we have recipes for 1, 2,4 or 6 people, you can check all options in our Menu.",
  },
  {
    question: "I don't know to cook, is it a problem?",
    answer:
      "Don't worry, it's not a problem! Our boxes include step by step recipes and all ingredients have a exact portions. that's make a process of cooking much easier and enjoyable!",
  },
  {
    question: "Do you have recipes for kids?",
    answer:
      "Yes! You can check our section 'Kids friendly', which contains a lot of recipes for kids and parents. We not just chose kids favorites flavours, but also made this recipes comfortable for cooking together.",
  },
];

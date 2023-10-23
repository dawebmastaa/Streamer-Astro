export interface Template {
  name: string;
  description: string;
};
const one: Template = {
  name: "Unearthing History",
  description: "Join us in exploring the depths of inner adventures and the intricacies of the human mind and emotions.",
};
const two: Template = {
    name: "Mysteries Explored",
    description: "Unveil captivating conversations with insightful guests who share their unique perspectives and life stories.",
};
const three: Template = {
  name: "Creative Sparks",
  description: "Join us as we dig into the past to uncover forgotten tales and historical gems that shape our present.",
};
const four: Template = {
  name: "Interactive Exploration",
  description: "Dive into an interactive exploration of ideas, theories, and discoveries. ",
};
export const byName = {
  one,
  two,
    three,
  four,
};
export const features = Object.values(byName);

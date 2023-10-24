export interface Template {
  name: string;
  description: string;
};
const one: Template = {
  name: "Discovery",
  description: "What is the current status of your web presence, vs what your ultimate goals are for it.",
};
const two: Template = {
    name: "Exploration",
    description: "What are some current tools/technologies that could be put to use to improve the current status.",
};
const three: Template = {
  name: "Creative Sparks",
  description: "What are some 'pain points' in the business operation that modern web tools might address?.",
};
const four: Template = {
  name: "Interactive Exploration",
  description: "What's the tool you've never been able to find, that would save you massive time or money?",
};
export const byName = {
  one,
  two,
  three,
  four,
};
export const features = Object.values(byName);

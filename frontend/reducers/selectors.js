export const allQuestions = ({ questions }) => {
  return Object.keys(questions).map(id => questions[id]);
};

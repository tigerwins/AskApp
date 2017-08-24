export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: '/api/questions',
  });
};

export const fetchQuestion = id => {
  return $.ajax({
    method: "GET",
    url: `/api/questions/${id}`,
  });
};

export const createQuestion = question => {
  return $.ajax({
    method: "POST",
    url: "/api/questions",
    data: question,
  });
};

export const updateQuestion = question => {
  return $.ajax({
    method: "PATCH",
    url: `/api/questions/${question.id}`,
    data: { question },
  });
};

export const destroyQuestion = question => {
  return $.ajax({
    method: "DELETE",
    url: `/api/questions/${question.id}`,
  });
};

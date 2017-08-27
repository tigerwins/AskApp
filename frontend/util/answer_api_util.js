export const createAnswer = (answer) => {
  debugger
  return $.ajax({
    method: "POST",
    url: `/api/questions/${answer.questionId}/answers`,
    data: { answer },
  });
};

export const updateAnswer = answer => {
  return $.ajax({
    method: "PATCH",
    url: `/api/answers/${answer.id}`,
    data: { answer },
  });
};

export const destroyAnswer = answer => {
  return $.ajax({
    method: "DELETE",
    url: `/api/answers/${answer.id}`,
  });
};

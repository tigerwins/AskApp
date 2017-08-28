export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${comment.answer_id}/comments`,
    data: { comment },
  });
};

export const destroyComment = comment => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${comment.id}`,
  });
};

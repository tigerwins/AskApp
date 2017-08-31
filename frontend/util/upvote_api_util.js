export const fetchUpvotes = () => {

};

export const createUpvote = upvote => {
  return $.ajax({
    method: "POST",
    url: "/api/upvotes/",
    data: { upvote },
  });
};

export const destroyUpvote = ({ userId, answerId }) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/upvotes/${userId}/${answerId}`,
  });
};

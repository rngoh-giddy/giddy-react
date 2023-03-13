import React from "react";

export default function FisherArticleAuthor({ author, published }) {
  return (
    <div>
      <p className="fw-bold">By: {author?.name}</p>
      <p> {published} </p>
    </div>
  );
}

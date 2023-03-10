import React from "react";

export default function FisherArticleAuthor({ author, published }) {
  return (
    <div>
      <p>By: {author?.name}</p>
      <p> {published} </p>
    </div>
  );
}

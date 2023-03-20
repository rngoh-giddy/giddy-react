import React from "react";

export default function ArticleDeck({ deck }) {
  // console.log(deck);
  return <div dangerouslySetInnerHTML={{ __html: deck }} />;
}

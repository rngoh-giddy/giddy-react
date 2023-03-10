import React from "react";

export default function FisherArticleDeck({ deck }) {
  console.log(deck);
  return <div className="pe-xl-2" dangerouslySetInnerHTML={{ __html: deck }} />;
}

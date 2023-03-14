import React from "react";

export default function ArticleText({ body }) {
  return (
    <div
      className="mt-4 pt-2 mt-xl-0 pt-xl-0"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}

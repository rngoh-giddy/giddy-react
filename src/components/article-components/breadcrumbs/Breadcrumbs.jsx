import React from "react";

import "./Breadcrumbs.css";

export default function Breadcrumbs({ taxonomy }) {

  const taxLength = taxonomy?.primary.length;
  return (
    <div className="breadcrumb-container">
      {taxonomy?.primary.map(({ name, id, drupal_id }, index) => (
        <a key={id} href={`https://getmegiddy.com/taxonomy/term/${drupal_id}`}>
          &nbsp; {name} {taxLength - 1 > index ? ">" : ""}{" "}
        </a>
      ))}
    </div>
  );
}

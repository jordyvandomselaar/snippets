import React from "react";

const getSubSnippets = snippets =>
  Object.keys(snippets).map(key => <li>{key}</li>);

const getSnippets = snippets =>
  Object.keys(snippets).map(key => (
    <>
      <li>{key}</li>
      <ul>{getSubSnippets(snippets[key])}</ul>
    </>
  ));

const Menu = ({ snippets }) => (
  <div>
    <h1>Snippets</h1>
    {getSnippets(snippets)}
  </div>
);

export default Menu;

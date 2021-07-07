import React from "react";
// We'll need a Link and the useLocation hook from 'react-router-dom'
import { Link, useRouteMatch } from "react-router-dom";

export default function ItemsList(props) {
  const { items } = props;
  // We'll grab the current URL using the hook
  // Returns an object with things, among them the current url
  // So we don't have to repeat it in our links
  const { url, path } = useRouteMatch();
  console.log(`The URL from useRouterMatch`, url);
  console.log(`The path from useRouterMatch`, path);
  return (
    <div className="items-list-wrapper">
      {items.map((item) => (
        <div className="item-card" key={item.id}>
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${url}/${item.id}`}>
            <img className="items-list-image" src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
          </Link>
          {/* Link ends */}

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

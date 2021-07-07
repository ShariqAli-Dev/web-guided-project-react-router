import React from "react";
// We'll need quite a few imports from react-router-dom
import { useParams, NavLink, Route, useRouteMatch } from "react-router-dom";

import ItemDetails from "./ItemDetails";

export default function Item(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { items } = props;
  const { id } = useParams();
  const { url, path } = useRouteMatch(); // As we know, url is actually the path name

  // 👉 STEP 7 - We need to pull item from items, using a parameter in the URL (:id)
  // Beware! The ids are integers, whereas URL parameters are strings.
  // Beware! The JSX is expecting 'item' to exist instantly!
  // we use this hook to grab they dynamic parts of the path (:id).
  const item =
    items.find((item) => {
      return item.id == id;
    }) || {};

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className="item-sub-nav">
        {/* 👉 STEP 8 - Here go the NavLinks to `<current url>/shipping` and `<current url>/description` */}
        <NavLink to={`${url}/shipping`}>Description</NavLink>
        <NavLink to={`${url}/description`}>Shipping</NavLink>
      </nav>

      {/* 👉 STEP 9 - Here go the Routes for `<current path>/shipping` and `<current path>/description` */}
      {/* These Routes should render <ItemDetails /> */}
      <Route path={`${path}/description`}>
        <ItemDetails text={item.description} />
      </Route>

      <Route path={`${path}/shipping`}>
        <ItemDetails text={item.shipping} />
      </Route>
      {/* 👉 STEP 10 - Shorten paths and urls with `useRouteMatch` hook */}
    </div>
  );
}

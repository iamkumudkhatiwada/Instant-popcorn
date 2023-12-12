import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         size="35"
//         onSetRating={setMovieRating}
//       />
//       <p>You have rated this movie {movieRating} stars </p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      size="48"
      messages={["Terrible", "Just Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="red" size="25" defaultRating={3} />

    <Test /> */}

    <App />
  </React.StrictMode>
);

// import React, { useState, useEffect } from "react";
// import Home from "./pages/Home";
// import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <LoadingAnimation />
//       ) : (
//         <div>
//           <Home />
//           <h1>Welcome to My Portfolio!</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react'
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation'

const App = () => {
  return (
    <LoadingAnimation/>
  )
}

export default App
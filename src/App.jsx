  import React, { useState } from "react";
  import CustomCursor from "./components/CustomCursor";
  import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
  import Home from "./pages/Home";

  const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
      setIsLoading(false);
    };

    return (
      <>
        <CustomCursor />
        {isLoading ? (
          <LoadingAnimation onLoadingComplete={handleLoadingComplete} />
        ) : (
          <Home />
        )}
      </>
    );
  };

  export default App;

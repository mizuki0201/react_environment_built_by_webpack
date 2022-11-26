import React, { FC } from "react";

const App: FC = () => {
  const headingText: string = "welcome!";

  return (
    <div>
      <h1>{headingText}</h1>
      <p>this is react development environment built by webpack!</p>
    </div>
  );
};

export default App;

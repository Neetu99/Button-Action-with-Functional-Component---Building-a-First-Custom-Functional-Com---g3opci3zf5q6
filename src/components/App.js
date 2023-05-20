import React, { useState } from 'react';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    setShowParagraph(true);
  };

  return (
    <div>
      <button id="click" onClick={handleClick}>
        Click Me
      </button>
      {showParagraph && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
};

export default App;

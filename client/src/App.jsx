import React, { useState } from 'react';
import Home from "./pages/Home";
import KonvaPage from "./pages/KonvaPage";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";

function App() {
  const [showKonva, setShowKonva] = useState(false);

  return (
    <main className="app transition-all ease-in">
      {!showKonva ? (
        <>
          <Home />
          <Canvas />
          <Customizer setShowKonva={setShowKonva} />
        </>
      ) : (
        <KonvaPage setShowKonva={setShowKonva} />
      )}
    </main>
  );
}

export default App;

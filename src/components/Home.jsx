import React from "react";
import { SessionProvider, useSession } from "../context/sessionProvider.jsx";
import Login from "../components/Login.jsx";
import Home from "../components/Home.jsx";


const AppContent = () => {
  const { session } = useSession();

  return session ? <Home /> : <Login />;
};

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}

export default App;

// Modules
import React from "react";

// Components
import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "../../components";

export const LandingLayout = () => {
  return (
    <div className="landing-layout">
      <header className="landing-layout__header">
        <Navigation />
      </header>

      <main className="landing-layout__main">
        <Outlet />
      </main>

      <footer className="landing-layout__footer">
        <Footer />
      </footer>
    </div>
  );
};

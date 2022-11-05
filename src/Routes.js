import React from "react";
import Stage1Web from "pages/Stage1Web";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Contact from "pages/Contact"

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Stage1Web />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;

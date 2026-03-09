import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import BeforeAfter from "./pages/BeforeAfter.jsx";
import Gallery from "./pages/Gallery.jsx";
import Reviews from "./pages/Reviews.jsx";
import ServiceArea from "./pages/ServiceArea.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Terms from "./pages/Terms.jsx";

import FullService from "./pages/FullService.jsx";
import InteriorDetail from "./pages/InteriorDetail.jsx";
import ExteriorDetail from "./pages/ExteriorDetail.jsx";
import PaintCorrectionCeramic from "./pages/PaintCorrectionCeramic.jsx";
import ALaCarte from "./pages/ALaCarte.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/full-service" element={<FullService />} />
          <Route path="/services/interior-detail" element={<InteriorDetail />} />
          <Route path="/services/exterior-detail" element={<ExteriorDetail />} />
          <Route
            path="/services/paint-correction-ceramic"
            element={<PaintCorrectionCeramic />}
          />
          <Route path="/services/a-la-carte" element={<ALaCarte />} />
          <Route path="/before-after" element={<BeforeAfter />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
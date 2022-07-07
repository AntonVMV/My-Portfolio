import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Works } from "./Pages/Works/Works";
import { Skills } from "./Pages/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={"about"} replace />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

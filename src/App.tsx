import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, NotFound, Funds } from "./pages/index";
import { OidcProvider } from "@axa-fr/react-oidc";
import Modal from "./components/Modal/Modal";
const App = () => {
  const configuration = {
    client_id: "interactive.public.short",
    redirect_uri: window.location.origin + "/authentication/callback",
    silent_redirect_uri:
      window.location.origin + "/authentication/silent-callback",
    scope: "openid profile email api offline_access",
    authority: "https://demo.duendesoftware.com",
    service_worker_relative_url: "/OidcServiceWorker.js",
    service_worker_only: false,
    demonstrating_proof_of_possession: false,
  };
  return (
    <OidcProvider configuration={configuration}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Modal />} />
              <Route path="/home" element={<Home />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/donations" element={<Home />} />
              <Route path="/profile" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </OidcProvider>
  );
};

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import { OidcProvider } from "@axa-fr/react-oidc";
import { withOidcSecure } from "@axa-fr/react-oidc";
import Modal from "./components/Modal/Modal";
const App = () => {
  const configuration = {
    client_id: "interactive.public.short",
    redirect_uri: window.location.origin + "/authentication/callback",
    silent_redirect_uri:
      window.location.origin + "/authentication/silent-callback",
    scope: "openid profile email api offline_access", // offline_access scope allow your client to retrieve the refresh_token
    authority: "https://demo.duendesoftware.com",
    service_worker_relative_url: "/OidcServiceWorker.js", // just comment that line to disable service worker mode
    service_worker_only: false,
    demonstrating_proof_of_possession: false, // demonstrating proof of possession will work only if access_token is accessible from the client (This is because WebCrypto API is not available inside a Service Worker)
  };
  return (
    <OidcProvider configuration={configuration}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Modal />} />
              <Route path="/auth" element={withOidcSecure(Home)} />
              <Route path="/funds" element={withOidcSecure(Home)} />
              <Route path="/donations" element={withOidcSecure(Home)} />
              <Route path="/profile" element={withOidcSecure(Home)} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </OidcProvider>
  );
};

export default App;

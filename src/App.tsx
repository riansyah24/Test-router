import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import { App as CapacitorApp } from '@capacitor/app';
import { useEffect } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <BackButtonHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

const BackButtonHandler = () => {
  const location = useLocation();

  useEffect(() => {
    let listener: any;

    const setupListener = async () => {
      listener = await CapacitorApp.addListener('backButton', () => {
        if (location.pathname === "/") {
          // Jika di halaman Home, keluar aplikasi
          CapacitorApp.exitApp();
        } else {
          // Jika tidak di Home, kembali ke halaman sebelumnya
          window.history.back();
        }
      });
    };

    setupListener();

    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, [location.pathname]);

  return null;
}

export default App;
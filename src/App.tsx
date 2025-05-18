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
    const backButtonListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (location.pathname === "/") {
        // Jika di halaman Home, keluar aplikasi
        CapacitorApp.exitApp();
      } else {
        // Jika tidak di Home, kembali ke halaman sebelumnya
        window.history.back();
      }
    });

    return () => {
      backButtonListener.remove();
    };
  }, [location.pathname]); // Dependensi location.pathname agar listener update ketika route berubah

  return null;
}

export default App;
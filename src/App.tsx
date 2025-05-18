import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import { App as CapacitorApp } from '@capacitor/app'; // Ubah nama import
import { useEffect } from 'react'; // Tambahkan useEffect

const App = () => {
  useEffect(() => {
    // Gunakan CapacitorApp sebagai ganti App
    CapacitorApp.addListener('backButton', ({ canGoBack }: { canGoBack: boolean }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        CapacitorApp.exitApp();
      }
    });

    // Cleanup listener saat komponen unmount
    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
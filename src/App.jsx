import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Landing from './components/Landing';
import Gallery from './components/Gallery';

function App() {
  const galleryRef = useRef(null);
  const [language, setLanguage] = useState('EN'); // 'EN' or '中文'

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? '中文' : 'EN'));
  };

  return (
    <div className="app-container">
      {/* Floating language button */}
      <button
        onClick={toggleLanguage}
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid white',
          borderRadius: '20px',
          padding: '6px 14px',
          fontSize: '14px',
          color: '#fff',
          zIndex: 9999,
          backdropFilter: 'blur(8px)',
          cursor: 'pointer'
        }}
      >
        {language === 'EN' ? '中文' : 'EN'}
      </button>

      <Landing onGalleryClick={scrollToGallery} language={language} />
      
      <motion.div 
        ref={galleryRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Gallery language={language} />
      </motion.div>
    </div>
  );
}

export default App;

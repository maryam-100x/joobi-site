import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


const COLORS = [
  'Red', 'Yellow', 'Violet', 'White', 'Green',
  'Pastel Pink', 'Black', 'Orange', 'Teal'
];

const EXPRESSIONS = Array.from({ length: 94 }, (_, i) =>
  i === 87 ? ['88', '88 (1)'] : `${String(i + 1).padStart(2, '0')}`
).flat();

const TEXT = {
  EN: {
    title: '$joobi',
    subtitle: 'The Most Famous TikTok Emoji. Create, share, and collect unique Joobis.',
    createBtn: 'Create Your Joobi',
    buttons: ['Buy $joobi', 'Copy CA', 'Community'],
    reaction: 'CA Copied!',
  },
  中文: {
    title: '$joobi',
    subtitle: '最知名的 TikTok 表情包。创建、分享并收集独一无二的 Joobi。',
    createBtn: '创建你的 Joobi',
    buttons: ['购买 $joobi', '复制合约地址', '社区'],
    reaction: '合约地址已复制！',
  }
};




const Landing = ({ onGalleryClick, language }) => {
  const contract = "3gFD6JcB1XUjuCG9RCoAjkRgDuceFQ7UQTxtLXzzpump";
  const [copied, setCopied] = useState(false);
  const [activeBackground, setActiveBackground] = useState(0);
  const backgrounds = [
    'linear-gradient(135deg, #004cff 0%, #001e5e 100%)',
    'linear-gradient(135deg, #001e5e 0%, #000814 100%)',
    'linear-gradient(135deg, #000814 0%, #004cff 100%)'
  ];

  const copyCA = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [featuredJoobis, setFeaturedJoobis] = useState([
  { id: 0, color: 'Red', expression: '01' },
  { id: 1, color: 'Yellow', expression: '02' },
  { id: 2, color: 'Teal', expression: '03' },
]);




  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const COLORS = ['Red', 'Yellow', 'Violet', 'White', 'Green', 'Pastel Pink', 'Black', 'Orange', 'Teal'];
  const EXPRESSIONS = Array.from({ length: 94 }, (_, i) =>
    i === 87 ? ['88', '88 (1)'] : `${String(i + 1).padStart(2, '0')}`
  ).flat();

  const interval = setInterval(() => {
    setFeaturedJoobis((prev) =>
      prev.map((joobi) => ({
        ...joobi,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        expression: EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)],
      }))
    );
  }, 10000);

  return () => clearInterval(interval);
}, []);



  const buttons = [
  {
    label: TEXT[language].buttons[0],
    action: () => window.open('https://pump.fun/coin/3gFD6JcB1XUjuCG9RCoAjkRgDuceFQ7UQTxtLXzzpump', '_blank'),
    icon: '💊'
  },
  {
    label: TEXT[language].buttons[1],
    action: copyCA,
    icon: '📋'
  },
  {
    label: TEXT[language].buttons[2],
    action: () => window.open('https://x.com/i/communities/1921023478162993382', '_blank'),
    icon: '𝕏'
  }
];


  return (
    <motion.section className="landing-container">
  <div className="bg-fade-container">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeBackground}
        className="bg-fade"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        style={{ background: backgrounds[activeBackground] }}
      />
    </AnimatePresence>
  </div>
  <AnimatePresence mode="wait">
  {featuredJoobis.map((joobi, index) => (
  <motion.img
    src={`/Colored/${joobi.color}/${joobi.expression}.png`}
    alt={`joobi-${index}`}
    className={`featured-joobi orbit-${index}`}
    animate={{ opacity: 0.15 }}
    transition={{ duration: 1 }}
  />
))}

</AnimatePresence>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.5})`
            }}
          />
        ))}
      </div>

<div className="landing-content text-center">
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/joobi.jpeg"
            alt="joobi"
            className="main-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
  {TEXT[language].title}
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
  {TEXT[language].subtitle}
        </motion.p>

        <motion.div
          className="button-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {buttons.map((button, index) => (
            <motion.button
              key={index}
              className="action-button"
              onClick={button.action}
              whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0, 195, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="button-icon">{button.icon}</span>
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* <motion.div
  className="live-stats"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.6 }}
>
  <div className="stat">
    <strong>📊 Market Cap:</strong> $1.2M
  </div>
  <div className="stat">
    <strong>🧠 Holders:</strong> 12,438
  </div>
  <div className="stat">
    <strong>📈 24h Volume:</strong> $340K
  </div>
</motion.div> */}


        <AnimatePresence>
  {copied && (
    <motion.div
      className="contract-reaction"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: -30, scale: 1 }}
      exit={{ opacity: 0, y: -60, scale: 1.1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={`/Colored/Red/56.png`} // or any cute Joobi expression
        alt="joobi reaction"
        className="reaction-emoji"
      />
<span className="reaction-text">{TEXT[language].reaction}</span>
    </motion.div>
  )}
</AnimatePresence>


        <motion.div
          className="scroll-indicator"
          onClick={onGalleryClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: 5 }}
        >
<span>{TEXT[language].createBtn}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Landing;
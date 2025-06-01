import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = [
  { en: 'Yellow', zh: '黄色' },
  { en: 'Red', zh: '红色' },
  { en: 'Violet', zh: '紫色' },
  { en: 'White', zh: '白色' },
  { en: 'Green', zh: '绿色' },
  { en: 'Pastel Pink', zh: '粉彩色' },
  { en: 'Black', zh: '黑色' },
  { en: 'Orange', zh: '橙色' },
  { en: 'Teal', zh: '蓝绿色' },
  { en: 'Blue', zh: '蓝色' } // ✅ Added Blue
];


const EXPRESSIONS = [
  { file: "01", en: "Happy Grin", zh: "开心笑" },
  { file: "02", en: "Wink", zh: "眨眼" },
  { file: "03", en: "Raised Eyebrow", zh: "挑眉" },
  { file: "04", en: "Checking Out", zh: "查看" },
  { file: "05", en: "In Love", zh: "恋爱中" },
  { file: "06", en: "Crazy in Love with Tongue Out", zh: "吐舌疯狂爱" },
  { file: "07", en: "Grinning Face with Sweat", zh: "流汗笑脸" },
  { file: "08", en: "Tongue Out", zh: "吐舌" },
  { file: "09", en: "Sexy Biting Lip", zh: "咬唇性感" },
  { file: "10", en: "Appalled", zh: "震惊" },
  { file: "11", en: "Kiss", zh: "亲吻" },
  { file: "12", en: "Got Something in Mind", zh: "若有所思" },
  { file: "13", en: "Laughing Squinting Face", zh: "眯眼笑" },
  { file: "14", en: "Woozy Face", zh: "晕眩脸" },
  { file: "15", en: "Blank Smile", zh: "空白微笑" },
  { file: "16", en: "Annoyed", zh: "恼怒" },
  { file: "17", en: "Smiling Face with Sunglasses", zh: "墨镜笑脸" },
  { file: "18", en: "Sad", zh: "悲伤" },
  { file: "19", en: "Tearing Up", zh: "流泪" },
  { file: "20", en: "Nerd Glasses", zh: "书呆子眼镜" },
  { file: "21", en: "Mouth Open in Rage", zh: "愤怒张嘴" },
  { file: "22", en: "Shock", zh: "震惊" },
  { file: "23", en: "Unimpressed", zh: "无感" },
  { file: "24", en: "Displeased", zh: "不悦" },
  { file: "25", en: "Impressed with Stars in Eyes", zh: "星星眼" },
  { file: "26", en: "Putting Tongue Out", zh: "伸舌头" },
  { file: "27", en: "Mischevious", zh: "淘气" },
  { file: "28", en: "Sussy", zh: "可疑" },
  { file: "29", en: "In Shock", zh: "震惊中" },
  { file: "30", en: "Sad and Silently Crying", zh: "默默哭泣" },
  { file: "31", en: "Zany", zh: "滑稽" },
  { file: "32", en: "Quivering Lip", zh: "颤抖嘴唇" },
  { file: "33", en: "Angry Teeth Emoticon", zh: "愤怒牙齿" },
  { file: "34", en: "Frowny Face Emoticon", zh: "皱眉脸" },
  { file: "35", en: "Goofy", zh: "傻气" },
  { file: "36", en: "Growling Mad Smiley", zh: "咆哮愤怒" },
  { file: "37", en: "Nothing Seems Right", zh: "一切不对" },
  { file: "38", en: "Huge Grin", zh: "大笑" },
  { file: "39", en: "Crazy Wide-Eyed Smile", zh: "瞪眼笑" },
  { file: "40", en: "Eyebrow-Lift Smile", zh: "挑眉笑" },
  { file: "41", en: "Can't Unsee This", zh: "无法忽视" },
  { file: "42", en: "Seasick Smiley", zh: "晕船脸" },
  { file: "43", en: "Happy and Cheering", zh: "开心欢呼" },
  { file: "44", en: "Facepalm", zh: "捂脸" },
  { file: "45", en: "Holding it in", zh: "忍住" },
  { file: "46", en: "Hot Face", zh: "发热脸" },
  { file: "47", en: "Waving Hello", zh: "挥手" },
  { file: "48", en: "Face with Open Mouth", zh: "张嘴脸" },
  { file: "49", en: "Missing Teeth Silly", zh: "缺牙傻笑" },
  { file: "50", en: "Roaring Angry Beast", zh: "咆哮野兽" },
  { file: "51", en: "Fist Shaking Old Man", zh: "挥拳老人" },
  { file: "52", en: "Shush", zh: "嘘声" },
  { file: "53", en: "Innocent and Pretty", zh: "无辜漂亮" },
  { file: "54", en: "Uncertain/Shrug", zh: "不确定/耸肩" },
  { file: "55", en: "Can't Look and Too Scared", zh: "不敢看" },
  { file: "56", en: "Contented Grin", zh: "满足笑" },
  { file: "57", en: "Wacky Face", zh: "古怪脸" },
  { file: "58", en: "Red Lips Smack Kiss", zh: "红唇吻" },
  { file: "59", en: "Cookie Muncher", zh: "吃饼干" },
  { file: "60", en: "Love from the Heart", zh: "爱心示爱" },
  { file: "61", en: "Freaked Out", zh: "吓坏" },
  { file: "62", en: "Sleepy and Yawning", zh: "困倦哈欠" },
  { file: "63", en: "Give Me a Hug", zh: "求拥抱" },
  { file: "64", en: "Weary Face", zh: "疲倦脸" },
  { file: "65", en: "Suspicious Heavy-Lidded", zh: "怀疑眯眼" },
  { file: "66", en: "Pearly Whites Smiley", zh: "珍珠白牙" },
  { file: "67", en: "Punched in Face Black-Eye Smiley", zh: "黑眼圈" },
  { file: "68", en: "Fountains of Tears", zh: "泪如泉涌" },
  { file: "69", en: "Praying Please", zh: "祈祷" },
  { file: "70", en: "Instant Regret with Hands on Head", zh: "抱头后悔" },
  { file: "71", en: "Making an Argument", zh: "争论" },
  { file: "72", en: "Holding Its Breath Clearly Innocent", zh: "憋气装无辜" },
  { file: "73", en: "Unamused Face", zh: "不悦脸" },
  { file: "74", en: "Cringed", zh: "尴尬" },
  { file: "75", en: "Very Touched", zh: "非常感动" },
  { file: "76", en: "Oops I Did It Again", zh: "又犯错了" },
  { file: "77", en: "Offering a Rose", zh: "献玫瑰" },
  { file: "78", en: "Pleading Face", zh: "恳求脸" },
  { file: "79", en: "Wearing Shades", zh: "戴墨镜" },
  { file: "80", en: "Silly Drool", zh: "流口水" },
  { file: "81", en: "Thinking Face", zh: "思考脸" },
  { file: "82", en: "Pointing And Laughing In Tears", zh: "指笑流泪" },
  { file: "83", en: "Thumbs Up", zh: "点赞" },
  { file: "84", en: "OK Sign", zh: "OK手势" },
  { file: "85", en: "Suspicious Big Eye", zh: "大眼怀疑" },
  { file: "86", en: "Double Thumbs Up", zh: "双点赞" },
  { file: "87", en: "Scared and Defending", zh: "害怕防御" },
  { file: "88 (1)", en: "Frustrated", zh: "沮丧" },
  { file: "88", en: "Laughing in Tears", zh: "笑哭" },
  { file: "89", en: "Salute", zh: "敬礼" },
  { file: "90", en: "Party", zh: "派对" },
  { file: "91", en: "Shy", zh: "害羞" },
  { file: "92", en: "Ohh Face", zh: "哦脸" },
  { file: "93", en: "Desperate", zh: "绝望" },
  { file: "94", en: "Troll Face", zh: "滑稽脸" }
];

const BACKGROUNDS = [
  { file: "mw3", en: "Modern Warfare 3", zh: "现代战争3" },
  { file: "ikea", en: "IKEA", zh: "宜家" },
  { file: "batcave", en: "Batcave", zh: "蝙蝠洞" },
  { file: "ovaloffice", en: "Oval Office", zh: "椭圆形办公室" },
  { file: "clubstairs", en: "Club Stairs", zh: "俱乐部楼梯" },
  { file: "bull", en: "Wall Street Bull", zh: "华尔街公牛" },
  { file: "NYSE", en: "NYSE", zh: "纽约证券交易所" },
  { file: "mountains", en: "Mountains", zh: "山脉" },
  { file: "athens", en: "Athens", zh: "雅典" },
  { file: "delhislums", en: "Delhi Slums", zh: "德里贫民窟" },
  { file: "goldreserve", en: "Gold Reserve", zh: "黄金储备" },
  { file: "mars", en: "Mars", zh: "火星" },
  { file: "moon", en: "Moon", zh: "月球" },
  { file: "subway", en: "Subway", zh: "地铁" },
  { file: "creek", en: "Creek", zh: "小溪" },
  { file: "mcdonalds", en: "McDonald's", zh: "麦当劳" },
  { file: "tokyo", en: "Tokyo", zh: "东京" },
  { file: "cali", en: "California", zh: "加利福尼亚" },
  { file: "dubai", en: "Dubai", zh: "迪拜" },
  { file: "yacht", en: "Yacht", zh: "游艇" },
  { file: "trenches", en: "Trenches", zh: "战壕" },
  { file: "white", en: "White", zh: "白色" },
  { file: "black", en: "Black", zh: "黑色" },
  { file: "red", en: "Red", zh: "红色" },
  { file: "purple", en: "Purple", zh: "紫色" },
  { file: "periblue", en: "Periwinkle Blue", zh: "长春花蓝" },
  { file: "blue", en: "Blue", zh: "蓝色" },
  { file: "yellow", en: "Yellow", zh: "黄色" },
  { file: "peachpink", en: "Peach Pink", zh: "桃粉色" },
  { file: "pinkgradient", en: "Pink Gradient", zh: "粉色渐变" },
  { file: "paint", en: "Paint Splatter", zh: "油漆飞溅" },
  { file: "paint2", en: "Paint Drips", zh: "油漆滴落" },
  { file: "hearts", en: "Hearts", zh: "爱心" },
  { file: "clouds", en: "Clouds", zh: "云朵" },
  { file: "dreamysky", en: "Dreamy Sky", zh: "梦幻天空" },
  { file: "space", en: "Space", zh: "太空" },
  { file: "starcloud", en: "Star Cloud", zh: "星云" },
  { file: "blackhole", en: "Black Hole", zh: "黑洞" },
  { file: "beach", en: "Beach", zh: "海滩" }
];

const TEXT = {
  EN: {
    title: '🎨 Create Your Unique Joobi',
    subtitle: 'Mix and match colors, expressions, and backgrounds to create your perfect Joobi.',
    color: 'Color',
    expression: 'Expression',
    background: 'Background',
    download: 'Download Your Joobi',
    generating: 'Generating...',
    done: 'Download complete! Check your downloads folder.',
  },
  中文: {
    title: '🎨 创建属于你的 Joobi',
    subtitle: '混搭颜色、表情和背景，打造完美 Joobi。',
    color: '颜色',
    expression: '表情',
    background: '背景',
    download: '下载你的 Joobi',
    generating: '生成中...',
    done: '下载完成！请查看下载文件夹。',
  }
};

const Gallery = ({ language }) => {
  const [color, setColor] = useState('Red');
  const [expression, setExpression] = useState('01');
  const [bgIndex, setBgIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const currentBg = BACKGROUNDS[bgIndex].file;

  const generateRandomCombo = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)].en;
    const randomExpression = EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)].file;
    const randomBgIndex = Math.floor(Math.random() * BACKGROUNDS.length);

    const newCombo = {
      color: randomColor,
      expression: randomExpression,
      bgIndex: randomBgIndex
    };

    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newCombo);

    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);

    setColor(newCombo.color);
    setExpression(newCombo.expression);
    setBgIndex(newCombo.bgIndex);
  };

  const goBack = () => {
    if (currentIndex > 0) {
      const prev = history[currentIndex - 1];
      setColor(prev.color);
      setExpression(prev.expression);
      setBgIndex(prev.bgIndex);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');

    const bg = new Image();
    const emoji = new Image();

    bg.src = `/background/${currentBg}.jpeg`;
    emoji.src = `/Colored/${color}/${expression}.png`;

    bg.onload = () => {
      ctx.drawImage(bg, 0, 0, 1000, 1000);
      emoji.onload = () => {
ctx.drawImage(emoji, 30, 30, 940, 940);
        const link = document.createElement('a');
        link.download = `joobi_${color}_${expression}_${currentBg}.png`;
        link.href = canvas.toDataURL();
        link.click();
        setIsDownloading(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      };
    };
  };

  return (
    <motion.section 
      className="gallery-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="gallery-content">
        <motion.h2
          className="gallery-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {TEXT[language].title}
        </motion.h2>

        <motion.p
          className="gallery-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {TEXT[language].subtitle}
        </motion.p>

        <motion.div className="preview-container" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="preview-wrapper">
            <button className="nav-button left" onClick={goBack} disabled={currentIndex <= 0}>‹</button>

            <div 
              className="joobi-preview"
              style={{ backgroundImage: `url(/background/${currentBg}.jpeg)` }}
            >
              <motion.img
  src={`/Colored/${color}/${expression}.png`}
  alt="joobi"
  className="joobi-image"
  style={{ width: '325px', height: '325px' }} // or try 580/600px if you want
  whileHover={{ scale: 1.05 }}
/>

            </div>

            <button className="nav-button right" onClick={generateRandomCombo}>›</button>
          </div>
        </motion.div>

        <div className="controls-container">
          <div className="control-group">
            <label>{TEXT[language].color}</label>
            <motion.select 
              value={color} 
              onChange={e => setColor(e.target.value)}
              whileHover={{ scale: 1.02 }}
            >
              {COLORS.map(c => (
                <option key={c.en} value={c.en}>
                  {language === 'EN' ? c.en : c.zh}
                </option>
              ))}
            </motion.select>
          </div>

          <div className="control-group">
            <label>{TEXT[language].expression}</label>
            <motion.select 
              value={expression}
              onChange={e => setExpression(e.target.value)}
              whileHover={{ scale: 1.02 }}
            >
              {EXPRESSIONS.map(e => (
                <option key={e.file} value={e.file}>
                  {language === 'EN' ? e.en : e.zh}
                </option>
              ))}
            </motion.select>
          </div>

          <div className="control-group">
            <label>{TEXT[language].background}</label>
            <motion.select 
              value={bgIndex} 
              onChange={e => setBgIndex(parseInt(e.target.value))}
              whileHover={{ scale: 1.02 }}
            >
              {BACKGROUNDS.map((bg, i) => (
                <option key={i} value={i}>
                  {language === 'EN' ? bg.en : bg.zh}
                </option>
              ))}
            </motion.select>
          </div>
        </div>

        <motion.button
          className="download-button"
          onClick={handleDownload}
          disabled={isDownloading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDownloading ? TEXT[language].generating : TEXT[language].download}
        </motion.button>

        <AnimatePresence>
          {downloadSuccess && (
            <motion.div
              className="download-notification"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <span>{TEXT[language].done}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
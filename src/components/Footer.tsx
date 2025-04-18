import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="footer-content">
        <a href="https://github.com/Adrriii/pickr" target="_blank" rel="noopener noreferrer">
          {t('footer.github')} - Adrien Boitelle
        </a>
      </div>
      <div>{t('footer.copyright', { year: new Date().getFullYear() })}</div>
    </motion.footer>
  );
};
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DiceIcon } from '../DiceIcon';
import './Header.css';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.div className="header">
      <div className="header-content">
        <div className="title-group">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DiceIcon className="header-icon" /> {t('title')}
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
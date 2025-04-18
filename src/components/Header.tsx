import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DiceIcon } from '../DiceIcon';
import './Header.css';

export const Header = () => {
  const { t } = useTranslation();

  // JSON-LD structured data for better SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Pickr',
    'description': t('subtitle'),
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    }
  };

  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="title-group">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DiceIcon className="header-icon" aria-hidden="true" /> 
            <span>{t('title')}</span>
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
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </header>
  );
};
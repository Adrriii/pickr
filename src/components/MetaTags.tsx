import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mode } from './Sidebar';

interface MetaTagsProps {
  mode: Mode;
}

export const MetaTags = ({ mode }: MetaTagsProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Update meta description based on current mode
    const description = mode === 'list'
      ? 'Create and randomize lists with Pickr - A powerful tool for random selection and decision making.'
      : 'Generate random numbers within custom ranges using Pickr - A versatile random number generator tool.';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Update keywords based on mode
    const keywords = mode === 'list'
      ? 'random picker, list randomizer, decision maker, random selection, choice picker'
      : 'random number generator, number range picker, random integer generator, number randomizer';
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [mode, t]);

  return null;
};
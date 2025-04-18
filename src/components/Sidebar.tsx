import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

export type Mode = 'list' | 'numbers';

interface SidebarProps {
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
}

export const Sidebar = ({ currentMode, onModeChange }: SidebarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('aria.toggleMenu')}
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <motion.div 
            className="sidebar"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="mode-selector">
              <button 
                className={`mode-button ${currentMode === 'list' ? 'active' : ''}`}
                onClick={() => {
                  onModeChange('list');
                  if (isMobile) setIsOpen(false);
                }}
              >
                {t('modes.list')}
              </button>
              <button 
                className={`mode-button ${currentMode === 'numbers' ? 'active' : ''}`}
                onClick={() => {
                  onModeChange('numbers');
                  if (isMobile) setIsOpen(false);
                }}
              >
                {t('modes.numbers')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};
import { motion } from 'framer-motion'

interface DiceIconProps {
  size?: number;
  className?: string;
}

export const DiceIcon = ({ size = 48, className = '' }: DiceIconProps) => (
  <motion.svg 
    width={size} 
    height={size} 
    viewBox="0 0 256 256" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    initial={{ rotate: -10 }}
    animate={{ rotate: 0 }}
    whileHover={{ rotate: 10, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <rect width="256" height="256" rx="64" fill="url(#gradient)" />
    <circle cx="88" cy="88" r="16" fill="white"/>
    <circle cx="168" cy="88" r="16" fill="white"/>
    <circle cx="88" cy="168" r="16" fill="white"/>
    <circle cx="168" cy="168" r="16" fill="white"/>
    <circle cx="128" cy="128" r="16" fill="white"/>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="256" y2="256" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3498db"/>
        <stop offset="100%" stopColor="#2ecc71"/>
      </linearGradient>
    </defs>
  </motion.svg>
)
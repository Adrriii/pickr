import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { DiceIcon } from './DiceIcon'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [choices, setChoices] = useState<Array<{ id: string; text: string }>>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null)
  const uniqueId = useId()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.6,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.6,
      transition: {
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth exit
      }
    },
    highlighted: {
      scale: 1.05,
      backgroundColor: "#3498db",
      color: "white",
      borderColor: "#2980b9",
      boxShadow: "0 0 15px rgba(52, 152, 219, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    winner: {
      scale: 1.1,
      backgroundColor: "#2ecc71",
      color: "white",
      borderColor: "#27ae60",
      boxShadow: "0 0 20px rgba(46, 204, 113, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 8,
        duration: 0.5
      }
    }
  }

  const addChoice = () => {
    if (currentInput.trim()) {
      setChoices([...choices, { id: uniqueId + Date.now(), text: currentInput.trim() }])
      setCurrentInput('')
    }
  }

  const removeChoice = (index: number) => {
    setChoices(choices.filter((_, i) => i !== index))
    if (winnerIndex === index) {
      setWinnerIndex(null)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addChoice()
    }
  }

  const pickRandom = async () => {
    if (choices.length < 2) return
    
    setIsAnimating(true)
    setWinnerIndex(null)

    // Animation configuration
    const highlightDuration = 150 // increased for smoother animation
    const totalAnimationTime = 2000
    const numHighlights = Math.floor(totalAnimationTime / highlightDuration)
    
    // Create sequence of random indices, ensuring no consecutive duplicates
    const sequence: number[] = []
    let lastIndex = -1

    for (let i = 0; i < numHighlights; i++) {
      let nextIndex
      do {
        nextIndex = Math.floor(Math.random() * choices.length)
      } while (nextIndex === lastIndex && choices.length > 1)
      
      sequence.push(nextIndex)
      lastIndex = nextIndex
    }
    
    // Ensure final winner is different from last highlight
    let winner
    do {
      winner = Math.floor(Math.random() * choices.length)
    } while (winner === lastIndex && choices.length > 1)

    // Gradually slow down the animation
    for (let i = 0; i < sequence.length; i++) {
      setHighlightedIndex(sequence[i])
      // Increase duration progressively for a slowing down effect
      const currentDuration = highlightDuration * (1 + (i / sequence.length))
      await new Promise(resolve => setTimeout(resolve, currentDuration))
    }

    // Show the winner with a pause for dramatic effect
    setHighlightedIndex(null)
    await new Promise(resolve => setTimeout(resolve, 300))
    setWinnerIndex(winner)
    setIsAnimating(false)
  }

  return (
    <div className="container">
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

      <motion.div 
        className="input-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('inputPlaceholder')}
          className="choice-input"
        />
        <button onClick={addChoice} className="add-button">{t('addButton')}</button>
      </motion.div>

      <motion.div 
        className="choices-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout
      >
        <AnimatePresence mode="popLayout">
          {choices.map((choice, index) => (
            <motion.div
              key={choice.id}
              layoutId={choice.id}
              className="choice-item"
              variants={itemVariants}
              animate={
                highlightedIndex === index ? "highlighted" :
                winnerIndex === index ? "winner" : "visible"
              }
              exit="exit"
              layout
            >
              {choice.text}
              <button 
                onClick={() => removeChoice(index)} 
                className="remove-button"
                aria-label={t('removeLabel')}
                title={t('removeLabel')}
              >
                <span aria-hidden="true">×</span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {choices.length >= 2 && (
          <motion.button
            onClick={pickRandom}
            className="decide-button"
            disabled={isAnimating}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
          >
            {t('pickButton')}
          </motion.button>
        )}
      </AnimatePresence>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="footer-content">
          <a href="https://github.com/Adrriii/pickr" target="_blank" rel="noopener noreferrer">{t('footer.github')} - Adrien Boitelle</a>
        </div>
        <div>{t('footer.copyright', { year: new Date().getFullYear() })}</div>
      </motion.footer>
    </div>
  )
}

export default App

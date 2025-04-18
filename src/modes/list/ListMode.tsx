import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './ListMode.css'

interface ListItem {
  id: string;
  text: string;
}

export const ListMode = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState<ListItem[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null)

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
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
    },
    exit: { 
      opacity: 0,
      scale: 0.6,
    },
    highlighted: {
      scale: 1.02,
      backgroundColor: "#3498db",
      color: "white",
      borderColor: "#2980b9",
      boxShadow: "0 0 15px rgba(52, 152, 219, 0.5)",
    },
    winner: {
      scale: 1.05,
      backgroundColor: "#2ecc71",
      color: "white",
      borderColor: "#27ae60",
      boxShadow: "0 0 20px rgba(46, 204, 113, 0.6)",
    }
  }

  const addItem = () => {
    if (currentInput.trim()) {
      setItems([...items, { id: Date.now().toString(), text: currentInput.trim() }])
      setCurrentInput('')
    }
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
    if (winnerIndex === index) {
      setWinnerIndex(null)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  const pickRandom = async () => {
    if (items.length < 2) return
    
    setIsAnimating(true)
    setWinnerIndex(null)

    const highlightDuration = 150
    const totalAnimationTime = 2000
    const numHighlights = Math.floor(totalAnimationTime / highlightDuration)
    
    const sequence: number[] = []
    let lastIndex = -1

    for (let i = 0; i < numHighlights; i++) {
      let nextIndex
      do {
        nextIndex = Math.floor(Math.random() * items.length)
      } while (nextIndex === lastIndex && items.length > 1)
      
      sequence.push(nextIndex)
      lastIndex = nextIndex
    }
    
    let winner
    do {
      winner = Math.floor(Math.random() * items.length)
    } while (winner === lastIndex && items.length > 1)

    for (let i = 0; i < sequence.length; i++) {
      setHighlightedIndex(sequence[i])
      const currentDuration = highlightDuration * (1 + (i / sequence.length))
      await new Promise(resolve => setTimeout(resolve, currentDuration))
    }

    setHighlightedIndex(null)
    await new Promise(resolve => setTimeout(resolve, 300))
    setWinnerIndex(winner)
    setIsAnimating(false)
  }

  return (
    <>
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
        <button onClick={addItem} className="add-button">{t('addButton')}</button>
      </motion.div>

      <motion.div 
        className="choices-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout="position"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              className="choice-item"
              variants={itemVariants}
              animate={
                highlightedIndex === index ? "highlighted" :
                winnerIndex === index ? "winner" : "visible"
              }
              exit="exit"
              layout="position"
              initial={false}
            >
              {item.text}
              <button 
                onClick={() => removeItem(index)} 
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
        {items.length >= 2 && (
          <motion.button
            onClick={pickRandom}
            className="decide-button"
            disabled={isAnimating}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('pickButton')}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './NumbersMode.css'

export const NumbersMode = () => {
  const { t } = useTranslation()
  const [min, setMin] = useState<string>('0')
  const [max, setMax] = useState<string>('100')
  const [result, setResult] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, '')
    setMin(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, '')
    setMax(value)
  }

  const generateRandomSequence = (start: number, end: number, count: number) => {
    const sequence = []
    for (let i = 0; i < count; i++) {
      sequence.push(Math.floor(Math.random() * (end - start + 1)) + start)
    }
    return sequence
  }

  const pickRandom = async () => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    
    if (isNaN(minNum) || isNaN(maxNum) || minNum >= maxNum) return
    
    setIsAnimating(true)
    setResult(null)

    const numSteps = 20
    const animationDuration = 1500
    const sequence = generateRandomSequence(minNum, maxNum, numSteps)
    
    for (let i = 0; i < sequence.length; i++) {
      setResult(sequence[i])
      await new Promise(resolve => 
        setTimeout(resolve, (animationDuration / numSteps) * (1 + i / numSteps))
      )
    }
    
    const finalNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    setResult(finalNumber)
    setIsAnimating(false)
  }

  return (
    <div className="numbers-container">
      <div className="range-inputs">
        <div className="input-group">
          <label className="input-label">{t('numbers.min')}</label>
          <motion.input
            type="text"
            className="number-input"
            value={min}
            onChange={handleMinChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
        <div className="input-group">
          <label className="input-label">{t('numbers.max')}</label>
          <motion.input
            type="text"
            className="number-input"
            value={max}
            onChange={handleMaxChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={result}
          className="result-display"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {result !== null ? result : '?'}
        </motion.div>
      </AnimatePresence>

      <motion.button
        className="pick-button"
        onClick={pickRandom}
        disabled={isAnimating || isNaN(parseInt(min)) || isNaN(parseInt(max)) || parseInt(min) >= parseInt(max)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('pickButton')}
      </motion.button>
    </div>
  )
}
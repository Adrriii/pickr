import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './NumbersMode.css'

export const NumbersMode = () => {
  const { t } = useTranslation()
  const [min, setMin] = useState<string>('0')
  const [max, setMax] = useState<string>('100')
  const [result, setResult] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, '')
    setMin(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, '')
    setMax(value)
  }

  const pickRandom = async () => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    
    if (isNaN(minNum) || isNaN(maxNum) || minNum >= maxNum) return
    
    setIsAnimating(true)
    setShowSuccess(false)
    setResult(null)

    // Increased number of steps and variable delay
    const steps = 40
    const initialDelay = 20 // Start very fast
    const finalDelay = 200 // End slower

    for (let i = 0; i < steps; i++) {
      const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
      setResult(randomNumber)

      // Calculate increasing delay using easeInQuad function
      const progress = i / steps
      const currentDelay = initialDelay + (finalDelay - initialDelay) * (progress * progress)
      await new Promise(resolve => setTimeout(resolve, currentDelay))
    }

    // Final number with success animation
    const finalNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    setResult(finalNumber)
    setShowSuccess(true)
    setIsAnimating(false)
  }

  return (
    <div className="numbers-container">
      <div className="range-inputs">
        <div className="input-group">
          <label className="input-label">{t('numbers.min')}</label>
          <input
            type="text"
            className="number-input"
            value={min}
            onChange={handleMinChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label">{t('numbers.max')}</label>
          <input
            type="text"
            className="number-input"
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>

      <div className={`result-display ${showSuccess ? 'success' : ''}`}>
        {result !== null ? result : '?'}
      </div>

      <button
        className="pick-button"
        onClick={pickRandom}
        disabled={isAnimating || isNaN(parseInt(min)) || isNaN(parseInt(max)) || parseInt(min) >= parseInt(max)}
      >
        {t('pickButton')}
      </button>
    </div>
  )
}
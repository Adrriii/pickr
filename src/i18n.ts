import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      title: 'Pickr',
      subtitle: "Let's help you choose!",
      inputPlaceholder: 'Enter a choice...',
      addButton: 'Add',
      pickButton: 'Pick!',
      removeLabel: 'Remove choice',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  },
  fr: {
    translation: {
      title: 'Pickr',
      subtitle: 'Aidons-vous à choisir !',
      inputPlaceholder: 'Entrez un choix...',
      addButton: 'Ajouter',
      pickButton: 'Choisir !',
      removeLabel: 'Supprimer le choix',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  },
  es: {
    translation: {
      title: 'Pickr',
      subtitle: '¡Te ayudamos a elegir!',
      inputPlaceholder: 'Ingresa una opción...',
      addButton: 'Agregar',
      pickButton: '¡Elegir!',
      removeLabel: 'Eliminar opción',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
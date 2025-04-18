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
  },
  de: {
    translation: {
      title: 'Pickr',
      subtitle: 'Lass uns dir bei der Auswahl helfen!',
      inputPlaceholder: 'Gib eine Option ein...',
      addButton: 'Hinzufügen',
      pickButton: 'Wählen!',
      removeLabel: 'Option entfernen',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  },
  it: {
    translation: {
      title: 'Pickr',
      subtitle: 'Aiutiamoti a scegliere!',
      inputPlaceholder: 'Inserisci una scelta...',
      addButton: 'Aggiungi',
      pickButton: 'Scegli!',
      removeLabel: 'Rimuovi scelta',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  },
  ja: {
    translation: {
      title: 'Pickr',
      subtitle: '選択をお手伝いします！',
      inputPlaceholder: '選択肢を入力...',
      addButton: '追加',
      pickButton: '選ぶ！',
      removeLabel: '選択肢を削除',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  },
  ko: {
    translation: {
      title: 'Pickr',
      subtitle: '선택을 도와드립니다!',
      inputPlaceholder: '옵션을 입력하세요...',
      addButton: '추가',
      pickButton: '선택!',
      removeLabel: '옵션 삭제',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      }
    }
  },
  zh: {
    translation: {
      title: 'Pickr',
      subtitle: '让我们帮您选择！',
      inputPlaceholder: '输入选项...',
      addButton: '添加',
      pickButton: '选择！',
      removeLabel: '删除选项',
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
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      title: 'Pickr',
      subtitle: "Let's help you choose!",
      inputPlaceholder: 'Add a choice...',
      inputPlaceholderNumbers: 'Enter a number...',
      addButton: 'Add',
      pickButton: 'Random Pick!',
      removeLabel: 'Remove choice',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: 'From',
        max: 'To'
      },
      modes: {
        list: 'List',
        numbers: 'Numbers'
      },
      aria: {
        toggleMenu: 'Toggle menu'
      }
    }
  },
  fr: {
    translation: {
      title: 'Pickr',
      subtitle: 'Faites votre choix !',
      inputPlaceholder: 'Ajoutez une option...',
      inputPlaceholderNumbers: 'Entrez un nombre...',
      addButton: 'Ajouter',
      pickButton: 'Tirer au sort',
      removeLabel: 'Retirer cette option',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: 'De',
        max: 'À'
      },
      modes: {
        list: 'Liste',
        numbers: 'Nombres'
      },
      aria: {
        toggleMenu: 'Basculer le menu'
      }
    }
  },
  es: {
    translation: {
      title: 'Pickr',
      subtitle: '¡Te ayudamos a elegir!',
      inputPlaceholder: 'Añade una opción...',
      inputPlaceholderNumbers: 'Introduce un número...',
      addButton: 'Agregar',
      pickButton: '¡Al azar!',
      removeLabel: 'Eliminar opción',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: 'Desde',
        max: 'Hasta'
      },
      modes: {
        list: 'Lista',
        numbers: 'Números'
      },
      aria: {
        toggleMenu: 'Alternar menú'
      }
    }
  },
  de: {
    translation: {
      title: 'Pickr',
      subtitle: 'Lass uns dir bei der Auswahl helfen!',
      inputPlaceholder: 'Füge eine Option hinzu...',
      inputPlaceholderNumbers: 'Geben Sie eine Zahl ein...',
      addButton: 'Hinzufügen',
      pickButton: 'Zufällig wählen!',
      removeLabel: 'Option entfernen',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: 'Von',
        max: 'Bis'
      },
      modes: {
        list: 'Liste',
        numbers: 'Zahlen'
      },
      aria: {
        toggleMenu: 'Menü umschalten'
      }
    }
  },
  it: {
    translation: {
      title: 'Pickr',
      subtitle: 'Aiutiamoti a scegliere!',
      inputPlaceholder: 'Aggiungi una scelta...',
      inputPlaceholderNumbers: 'Inserisci un numero...',
      addButton: 'Aggiungi',
      pickButton: 'Scelta casuale!',
      removeLabel: 'Rimuovi scelta',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: 'Da',
        max: 'A'
      },
      modes: {
        list: 'Lista',
        numbers: 'Numeri'
      },
      aria: {
        toggleMenu: 'Attiva/disattiva menu'
      }
    }
  },
  ja: {
    translation: {
      title: 'Pickr',
      subtitle: '選択をお手伝いします！',
      inputPlaceholder: '選択肢を追加...',
      inputPlaceholderNumbers: '数字を入力してください...',
      addButton: '追加',
      pickButton: 'ランダムに選ぶ！',
      removeLabel: '選択肢を削除',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: 'から',
        max: 'まで'
      },
      modes: {
        list: 'リスト',
        numbers: '数値'
      },
      aria: {
        toggleMenu: 'メニューの切り替え'
      }
    }
  },
  ko: {
    translation: {
      title: 'Pickr',
      subtitle: '선택을 도와드립니다!',
      inputPlaceholder: '옵션을 추가하세요...',
      inputPlaceholderNumbers: '숫자를 입력하세요...',
      addButton: '추가',
      pickButton: '랜덤 선택!',
      removeLabel: '옵션 삭제',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: '부터',
        max: '까지'
      },
      modes: {
        list: '목록',
        numbers: '숫자'
      },
      aria: {
        toggleMenu: '메뉴 토글'
      }
    }
  },
  zh: {
    translation: {
      title: 'Pickr',
      subtitle: '让我们帮您选择！',
      inputPlaceholder: '添加选项...',
      inputPlaceholderNumbers: '输入一个数字...',
      addButton: '添加',
      pickButton: '随机选择！',
      removeLabel: '删除选项',
      footer: {
        github: 'GitHub',
        copyright: '{{year}} Pickr'
      },
      numbers: {
        min: '从',
        max: '到'
      },
      modes: {
        list: '列表',
        numbers: '数字'
      },
      aria: {
        toggleMenu: '切换菜单'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
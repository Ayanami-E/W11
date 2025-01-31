import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      frontPage: "This is the front page"
    }
  },
  fi: {
    translation: {
      Home: "Etusivu",
      About: "Tietoa Meistä",
      frontPage: "Tämä on etusivu"
    }
  }
}

i18n
  .use(HttpBackend)               
  .use(LanguageDetector)          
  .use(initReactI18next)          
  .init({
    resources,
    fallbackLng: 'en',            
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

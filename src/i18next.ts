import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './assets/translations/en.json';
import arTranslation from './assets/translations/ar.json';
import Cookies from 'js-cookie';


// Translations
const resources = {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
}


const lang: any = Cookies.get('language');
const setDefaultLang = () => {
    Cookies.set('language', 'en');
    return 'en';
}

i18n
    .use(initReactI18next) // Bind i18n to React
    .init({
        resources,
        lng: lang ? lang : setDefaultLang(), // Default language
        fallbackLng: 'en', // Fallback language if a translation is missing
        interpolation: {
            escapeValue: false, // React already protects against XSS
        },
    });

export default i18n;

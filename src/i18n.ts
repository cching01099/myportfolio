import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locale/en/strings.json";
import translationZh from "./locale/zh-TW/strings.json";


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEn },
            zh: { translation: translationZh },
        },
        lng: 'zh',
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// @ts-expect-error TS(2732): Cannot find module './locale/en/strings.json'. Con... Remove this comment to see the full error message
import translationEn from "./locale/en/strings.json";
// @ts-expect-error TS(2732): Cannot find module './locale/zh-TW/strings.json'. ... Remove this comment to see the full error message
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

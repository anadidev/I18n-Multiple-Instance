import i18next from 'i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Instance2key": "Text From Instance 2",
    },
  },
  fr: {
    translation: {
      "Instance2key": "Texte à partir de l'instance 2",
    },
  },
};

const i18nInstance2 = i18next.createInstance(
  {
    lng: "en",
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    resources: resources,
  },
  // We must provide a function as second parameter, otherwise i18next errors
  (err, t) => {
    if (err) return console.log(err);
  }
);

export default i18nInstance2;

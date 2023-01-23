import i18next from "i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Instance1key": "Text From Instance 1",
    },
  },
  fr: {
    translation: {
      "Instance1key": "Texte à partir de l'instance 1",
    },
  },
};

const i18nInstance1 = i18next.createInstance(
  {
    lng: "fr",
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

export default i18nInstance1;

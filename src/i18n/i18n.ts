import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import nl from './locales/nl.json';
import pl from './locales/pl.json';
import ru from './locales/ru.json';
import tr from './locales/tr.json';
import sv from './locales/sv.json';
import no from './locales/no.json';
import da from './locales/da.json';
import fi from './locales/fi.json';
import el from './locales/el.json';
import uk from './locales/uk.json';
import ro from './locales/ro.json';
import cs from './locales/cs.json';
import zhCN from './locales/zh-CN.json';
import zhHK from './locales/zh-HK.json';
import ja from './locales/ja.json';
import hi from './locales/hi.json';
import ar from './locales/ar.json';
import sw from './locales/sw.json';
import am from './locales/am.json';
import ha from './locales/ha.json';
import yo from './locales/yo.json';
import zu from './locales/zu.json';
import af from './locales/af.json';
import ig from './locales/ig.json';
import so from './locales/so.json';
import ti from './locales/ti.json';
import xh from './locales/xh.json';
import ln from './locales/ln.json';
import rw from './locales/rw.json';
import sn from './locales/sn.json';
import st from './locales/st.json';

const RTL_LANGUAGES = ['ar'];

const setDocumentDirection = (lng: string) => {
  document.documentElement.dir = RTL_LANGUAGES.includes(lng) ? 'rtl' : 'ltr';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      es: { translation: es },
      it: { translation: it },
      pt: { translation: pt },
      nl: { translation: nl },
      pl: { translation: pl },
      ru: { translation: ru },
      tr: { translation: tr },
      sv: { translation: sv },
      no: { translation: no },
      da: { translation: da },
      fi: { translation: fi },
      el: { translation: el },
      uk: { translation: uk },
      ro: { translation: ro },
      cs: { translation: cs },
      'zh-CN': { translation: zhCN },
      'zh-HK': { translation: zhHK },
      ja: { translation: ja },
      hi: { translation: hi },
      ar: { translation: ar },
      sw: { translation: sw },
      am: { translation: am },
      ha: { translation: ha },
      yo: { translation: yo },
      zu: { translation: zu },
      af: { translation: af },
      ig: { translation: ig },
      so: { translation: so },
      ti: { translation: ti },
      xh: { translation: xh },
      ln: { translation: ln },
      rw: { translation: rw },
      sn: { translation: sn },
      st: { translation: st },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', setDocumentDirection);
setDocumentDirection(i18n.language);

export default i18n;

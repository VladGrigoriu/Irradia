import { defineStore } from 'pinia'
import { loadLanguageAsync } from "@/i18n/i18n";

export const useLocaleStore = defineStore('locale', {
    state: () => {
      return { 
        locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
        locales: ["en", "it"]
    }
    },
    

    actions: {
      setLocale(locale) {
        loadLanguageAsync(locale);
      },
     
    },
  })
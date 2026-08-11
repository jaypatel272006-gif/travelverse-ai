// TravelVerse AI Centralized Logger
const isDev = import.meta.env.DEV;

export const logger = {
  debug: (...args) => {
    if (isDev) {
      console.debug('[DEBUG]', ...args);
    }
  },
  info: (...args) => {
    if (isDev) {
      console.info('[INFO]', ...args);
    }
  },
  warn: (...args) => {
    if (isDev) {
      console.warn('[WARN]', ...args);
    }
  },
  error: (...args) => {
    // Production: Always report actual errors to help stability monitoring
    console.error('[ERROR]', ...args);
  }
};

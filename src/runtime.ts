import { initCSSPropertiesV2 as initCSSProperties } from './core';

const isBrowser =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined';

let readyPromise: Promise<void> | undefined;

export function initLiquidGlass(): Promise<void> {
  if (!isBrowser) return Promise.resolve();

  readyPromise ??= initCSSProperties().then(() => {
    window.dispatchEvent(new CustomEvent('liquidglass:ready'));
  });

  return readyPromise;
}

// Backward-compatible side effect for `import "liquidglass.css"`.
void initLiquidGlass();

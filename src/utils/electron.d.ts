interface Electron {
  notify: (message: string) => void;
  setTitle: (title: string) => void;
}
export {};
declare global {
  interface Window {
    electron: Electron;
  }
}

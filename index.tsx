
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 1. Standart Mount (Doğrudan Vercel linkiyle açıldığında)
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 2. Wix Custom Element Tanımı (Wix Studio içinde kullanıldığında)
class RedPixelApp extends HTMLElement {
  private root: any = null;

  connectedCallback() {
    // Kendi içine bir container oluşturur
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    this.appendChild(container);

    this.root = createRoot(container);
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

if (typeof window !== 'undefined' && !customElements.get('red-pixel-app')) {
  customElements.define('red-pixel-app', RedPixelApp);
}

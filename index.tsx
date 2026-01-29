
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Wix Studio Custom Element Desteği
 */
class RedPixelElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.render();
  }

  render() {
    if (this.root) {
      this.root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

// Custom Element'i tanımla
if (typeof window !== 'undefined' && !customElements.get('red-pixel-app')) {
  customElements.define('red-pixel-app', RedPixelElement);
}

/**
 * Standart Root Mount (Vercel Önizleme için)
 * index.html içindeki id="root" olan div'i hedefler.
 */
const rootElement = document.getElementById('root');
if (rootElement && !rootElement.hasChildNodes()) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

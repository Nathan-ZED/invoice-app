import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { InvoiceContextProvider } from "./contexts/InvoiceContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeContextProvider>
          <InvoiceContextProvider>
            <App />
          </InvoiceContextProvider>
      </ThemeContextProvider>
  </React.StrictMode>,
)

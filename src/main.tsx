import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {FirefuseProvider} from "@firefuse/react";
import {firebaseAuth} from "./config/firebase.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FirefuseProvider
        domain={import.meta.env.VITE_DOMAIN}
        redirectUrl={window.location.origin}
        firebaseAuth={firebaseAuth}
      >
        <App />
      </FirefuseProvider>
    </BrowserRouter>
  </StrictMode>,
)

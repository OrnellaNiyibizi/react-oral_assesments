import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TemperatureConverter from './temperature-converter';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemperatureConverter />
  </StrictMode>
);

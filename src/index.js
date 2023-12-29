import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from "./containers/App";

createRoot(document.getElementById('root')).render(<App />);
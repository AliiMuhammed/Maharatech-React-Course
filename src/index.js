import React from "react";
import Product from "./Product";

import "../node_modules/bootstrap/dist/css/bootstrap.css"

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Product />);

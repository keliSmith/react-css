import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '@/router/routerConfig';

import './global.less';

const App = () => useRoutes(routes);
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {<App />}
    </BrowserRouter>
  </StrictMode>
)

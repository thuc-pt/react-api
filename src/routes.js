import React from 'react';
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import FormProduct from './pages/products/FormProduct';

var routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/products',
    exact: true,
    main: () => <ProductsPage />
  },
  {
    path: '/products/new',
    exact: false,
    main: ({history}) => <FormProduct history={history} />
  },
  {
    path: '/products/:id/edit',
    exact: false,
    main: ({history}) => <FormProduct history={history} />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
import { GlobalStyle } from 'GlobalStyle';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('../Pages/Home/Home'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../Pages/Favorites/Favorites'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

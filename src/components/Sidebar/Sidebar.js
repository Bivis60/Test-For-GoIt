import { Suspense } from 'react';
import { List, ListText, Ul, Searchbar } from './Sidebar.styled';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      <Searchbar>
        <Ul>
          <List>
            <ListText to="/">home</ListText>
          </List>
          <List>
            <ListText to="catalog">catalog</ListText>
          </List>
          <List>
            <ListText to="favorites">favorites</ListText>
          </List>
        </Ul>
      </Searchbar>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

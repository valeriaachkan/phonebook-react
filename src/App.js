import { Navigate, Route, Routes } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <CssVarsProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CssVarsProvider>
    )
  );
};

// const [contacts, setContacts] = useState(() =>
//   JSON.parse(window.localStorage.getItem('contacts') ?? []),
// );
// const [filter, setFilter] = useState('');

// useEffect(
//   () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
//   [contacts],
// );

// const addNewContact = ({ name, number }) => {
//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   setContacts(contacts => [...contacts, newContact]);
// };

// const deleteContact = contactId => {
//   setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
// };

// const handleChangeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

// const filteredContacts = () => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const filteredContactList = filteredContacts();

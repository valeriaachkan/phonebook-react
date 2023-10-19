import { Grid, Sheet } from '@mui/joy';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Form from '../components/Form';
import ModeToggle from '../components/ModeToggle/ModeToggle';
import UserMenu from '../components/UserMenu/UserMenu';
import { fetchContacts } from '../redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        xs={6}
        sx={{
          minHeight: '100vh',
          position: 'relative',
          py: '40px',
          px: '40px',
        }}>
        <UserMenu />
        <ModeToggle />
        <Form />
      </Grid>
      <Grid xs={6}>
        <Sheet
          variant="plain"
          sx={{
            minHeight: '100vh',
            py: '60px',
            px: '40px',
          }}>
          <Filter />
          <ContactList />
        </Sheet>
      </Grid>
    </Grid>
  );
}

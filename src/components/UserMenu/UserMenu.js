import { Button, Sheet, Typography } from '@mui/joy';
import Person from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Box } from '@mui/system';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(name);
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 999,
        top: '1.5rem',
        left: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
      <Sheet
        variant="plained"
        color="neutral"
        sx={{
          width: '32px',
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          boxShadow: 'sm',
        }}>
        <Person />
      </Sheet>
      <Typography level="body-lg">
        Hello, <Typography level="title-lg">{name}</Typography>
      </Typography>
      <Button
        onClick={() => {
          dispatch(logout());
        }}
        variant="plained"
        color="neutral"
        size="sm"
        sx={{ p: 0 }}>
        <Logout fontSize="10px" />
      </Button>
    </Box>
  );
}

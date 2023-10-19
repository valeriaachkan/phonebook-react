import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <Box sx={{ maxWidth: '500px', mx: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <Stack gap={1}>
          <FormControl required>
            <FormLabel>Username</FormLabel>
            <Input type="text" name="name" autoComplete="off" />
          </FormControl>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" autoComplete="off" />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
        </Stack>
        <Stack gap={2} sx={{ mt: 3 }}>
          <Button type="submit" fullWidth>
            Sign up
          </Button>
          <Typography
            endDecorator={
              <Link color="#0b6bcb" to="/login">
                Log in
              </Link>
            }
            fontSize="md"
            justifyContent="center">
            Already have an account?
          </Typography>
        </Stack>
      </form>
    </Box>
  );
};

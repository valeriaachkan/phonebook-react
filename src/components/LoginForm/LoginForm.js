import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
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
            Log in
          </Button>
          <Typography
            endDecorator={
              <Link color="#0b6bcb" to="/register">
                Sign up
              </Link>
            }
            fontSize="md"
            justifyContent="center">
            Don&apos;t have an account?
          </Typography>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;

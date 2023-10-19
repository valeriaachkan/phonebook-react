import { Box, Stack, Typography } from '@mui/joy';
import LoginForm from '../components/LoginForm';
import Section from '../components/Section/Section';
import TwoSidedLayout from '../components/TwoSidedLayout/TwoSidedLayout';

export default function Login() {
  return (
    <TwoSidedLayout>
      <Box
        sx={{
          textAlign: 'center',
          mt: '90px',
        }}>
        <Stack gap={2}>
          <Typography level="h1">Welcome to Phonebook App</Typography>
          <Typography level="title-lg" color="primary">
            Effortless Contact Management: Your Phonebook, Your Peace of Mind!
          </Typography>
        </Stack>
      </Box>
      <Section title={'Log in to continue.'}>
        <LoginForm />
      </Section>
    </TwoSidedLayout>
  );
}

import { Box, Stack, Typography } from '@mui/joy';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import Section from '../components/Section/Section';
import TwoSidedLayout from '../components/TwoSidedLayout/TwoSidedLayout';

export default function Register() {
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
      <Section title={'Please enter your details.'}>
        <RegisterForm />
      </Section>
    </TwoSidedLayout>
  );
}

import Grid from '@mui/joy/Grid';
import ModeToggle from '../ModeToggle/ModeToggle';

export default function TwoSidedLayout({ children }) {
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
        <ModeToggle />
        {children}
      </Grid>
      <Grid
        xs={6}
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.level1',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></Grid>
    </Grid>
  );
}

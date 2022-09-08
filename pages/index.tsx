import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        sx={{
          // my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
      </Box>
    </Container>
  );
};

export default Home;

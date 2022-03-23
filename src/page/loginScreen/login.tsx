import {Box,} from '@mui/material';
import Footer from '../../component/footer/footer';
import Logo from '../../component/logo/logo';
import { Form } from './form/form';


const loginScreen = () => {
  return (
    <div>
      <Logo/>
      <Box
        sx={{
          position: 'relative',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`
          }
        }}
      >
        <Box sx={{paddingTop: 35,}}  className="banner__bg">
          <Form />
        </Box>
      </Box>
      <Footer/>
    </div>
  );
}
export default loginScreen
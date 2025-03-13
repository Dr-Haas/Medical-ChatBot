import styled from 'styled-components';
import ChatGPTForm from './components/ChatGPTForm/ChatGPTForm'
import { ToastContainer } from 'react-toastify';
import LogoRecovv from './assets/logo-recovv.png';
import { Box } from './components/Atoms/Box/Box';

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  position: relative;
  justify-content: space-between;
  background-color: #1976d2;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h1`
  color: white;
  margin: 0;
  font-size: 1.8rem;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <ToastContainer />
      <Header>
        <Box style={{position:'absolute'}} top="0" left="0">
          <img src={LogoRecovv} alt="Logo"  style={{width: '100px'}}/>
        </Box>
        <Box $flex $justifycenter style={{position: 'relative'}}>
          <Box >
            <HeaderTitle>Assistant virtuel à la Rédaction Médicale</HeaderTitle>
          </Box>
        </Box>
      </Header>
      <ChatGPTForm />
    </AppContainer>
  );
}

export default App;

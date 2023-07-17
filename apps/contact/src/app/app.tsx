import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>hehe</h1>
      <NxWelcome title="contact" />
    </StyledApp>
  );
}

export default App;

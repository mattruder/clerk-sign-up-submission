
import '../Styles/App.css';
import { ClerkProvider, SignUp, SignIn } from "@clerk/clerk-react";

import SignUpComponent from './SignUpComponent'


function App() {

  const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;



  return (
    <ClerkProvider
    frontendApi={frontendApi}
    appearance={{
      variables: {
        colorPrimary: '#00adb5',
        colorBackground: '#393E46',
        fontSize: 'm',
        colorText: '#00adb5',
        colorInputText: '#EEEEEE',
        colorTextSecondary: "#EEEEEE",
        fontFamily: 'andale mono, monospace'
      }
    }}
    >
    <div className='sign-up-container'>
    <SignUpComponent />

    </div>
    </ClerkProvider>
  );
}

export default App;

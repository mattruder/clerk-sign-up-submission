import { ClerkProvider, SignUp } from '@clerk/clerk-react';


export default function SignUpComponent() {
  return (
    <SignUp
    appearance={{
      layout: {
      socialButtonsVariant: 'iconButton',
      socialButtonsPlacement: 'bottom'
    },
      variables: {
        colorAlphaShade: '#EEEEEE'
      }
  }}/>
  )
}

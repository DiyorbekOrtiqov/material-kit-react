import { Helmet } from 'react-helmet-async';

// import { LoginView } from 'src/sections/login';
import LoginView from 'src/sections/auth/Login/LoginView';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <LoginView />
    </>
  );
}

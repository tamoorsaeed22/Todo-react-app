import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  </div>
);

export default Layout;
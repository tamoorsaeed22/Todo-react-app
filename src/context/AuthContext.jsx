import PropTypes from 'prop-types';
import {
  useState,
  useContext,
  createContext,
  useEffect,
} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
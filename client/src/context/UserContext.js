import { createContext,useState,useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [authToken, setAuthToken] = useState(null);

  // Function to login and set token
  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  // Function to logout and remove token
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  // Load the token from storage on initial load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ authToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export default UserContext;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // No need to navigate here, Link will handle navigation
    }).catch(error => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div className='navbar'>
      <span className="logo">CCC Messenger</span>
      <div className="user">
        {currentUser && (
          <>
            <img src={currentUser.photoURL || ''} alt="" />
            <span>{currentUser.displayName || ''}</span>
          </>
        )}
        {/* Use Link component to navigate to "/" */}
        <Link to="/" onClick={handleSignOut}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;

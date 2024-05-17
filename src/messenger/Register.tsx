import React, { useState, FormEvent } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const displayName = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const file = (e.currentTarget.elements[3] as HTMLInputElement).files?.[0]; // Added optional chaining

    try {
      if (!file) {
        throw new Error("No file selected");
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CCC Messenger</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;

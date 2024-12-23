import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { auth } from "../firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //   create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   singOut user
  const singOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  //   singin user
  const singInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   update user
  const updateUser = (objInfo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, objInfo);
  };

  const singInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   to get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email = currentUser.email;
        try {
          axios
            .post(
              "http://localhost:5000/jwt",
              { email },
              { withCredentials: true }
            )
            .then((res) => {
              console.log(res.data);
            });
          setUser(currentUser);
          setLoader(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("user is logged out");
        setUser(null);
        setLoader(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loader,
    setLoader,
    createUser,
    singInUser,
    singOutUser,
    updateUser,
    singInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

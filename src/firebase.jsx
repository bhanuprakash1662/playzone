import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqVOL-vGy_MIqvMOCP6ihyXzeq5Qfg44Y",
  authDomain: "playzone-c04b5.firebaseapp.com",
  projectId: "playzone-c04b5",
  storageBucket: "playzone-c04b5.firebasestorage.app",
  messagingSenderId: "286203319393",
  appId: "1:286203319393:web:2dbb90284e9b24e810c620",
  measurementId: "G-XLPMPSR0M3"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export { auth,database };




// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBkRYurOhjDnYLsd1kLlnY3LMXC23eg9lU",
//   authDomain: "box-cricket-4572e.firebaseapp.com",
//   projectId: "box-cricket-4572e",
//   storageBucket: "box-cricket-4572e.appspot.com",
//   messagingSenderId: "695041258068",
//   appId: "1:695041258068:web:50613c2208de7cbdf6b3c1",
//   databaseURL: "https://box-cricket-4572e-default-rtdb.firebaseio.com",
//   measurementId: "G-FJL16H2HWB"
// };

//  const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
//  const database = getDatabase(app);
// export { createUserWithEmailAndPassword, signInWithEmailAndPassword,app,auth,database };

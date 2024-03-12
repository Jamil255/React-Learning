import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey:import.meta.env.VITE_REACT_API_KEY_URL,
    authDomain:import.meta.env.VITE_REACT_AUTH_ID_URL ,
    projectId: import.meta.env.VITE_REACT_PROJECT_ID_URL,
    storageBucket: "reactapp-df53f.appspot.com",
    messagingSenderId:import.meta.env. VITE_REACT_MESSAGE_ID_URL,
    appId: import.meta.env.VITE_REACT_API_ID_URL
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
    app, auth
}
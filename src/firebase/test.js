import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore/lite";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import * as admin from "firebase-admin";

// Nueva configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbsu8M9O7xqYm1e8GglXimz72WHwZYEcs",
  authDomain: "testingrules-9e446.firebaseapp.com",
  projectId: "testingrules-9e446",
  storageBucket: "testingrules-9e446.firebasestorage.app",
  messagingSenderId: "942887332570",
  appId: "1:942887332570:web:d2dde5c5fbf405b2ba53e3",
  measurementId: "G-F67B5YR4PH",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const serviceAccount = {
  projectId: "testingrules-9e446",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGF/Eh1fMlC6ZE\ngxWsRJe75OoUBEYTqTvbuznihTf/+WgrQQiFr+PE3YqO/ALMpWktD7jimBg9OUyK\njdizAKAPy7JRb51HupZZo9WsOGZTJvENqbk7qN5rggZ7anFRbcnMrukQXrmtDbPV\nH3Hqv5iVuAuhZ9WQP+JVr8AxMgck4FhkjC0+Jn8dm/BFfZLwVChiC0KUmChz/Ebs\n8+V86jmPcgPo/QKfAtKFWtM0ba8jmeW9WT/f25+z61LkZhFknSHuaik4jG7iGqAu\nbo2Z91q3fYWVF/2SjEPfs5jD58KRqGdn6r7T6F501yfraefv5sPK5N0uvMAKEhlK\nOhFHIWdlAgMBAAECggEAEuneSri+yl6ztVQ+vCqgbNQ3yp7N12VlIwmxRoDUY/Wl\njduxEJ1Gm1lRDW3fu+JfNGo34OAHZcZpbyEz+4NSb6+nNZdOkQwDpvNkR1lAi9fq\nqWn3FvcnUA8jcffWcfaQOfbJUe15akh7TxyoJ8hmAoWGtsEkkZfykvPWNIbuSlrl\n8iYB6Co4GT8moyt7xb2XNdeumt/waYZnZy815acwzlaNLI6G5pVTUBKgPwydvfs9\nVEDb2vcmYpMooVbtvZ/mV/Xyj1bHWC8XjAF4+wsO4FrbbrlWfazXBp0HC/jT/NGN\nv7OCkIheY1hzDDM1tbGaHkkmYq0Sbn98a1MW58C60QKBgQD9jNjiQqAwTva1wxyo\nnsXN3sWjzfWRooUjuxAHOUR1E6S0YMsPfV0QnxLi4xfaHfutjDCefqGUP35Olx+N\ncNfAJe/Oha1TKV52MkcF4J4khoBD0f0hmKam3ziW1tybDSZ2GK8TofHah3OkTqKN\ndr0BYmY/LZBsOcvN8LwZvyzLkwKBgQDIAexnXk7t8w9+0bczeURKjZKSLfTg8gZ0\nhHre/htwXEx8MJnjbivDGNLO62bfqXGuT+O66oN3qiX4t447GzKXTT014Tz8q8L+\nYebZTwe+3IfSJOFef5/s1HT+ZNbJ5eyXMn0W+570CbFeAFkV7CBwbNV8oKSeLpEE\nRBMDeF6MJwKBgBSMGHtliNPBYm7ia+0iSMdhOUUICNGPiRiXLTpYorqWJ+/SNEKC\nF0ukiIRIgQNVELNEvB/sBS4dYx/9UTpGHcXdjSyAWsZ1gMk1U9ofFNHC8JwOZWQW\nmdLGHjDjIqeSDj7dyzpdEltyRKXZFYU/TRvSnJScHasXl/ONgcDYZEnvAoGAKCDi\nqpasZWd3+2zeQfCZuA+RkcywrhVBIE2YTXdUUAXkvqINrijjlOA9I5DtcgCQM3YJ\n7e2xdOfpeG5zlf5N9zdjCZVoZBWeKOXBqGYH2s5qXcpSgWA/2QeDdasLwTRldKyH\nln3jlXkAYijVtuVKWOQtLTUZ8jbLl7yEyBR1e88CgYEAi/dBhyge39DTNSTS3KbS\ng+6LTL6qq4EIEMQkv3Tr7PSFgOnkQh4QP1HNDOW71wnesbKH2JgOrpRP4gqxWVoP\ncpVeu3T6BGDDWcm8bX07OaTf5L4gDGlCsEQFVv3bfyVG3/LDQEP+itmkU91R1c0P\ndKCRDU7tLLGU06s5zHMLkCE=\n-----END PRIVATE KEY-----\n",
  clientEmail:
    "firebase-adminsdk-fbsvc@testingrules-9e446.iam.gserviceaccount.com",
};

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(), // Asegúrate de tener las credenciales configuradas
});

// Función para iniciar sesión con un token personalizado
async function loginWithCustomToken(customToken) {
  try {
    const userCredential = await signInWithCustomToken(auth, customToken);
    console.log("Usuario autenticado con token:", userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error("Error al iniciar sesión con token:", error);
  }
}

// Función para probar la lectura de un documento
async function testReadDocument(docId) {
  try {
    const docRef = doc(db, "documents", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Documento leído:", docSnap.data());
    } else {
      console.log("No se encontró el documento.");
    }
  } catch (error) {
    console.error("Error al leer el documento:", error);
  }
}

// Función para probar la escritura de un documento
async function testWriteDocument(docId, data) {
  try {
    const docRef = doc(db, "documents", docId);
    await setDoc(docRef, data);
    console.log("Documento escrito con éxito.");
  } catch (error) {
    console.error("Error al escribir el documento:", error);
  }
}

// Ejemplo de uso
(async () => {
  const customToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczODAwMDQwNCwiZXhwIjoxNzM4MDA0MDA0LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uejk5N0BzcGhlcmVvbmUtdGVzdGluZy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLW56OTk3QHNwaGVyZW9uZS10ZXN0aW5nLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiZGlkOnByaXZ5OmNtNTJzeG9qMzA2ZndiZ3djZGZ3OThwYTIifQ.eec4gkwSz5akUVn18yB7N1rWNGKMBf0HCAqnlSBVZQmeNV4UgzIxj7U-ml13BYULoISiPEKfRIJ95rH87ZsaYY1RqHLT2FxNu9bqBmHjOaUGJk9nsLlkw5P4sfU8kyDE7lMIL5B7NvxHb3W5KUGTGEacu4MKvYbhvztAaHzHyuClzgp9NNVvv7axAhcY33OCDFx8uXhMM6-"; // Reemplaza con tu token personalizado

  const newToken = await admin.auth().createCustomToken("123465");

  const user = await loginWithCustomToken(newToken);
  console.log("USER", user);
  if (user) {
    await testReadDocument("testDocId");
    await testWriteDocument("testDocId", {
      owner: user.uid,
      content: "Hello, world!",
    });
  }
})();

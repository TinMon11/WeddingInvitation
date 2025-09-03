import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, signInAnonymously, connectAuthEmulator } from 'firebase/auth';

// Configuración para emuladores - SIN API keys
const firebaseConfig = {
  projectId: 'tincho-testing',
  apiKey: 'fake-api-key-for-emulator',
  authDomain: 'tincho-testing.firebaseapp.com',
  storageBucket: 'tincho-testing.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:abcdef123456'
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Conectar a emuladores INMEDIATAMENTE después de inicializar
console.log('🔌 Connecting to Firestore emulator at localhost:8080');
connectFirestoreEmulator(db, 'localhost', 8080);

console.log('🔌 Connecting to Auth emulator at localhost:9099');
connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

// Test de emuladores
async function testEmulators() {
  console.log('🧪 === TESTING FIREBASE EMULATORS ===');
  console.log('🌐 Environment variables:');
  console.log('   FIRESTORE_EMULATOR_HOST:', process.env.FIRESTORE_EMULATOR_HOST);
  console.log('   FIREBASE_AUTH_EMULATOR_HOST:', process.env.FIREBASE_AUTH_EMULATOR_HOST);
  console.log('🔌 Emulator connections established');
  
  try {
    // 1. Test de Auth
    console.log('1️⃣ Testing Auth emulator...');
    const userCredential = await signInAnonymously(auth);
    console.log('✅ Auth emulator working! User ID:', userCredential.user.uid);
    
    // 2. Test de Firestore - Escribir datos
    console.log('2️⃣ Testing Firestore emulator now - Writing data...');
    
    // Crear un documento con ID específico
    const testDocRef = doc(db, 'test-collection', 'test-doc-1');
    const testData = {
      message: 'Hello from emulator test!',
      timestamp: new Date().toISOString(),
      user: userCredential.user.uid,
      testNumber: 42,
      isWorking: true
    };
    
    await setDoc(testDocRef, testData);
    console.log('✅ Data written to Firestore!');
    console.log('📝 Document path:', testDocRef.path);
    console.log('📊 Data written:', testData);
    
    // 3. Test de Firestore - Leer datos
    console.log('3️⃣ Testing Firestore emulator - Reading data...');
    const readDoc = await getDoc(testDocRef);
    
    if (readDoc.exists()) {
      console.log('✅ Data read from Firestore!');
      console.log('📖 Document data:', readDoc.data());
      console.log('🆔 Document ID:', readDoc.id);
    } else {
      console.log('❌ Document not found!');
    }
    
    // 4. Test de Firestore - Colección automática
    console.log('4️⃣ Testing Firestore emulator - Auto-generated IDs...');
    const collectionRef = collection(db, 'auto-collection');
    const autoDocRef = await addDoc(collectionRef, {
      message: 'Auto-generated document',
      timestamp: new Date().toISOString(),
      randomValue: Math.random()
    });
    
    console.log('✅ Auto-generated document created!');
    console.log('🆔 Auto-generated ID:', autoDocRef.id);
    
    // 5. Test de Firestore - Leer documento específico de la data emulada
    console.log('5️⃣ Testing Firestore emulator - Reading specific document from emulated data...');
    const specificDocRef = doc(db, 'protocols', '0AL8xw6XSeWmDlx6laPd');
    const specificDoc = await getDoc(specificDocRef);
    
    if (specificDoc.exists()) {
      console.log('✅ Specific document found in emulated data!');
      console.log('📄 Document ID:', specificDoc.id);
      console.log('📊 Document data:', JSON.stringify(specificDoc.data(), null, 2));
    } else {
      console.log('❌ Specific document not found in emulated data!');
    }
    
    // 6. Test de Firestore - Listar documentos
    console.log('6️⃣ Testing Firestore emulator - Listing documents...');
    const querySnapshot = await getDocs(collection(db, 'test-collection'));
    
    console.log('✅ Documents listed!');
    console.log('📊 Total documents in test-collection:', querySnapshot.size);
    
    querySnapshot.forEach((doc) => {
      console.log('📄 Document:', doc.id, '=>', doc.data());
    });
    
    // 7. Verificar que los datos persisten
    console.log('7️⃣ Testing data persistence...');
    const verifyDoc = await getDoc(testDocRef);
    
    if (verifyDoc.exists() && verifyDoc.data().message === testData.message) {
      console.log('✅ Data persistence verified!');
    } else {
      console.log('❌ Data persistence failed!');
    }
    
    console.log('🎉 === ALL EMULATOR TESTS PASSED ===');
    console.log('🚀 Firebase emulators are working perfectly!');
    
    return {
      success: true,
      userId: userCredential.user.uid,
      documentsCreated: 2,
      documentsRead: 1,
      collectionsTested: ['test-collection', 'auto-collection']
    };
    
  } catch (error) {
    console.error('❌ === EMULATOR TEST FAILED ===');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    console.error('Stack:', error.stack);
    
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
}

// Ejecutar el test
if (typeof window === 'undefined') {
  // Node.js environment
  testEmulators().then(result => {
    if (result.success) {
      console.log('🎯 Test completed successfully:', result);
      process.exit(0);
    } else {
      console.error('💥 Test failed:', result);
      process.exit(1);
    }
  });
} else {
  // Browser environment
  window.testEmulators = testEmulators;
}

export { testEmulators };

// Import the CryptoJS library
import CryptoJS from 'crypto-js';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  // Function to encrypt data
  const encryptData = (data, secretKey) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  };

  // Function to decrypt data
  const decryptData = (encryptedData, secretKey) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  };

  // Function to store encrypted data in local storage
  const storeEncryptedData = (key, data, secretKey) => {
    const encryptedData = encryptData(data, secretKey);
    localStorage.setItem(key, encryptedData);
  };

  // Function to retrieve and decrypt data from local storage
  const getDecryptedData = (key, secretKey) => {
    const encryptedData = localStorage.getItem(key);
    if (!encryptedData) return null;
    return decryptData(encryptedData, secretKey);
  };

  useEffect(() => {
    const secretKey = 'mySecretKey123';
    const sampleData = { username: 'JohnDoe', email: 'john.doe@example.com' };

    // Store encrypted data in local storage
    storeEncryptedData('userData', sampleData, secretKey);

    // Retrieve and decrypt data from local storage
    const retrievedData = getDecryptedData('userData', secretKey);
    setData(retrievedData);
  }, []);

  return (
    <div className="App">
      <h1>Encrypted Local Storage</h1>
      {data && (
        <div>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;

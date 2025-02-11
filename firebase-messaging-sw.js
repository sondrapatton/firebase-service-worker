// firebase-messaging-sw.js

// Import Firebase scripts needed for the service worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker using your project's config
firebase.initializeApp({
  apiKey: "AIzaSyBdfjjJWVDpIiJbv2KzbBLcWYWDHxuQVv8",
  authDomain: "max-the-mojo-magician.firebaseapp.com",
  projectId: "max-the-mojo-magician",
  storageBucket: "max-the-mojo-magician.firebasestorage.app",
  messagingSenderId: "745311109578",
  appId: "1:745311109578:web:3209a01beae52141814f33",
  measurementId: "G-SVQKLTBDHY"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification details here
  const notificationTitle = payload.notification?.title || 'Background Message Title';
  const notificationOptions = {
    body: payload.notification?.body || 'Background Message body.',
    icon: '/firebase-logo.png' // Update this icon path as needed
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

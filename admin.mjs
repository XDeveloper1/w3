import admin from 'firebase-admin'

const serviceaccount = import('./firebase-admin.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceaccount),
    databaseURL:'https://whiterose-b962b-default-rtdb.firebaseio.com'
});

export default admin;
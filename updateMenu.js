const admin = require("firebase-admin");

serviceAccount = {
  "type": "service_account",
  "project_id": "superfood-cs374",
  "private_key_id": "bf74b3f71d6d9ae3389c4d483fdbfe0a2c654962",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/kzCCPs+O4UaS\n/VdmgvjdanZnN8sFP8Ig3KxufzoFDZHIYsD4J1CTvYelP/QLRKyiYoSb085i7/bc\n26s9o/QzVLWWuijWX9klblreGwCuVi9lfhR2cFJ19eoqt1e3VI1Gkx0FS0H06Unq\nv7gcX/dQj5PhnX3NI3iEmRT6JVVNNn1z9ib3oq2FNBTKi2glzNuv7+hfsyqdKX8Q\n2uI3aFZg4KELT0pzd1hGU3iPJU0qrWWVA85E1gRjtMYFJU/rGx2VDPZEDaFUxLrz\nn5nHzuQ4SvRvLzPZMH/3pzQyIVJ2EvwFbSPBo5GCFp7g0D9Y7Va84PJPNuLuZcbf\nRDBacuPtAgMBAAECggEATi1KhlwLZ0sW+bTYjcS0ueZQGx7xglraZX6n/w98JcO7\n0gI6rQmeICwfxpeqh06nBD0f0FdGyakTHF2oK6dUZ/4RfEjLkW/btSKrgieSx5H0\nFX616v87J1gLDxNygCXI4Rv3o8lqSP9KYrmJ8EpZKk7tEgyq4aOv8qxlmw7RGIiH\nH00lB62JvawTWnlWirwG6AQtCtvjVJE7T6J5P7zwlOD+Vw0xr8PY7K8P+EOl4FFd\n1BwaHcAg1FJZYpbu+WHSaAMIWUBssHJDycpUpK+iCXkegfq6Neu2g0Er5P8yb7q6\nWtEzE7JyxAZSmrT1W4n7RbUJlr4U+AIECEDbzejRIQKBgQDlNqXqHLmTaqUxz8Jo\na4ThYIlIYj/SmPbH8r1eMOSLHIC7fP41ZXGkAnY5DOMtRCkkYvaTMBk6EYyV7xlX\nioj+A84lXvZN7OKPkIhM9r/lLsF88cqFVpo9iCJE2QAxnDJ3NqmithTiwH2L3Iq9\nj6Mitul3w4XNfYGrDWQyaF6qQwKBgQDV9oO7stXxo86DWQH2k257E1WThF84nXak\nHjaMWezutIvSVZ1//JYMBLAFxof7QhxuyJXc31dWka+tFzE/qxLQhXoVd7r+FvNb\n5g6paKRV3bRGJNt9khNYbGHybcaeX2EmVYG+aezPxqREjYDasEFU4NLN+rudsP8a\nHQcVnrfODwKBgEvD/53eNt1qsAZCFZHskHTrMxXRHCWh2FkJfN0IrlLpbggLbf/6\nc1DyW1/KScGpuSvE5pqKmJwgNudMrITKTzQfz+F8fVAO0GkCLnu6SH4aMWz6g6YF\nlWBngmRdknnTlr7fO72EEG1PkXBMyzOTqioMainjYHQnW1hOSeN7qmb/AoGAWw+T\neSrfivvgRF55S2vrtU3BOgs4S2wYtjh1lr4e7GjCqT3uzi293leQYqTf8rtsRmnv\n/hS/owRV9CDOwP4Z/80O7FwMpV83K4F58/epGTJGKyQ8lfC5cwSNmxPFWFnXiu0R\nTuzd8H/mIZbnpCsnYuxcS3XOq4pMx9xay4TFTVkCgYEA2STm8OnDfreOfdOjm63j\naRLVYJILLNYa4FPXuIP9UmOuvV1K+1+AbHvY28TyJXyPUeueG0Hr4634KtQkHv6z\nKhfMyfJGp8iy8l+FRMLT/b8sJte2d7yOBh7rhoMe5cbhOJKWwjjrtyGNBYhZdoVG\ny5XmVqzvgfeCLYw/Zt3OZFk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-n4omv@superfood-cs374.iam.gserviceaccount.com",
  "client_id": "105607051459304054814",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n4omv%40superfood-cs374.iam.gserviceaccount.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://superfood-cs374.firebaseio.com"
});

var db = admin.database();

//put MENU NAME here
var name = 'Fried Chicken'

menuRef = db.ref(name);

menuRef.set({
	region: 'global',
	breakfast: false,
	diabetes: false,
	hypertension: false,
	nopeanut: false,
	nomilk: false,
	imageurl: ''
});

menuRef.on("value", snapshot => {
	console.log(name,snapshot.val());
}, error => {
    console.error(error);
});

//for remove purpose
/* menuRef.remove(); */

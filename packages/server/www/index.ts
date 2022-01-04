import http from 'http';
import Gun from 'gun';

const server = http.createServer();

const PORT = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || 8765;

const www = server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening at: http://localhost:' + PORT);
});

// eslint-disable-next-line no-console
console.log({
  key: process.env.AWS_ACCESS_KEY_ID, // AWS Access Key
  secret: process.env.AWS_SECRET_ACCESS_KEY, // AWS Secret Token
  bucket: process.env.AWS_S3_BUCKET, // The bucket you want to save into
});

Gun({
  web: www,
  file: 'data.json',
  s3: {
    key: process.env.AWS_ACCESS_KEY_ID, // AWS Access Key
    secret: process.env.AWS_SECRET_ACCESS_KEY, // AWS Secret Token
    bucket: process.env.AWS_S3_BUCKET, // The bucket you want to save into
  },
});
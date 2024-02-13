const dotenv = require('dotenv');
const app = require('./app');
const setupDB = require('./config/database.config');

dotenv.config({ path: './config.env' });

setupDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

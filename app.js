const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected!');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});

module.exports = app;
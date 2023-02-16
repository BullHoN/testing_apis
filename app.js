const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

const todos = [{ name: 'assdg', completed: false }];

app.get('/todos', async (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', async (req, res) => {
  if (req.params.id != '1') {
    res.send(404);
    return;
  }
  res.json(todos[0]);
});

app.post('/todos', async (req, res) => {
  res.status(201).json({ ...req.body, completed: false });
});

module.exports = app;

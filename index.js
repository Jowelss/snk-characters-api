import express from 'express';
import characters, { data } from './character.json';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  const { id } = req.params;

  const character = data.find((character) => character.id === id);

  if (character) return res.json(character);

  res.status(404).json({ message: 'Character not found' });
});

export default app;

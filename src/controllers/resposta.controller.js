import express from 'express';

import { Resposta as model } from '../models';

const router = express.Router();

router.get('/', (req, res, next) => {
  return model.findAll({ include: [{ all: true, nested: false }] })
    .then(content => res.status(200).json(content))
    .catch(err => res.status(500).json({ sucess: 0, error: err }));
});

router.get('/:id', (req, res, next) => {
  return model.findByPk(req.params.id, { include: [{ all: true, nested: true }] })
    .then(content => res.status(200).json(content))
    .catch(err => res.status(500).json({ success: 0, error: err }));
});

router.post('/', (req, res, next) => {
  console.log(req.body)
  model.create(req.body)
    .then(content => res.status(200).json({ success: 1, message: 'Resposta incluída com sucesso!', content }))
    .catch(err => res.status(500).json({ success: 0, message: err }));
});

router.delete('/', (req, res, next) => {
  model.findByPk(req.params.id).then(content =>
    content.destroy()
      .then(() => res.status(200).json({ success: 1, message: 'Resposta removida com sucesso!' }))
      .catch(err => res.status(500).json({ success: 0, error: err }))
  );
});

export default router;
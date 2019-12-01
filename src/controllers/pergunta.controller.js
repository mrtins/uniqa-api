import express from 'express';

import { Pergunta as model } from '../models';
import { Tag as tagModel } from '../models';
import { PerguntaTag as perguntaTagModel } from '../models';

const router = express.Router();

router.post('/ask-question', (req, res, next) => {
  let question = req.body.pergunta;
  let listTag = req.body.tags;

  model.create(question)
    .then(content => {
      listTag.map((tag, i) => {
        tagModel.create(tag)
          .then(resTags => {
            let perguntaTag = {
              idPergunta: content.id,
              idTag: resTags.id
            }

            perguntaTagModel.create(perguntaTag)
          })
      });

      res.status(200).json({ success: 1, message: 'Pergunta incluída com sucesso!', content })
    })
    .catch(err => res.status(500).json({ success: 0, message: err }));
});

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
  model.create(req.body)
    .then(content => res.status(200).json({ success: 1, message: 'Curso incluído com sucesso!', content }))
    .catch(err => res.status(500).json({ success: 0, message: err }));
});

router.delete('/', (req, res, next) => {
  model.findByPk(req.params.id).then(content =>
    content.destroy()
      .then(() => res.status(200).json({ success: 1, message: 'Curso removido com sucesso!' }))
      .catch(err => res.status(500).json({ success: 0, error: err }))
  );
});

export default router;
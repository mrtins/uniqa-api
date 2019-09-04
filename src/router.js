import express from 'express';

import curso from './controllers/curso.controller';
import nivel from './controllers/nivel.controller';
import perfil from './controllers/perfil.controller';
import titulo from './controllers/titulo.controller';
import usuario from './controllers/usuario.controller';

const router = express();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/cursos', curso);
router.use('/niveis', nivel);
router.use('/perfis', perfil);
router.use('/titulos', titulo);
router.use('/usuarios', usuario);

export default router;
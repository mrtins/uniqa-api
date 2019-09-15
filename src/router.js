import express from 'express';

// import curso from './controllers/curso.controller';
// import nivel from './controllers/nivel.controller';
// import perfil from './controllers/perfil.controller';
// import titulo from './controllers/titulo.controller';
// import usuario from './controllers/usuario.controller';
// import usuarioTitulo from './controllers/usuarioTitulo.controller';
// import pergunta from './controllers/pergunta.controller';
// import tag from './controllers/tag.controller';
// import perguntaTag from './controllers/perguntaTag.controller';

const router = express();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/teste', (req, res) => res.json({ a: 1, b: 2 }))

// router.use('/cursos', curso);
// router.use('/niveis', nivel);
// router.use('/perfis', perfil);
// router.use('/titulos', titulo);
// router.use('/usuarios', usuario);
// router.use('/usuario-titulos', usuarioTitulo);
// router.use('/perguntas', pergunta);
// router.use('/tags', tag);
// router.use('/pergunta-tags', perguntaTag);

export default router;
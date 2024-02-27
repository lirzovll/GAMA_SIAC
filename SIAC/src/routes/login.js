const express = require('epress');
const LoginController = require('    ');
const adminController = require('    ');
const cocinaController = require('    ');
const cajaController = require('    ');
const entregaController = require('    ');
const reVentaController = require('    ');
const rePerController = require('    ');
const reProController = require('    ');
const uploadController = require('    ');
const updateController = require('    ');

const router = express.router();

// son las redirecciones para que funcione el sistema 

///redirreciones del logincontroller//
router.get('/login', LoginController.index);
router.post('/entrar', LoginController.auth);
router.get('/lougout', LoginController.logout);

//Redirecciones dl admincontrollers//

router.get('/personal', adminController.tabla);
router.get('/altaPersonal', adminController.personal);
router.post('/registrarPer', adminController.registraPerso);
router.get('/editar/:idUser', adminController.editar);
router.get('/elimina/:idUser', adminController.elimina);
router.post('/editar/:idUser', adminController.update);

router.get('/menu', adminController.prod);
router.get('/altaProducto', adminController.productos);
router.post('/registraMen', upload_single('image'), adminController,registraMenu.productos);
router.get('/eliminaMen/id_art', adminController.eliminaMen);
router.get('/editarMen/:id_art', adminController.editarMen);
router.post('/editarMen/:id_art', update .single('image'), adminController.updateMen);

router.get

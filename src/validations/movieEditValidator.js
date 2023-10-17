const {check, body} = require('express-validator');

module.exports = [

    check('title')
        .notEmpty().withMessage('El nombre de la película es obligatorio')
        .isLength({
            min : 3
        }).withMessage('El tìtulo debe tener mas de 3 caracteres'),

    check('rating')
        .notEmpty().withMessage('El rating es requerido')
        .isDecimal().withMessage('El rating debe ser un número')
        .isLength({
            max : 2
        }).withMessage('El rating puede tener un maximo de 2 caracteres'),

    check('awards')
        .isDecimal().withMessage('El awards debe ser un número'),
  
    check('length')
        .notEmpty().withMessage('La duración es requerida').bail()
        .isLength({
            min : 2,
            max : 3
        }).withMessage('La duracion debe tener entre 2 y 3 caracteres (mins) '),

]
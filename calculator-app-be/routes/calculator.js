var express = require('express');
var router = express.Router();
var firstNumber = 0;
var secondNumber = 0;
var operation = '';
var result = 0;
var response = {};

//calc-app:comment - Calculating numbers based on the operation provided
router.post('/calculate', function (req, res) {
    firstNumber = req.body.firstNum;
    secondNumber = req.body.secondNum;
    operation = req.body.operation
    if (!!firstNumber && !!secondNumber && !!operation && !isNaN(firstNumber) && !isNaN(secondNumber)) {
        if (operation == 'add') {
            result = Number(firstNumber) + Number(secondNumber);
        } else if (operation == 'subtract') {
            result = Number(firstNumber) - Number(secondNumber);
        } else if (operation == 'multiply') {
            result = Number(firstNumber) * Number(secondNumber);
        } else if (operation == 'divide') {
            if (Number(secondNumber) === 0) {
                result = 'Infinity';
            } else {
                result = Number(firstNumber) / Number(secondNumber);
            }
        }
        res.json({ "data": result });
    } else {
        this.errorHandler(res);
    }
});

//calc-app:comment - Error Handling with appropriate status and response
errorHandler = function (res) {
    res.status(422);
    res.json(NaN);
}

module.exports = router;
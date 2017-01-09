/**
 * Created by kornelia on 09.01.17.
 */
'use strict';

const expect = require('chai').expect;

describe('Generator', function () {
    it('should exist', function () {
        const Generator = require('../app/js/Generator.js');
        //noinspection BadExpressionStatementJS
        expect(Generator).to.exist;
    });
    it('should be an object', function ( ) {
        const Generator = require('../app/js/Generator.js');
        expect(Generator).to.be.an('object');
    })

});
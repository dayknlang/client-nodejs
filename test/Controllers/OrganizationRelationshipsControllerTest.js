/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.OrganizationRelationshipsController;
const TypeEnum = testerlib.TypeEnum;

describe("OrganizationRelationshipsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Creates and returns an organization relationship.
     */
    it("should testTestCreateAnOrganizationRelationship response", function testTestCreateAnOrganizationRelationshipTest(done) {
        // parameters for the API call
        let input = [];
        input['contentType'] = null;
        input['body'] = null;

        controller.createAnOrganizationRelationship(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});
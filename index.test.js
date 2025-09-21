"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:28733959454742823561 LICENSE.md

// King Deva test file

const {expect} = require('chai')
const king = require('./index.js');

describe(king.me.name, () => {
  beforeEach(() => {
    return king.init()
  });
  it('Check the DEVA Object', () => {
    expect(king).to.be.an('object');
    expect(king).to.have.property('agent');
    expect(king).to.have.property('vars');
    expect(king).to.have.property('listeners');
    expect(king).to.have.property('methods');
    expect(king).to.have.property('modules');
  });
})

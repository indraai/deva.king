// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:28733959454742823561 LICENSE.md

export default {
  /**************
  method: king
  params: packet
  describe: The global wall feature that installs with every agent
  ***************/
  async king(packet) {
    const king = await this.methods.sign('king', 'default', packet);
    return king;
  },
};

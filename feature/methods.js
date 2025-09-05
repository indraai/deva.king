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

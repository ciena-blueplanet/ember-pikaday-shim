module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'pikaday', target: '^1.5.1'}
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-cli-moment-shim', target: '^3.0.1'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}

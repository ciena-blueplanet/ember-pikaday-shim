'use strict'

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const metal = require('broccoli-metal')
const path = require('path')

module.exports = {
  name: 'pikaday',

  treeForAddon (tree) {
    const pikadayPath = path.dirname(require.resolve('pikaday/pikaday.js'))
    let pikadayTree = this.treeGenerator(pikadayPath)

    // Remove non-Javascript files such as LICENSE
    pikadayTree = new Funnel(pikadayTree, {
      include: [
        'pikaday.js'
      ]
    })

    pikadayTree = metal(pikadayTree, (files) => {
      Object.keys(files).forEach((key) => {
        let endIndex, startIndex

        const lines = files[key].split('\n')

        lines.forEach((line, index) => {
          if (line.indexOf('use strict') !== -1) {
            startIndex = index + 1
          }

          if (line.indexOf() !== -1) {
            endIndex = index - 1
          }
        })

        lines.splice(0, startIndex) // Remove UMD garbage at top of file
        lines.splice(endIndex) // Remove return and closing of UMD garbage at end of file
        lines.splice(0, 0, "import moment from 'moment'") // Add ES6 import for Moment.js
        lines.push('export default Pikaday') // Add ES6 export

        files[key] = lines.join('\n')
      })
    })

    if (!tree) {
      return this._super.treeForAddon.call(this, pikadayTree)
    }

    const trees = mergeTrees([pikadayTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}

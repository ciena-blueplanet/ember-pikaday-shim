import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'

import Pikaday from 'pikaday'

describe('pikaday', function () {
  it('exports Pikaday as default', function () {
    expect(typeof Pikaday).to.equal('function')
  })

  describe('create new picker instance', function () {
    let picker

    beforeEach(function () {
      picker = new Pikaday()
    })

    it('picker has HTMLElement on property "el"', function () {
      expect(picker.el).to.be.instanceof(window.HTMLElement)
    })
  })
})

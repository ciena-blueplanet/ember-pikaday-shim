import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'

import Pikaday from 'pikaday'

describe('pikaday', function () {
  it('should export Pikaday as default', function () {
    expect(typeof Pikaday).to.equal('function')
  })

  describe('create new picker instance', function () {
    let picker

    beforeEach(function () {
      picker = new Pikaday()
    })

    it('should have HTMLElement on property "el"', function () {
      expect(picker.el).to.be.instanceof(window.HTMLElement)
    })
  })
})

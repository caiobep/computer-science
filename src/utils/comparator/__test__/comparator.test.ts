import { expect } from 'chai'
import 'mocha'

import Comparator from '../comparator'

describe('Comparator', () => {
  it('Should compare with defailt comparator function', () => {
    const comparator = new Comparator()

    expect(comparator.equal(0,0)).to.eql(true)
    expect(comparator.equal(0,1)).to.eql(false)
    expect(comparator.equal('a','a')).to.eql(true)
  })
})

import Test from '../src/legit-tests'
import { expect } from 'chai'
import sinon from 'sinon'

import { TestComponent } from './components'

describe('simulate middleware', () => {

  it('should click a single element', () => {
    let spy = sinon.spy()

    Test(<TestComponent onClick={spy}/>)
    .find('div')
    .simulate({method: 'click', element: 'div'})
    expect(spy.called).to.be.true

  })

  it('should click the first element in an array', () => {
    let spy = sinon.spy()

    Test(<TestComponent onClick={spy}/>)
    .find('button')
    .simulate({method: 'click', element: 'button'})

    expect(spy.called).to.be.true

  })

})

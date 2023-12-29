import { addPoint } from '../src'

describe('addPoint test', () => {
  it('works if true is truthy', () => {
    expect(addPoint(1, 2).getX()).toBe(1)
    expect(addPoint(1, 2).getY()).toBe(2)
  })
  it('works if true is truthy', () => {
    expect(addPoint(2, 3).getX()).toBe(2)
    expect(addPoint(3, 4).getY()).toBe(4)
  })
})
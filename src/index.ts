import './index.css'
export class Point {
  private x: number
  private y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }
}

export const addPoint = (x:number, y: number) => new Point(x, y)

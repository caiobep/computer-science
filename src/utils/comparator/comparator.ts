
export class Comparator {
  static defaultCompareFunction(a:any, b:any): number {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  compare: (a:any, b:any) => number = Comparator.defaultCompareFunction

  constructor(compareFunction?: (a:any, b:any) => number) {
    this.compare = compareFunction || Comparator.defaultCompareFunction
  }

  equal(a:any, b:any): boolean {
    return this.compare(a,b) === 0
  }

  lessThan(a:any, b:any): boolean {
    return this.compare(a,b) < 0
  }

  greaterThan(a:any, b:any): boolean {
    return this.compare(a,b) > 0
  }

  lessThanOrEqual(a:any, b:any): boolean {
    return this.lessThan(a,b) || this.equal(a,b)
  }

  greaterThanOrEqual(a:any, b:any): boolean {
    return this.greaterThan(a,b) || this.equal(a,b)
  }

  reverse() {
    const compareOriginal = this.compare
    this.compare = (a,b) => compareOriginal(b,a)
  }

}

export default Comparator

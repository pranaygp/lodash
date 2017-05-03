import isSymbol from './isSymbol.js'

/**
 * This method is like `minBy` except that it return the index of the minimum value
 (value).
 *
 * @since 4.0.0
 * @category Math
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the index/key of the minimum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * argmin(objects, ({ n }) => n)
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.argmin(users, 'n')
 * // => 0
 *
 * const object = {
 *  Phil: 12,
 *  Amy: 15
 * }
 *
 * // The `_.property` iteratee shorthand.
 * _.argmin(object)
 * // => 'Phil'
 */

// TODO: IMPLEMENT
function minBy(array, iteratee) {
  let result
  if (array == null) {
    return result
  }
  for (const value of array) {
    let computed
    const current = iteratee(value)

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : (current < computed)
        )) {
      computed = current
      result = value
    }
  }
  return result
}

export default minBy

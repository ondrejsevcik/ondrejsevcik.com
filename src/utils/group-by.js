export function groupBy(arr, getKeyFn) {
  let groups = {}
  arr.forEach(function (el) {
    let key = getKeyFn(el)
    if (key in groups === false) {
      groups[key] = []
    }
    groups[key].push(el)
  })
  return groups
}

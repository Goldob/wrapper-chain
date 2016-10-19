module.exports = class WrapperChain {
  constructor (object, wrappers) {
    const _wrappers = {}

    for (const key in wrappers) {
      _wrappers[key] = (...args) => {
        const wrappedObject = wrappers[key].apply(object, args)
        return new WrapperChain(wrappedObject, wrappers)
      }
    }

    return Object.assign(object, _wrappers)
  }
}

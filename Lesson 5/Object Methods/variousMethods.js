
// 1
Object.getOwnPropertyDescriptor(object, 'key')

// 2
Object.freeze(object);

// 3
Object.defineProperty(object, 'key', { property: value  })

// 4
Object.assign(object, newObject);

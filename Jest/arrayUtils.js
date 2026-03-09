const arrayUtils = {
  add(arr, value) {
    arr.push(value);
    return arr;
  },

  remove(arr, value) {
    const index = arr.indexOf(value);
    if (index === -1) return arr;

    arr.splice(index, 1);
    return arr;
  },

  contains(arr, value) {
    return arr.includes(value);
  },

  size(arr) {
    return arr.length;
  },

  clear(arr) {
    arr.length = 0;
    return arr;
  },
};

module.exports = arrayUtils;
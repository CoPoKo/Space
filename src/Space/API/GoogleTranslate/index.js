let kv = {
  put: async(key,value) => {
    return await SpaceKV.put(key, value);
  },
  delete: async(key) => {
    return await SpaceKV.delete(key);
  },
  get: async(key) => {
    return await SpaceKV.get(key);
  }
};
export default kv;

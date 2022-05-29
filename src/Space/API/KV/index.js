const KV = {
  Put: async(key,value) => {
    return await SpaceKV.put(key, value);
  },
  Delete: async(key) => {
    return await SpaceKV.delete(key);
  },
  Get: async(key) => {
    return await SpaceKV.get(key);
  }
};
export default KV;

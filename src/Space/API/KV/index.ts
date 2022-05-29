const KV = {
  Put: async (key: string, value: string) => {
    return await SpaceKV.put(key, value);
  },
  Delete: async (key: string) => {
    return await SpaceKV.delete(key);
  },
  Get: async (key: string) => {
    return await SpaceKV.get(key);
  }
};
export default KV;

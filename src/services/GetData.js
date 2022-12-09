import api from "./CreateAPI";

export const getTask = async (path, option) => {
  const respone = await api.get(path);
  return respone.data;
};

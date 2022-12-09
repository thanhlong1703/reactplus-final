import api from "./CreateAPI";

export const postData = async (path, body) => {
  return await api.post(path, {
    name: body.name,
    email: body.email,
    password: body.password,
  });
};

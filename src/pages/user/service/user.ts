import request from "@/service";

export const getUserInfo = async (username: string, password: string) => {
  const response = await request.get("/user/login", {
    params: {
      username,
      password,
    },
  });
  return response.data;
};

export const getUserRegister = async (username: string, password: string) => {
  const response = await request.post("/user/register", {
    username,
    password,
  });
  return response.data;
};

export const getUserAll = async (username: string) => {
  const response = await request.get("/user/findbyusername", {
    params: {
      username,
    },
  });
  return response.data;
};

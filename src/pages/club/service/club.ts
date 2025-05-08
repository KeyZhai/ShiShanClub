import request from "@/service";

export const getClubList = () => {
  return request.get("/club/findallclubname");
};

export const getClubDetail = (name: string) => {
  return request.get(`/club/findbyclubname`, {
    params: {
      clubname: name,
    },
  });
};

import hyrequest from "@/service";

export const joinClub = (data: any) => {
  return hyrequest.post("/club/joinclub", {
    clubname: data.clubname,
    username: data.username,
  });
};

export const joinActivity = (data: any) => {
  const { activityname, username } = data;
  const aname: string = activityname.slice(0, -2);
  return hyrequest.post("/activity/joinactivity", {
    activityname: aname,
    username: username,
  });
};

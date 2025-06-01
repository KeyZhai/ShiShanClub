import request from "@/service";

export const getActivityList = () => {
  return request.get("activity/findall");
};

export const getActivityDetail = (name: string) => {
  return request.get(`activity/findbyactivityname`, {
    params: {
      activityname: name,
    },
  });
};

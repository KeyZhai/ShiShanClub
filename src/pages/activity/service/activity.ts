import request from "@/service";

export const getActivityList = () => {
  return request.get("activity/findall");
};

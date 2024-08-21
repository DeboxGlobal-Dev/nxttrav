import { axiosOther } from "../../http/axios/axios_new";

const fetchingDataForDropdownList = async (route, body) => {
  try {
    const { data } = await axiosOther.post(route, body);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchingDataForDropdownList;

import { apiGetWithoutToken } from "../../services/api";
import { PATH_RANDOM } from "../../services/path/random";

async function getUser(props) {
  let loading = props.loading ? props.loading : function () {};
  let params = props.params;
  let response = "";
  loading(true);
  try {
    response = await apiGetWithoutToken(PATH_RANDOM.USER, params);
    loading(false);
    return response;
  } catch (error) {
    loading(false);
    return error;
  }
}

const Random = {
  getUser,
};

export default Random;

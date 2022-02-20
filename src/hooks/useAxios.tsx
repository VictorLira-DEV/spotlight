import Axios from "axios";

interface IAxios {
  url: string;
  method: string;
  headers: string;
  body: string;
}

function useAxios() {
  const sendRequest = async (config: any, apply: (a: any) => void) => {
    const response = await Axios({
      url: config.url,
    });
    const data = await response;
    apply(data);
  };

  return {
    sendRequest,
  };
}

export default useAxios;

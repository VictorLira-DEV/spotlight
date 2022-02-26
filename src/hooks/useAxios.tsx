import Axios from 'axios';

interface Iconfig {
  url: string;
}

function useAxios() {
  const sendRequest = async (config: Iconfig, apply: (a: any) => void) => {
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

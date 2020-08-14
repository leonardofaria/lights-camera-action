import { fetchAPIData } from './api';

export const wrapPromise = (promise: any) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
};

export const createResource = (type: String, params: String | null) => {
  return {
    fetchData: wrapPromise(fetchAPIData(type, params)),
  };
};
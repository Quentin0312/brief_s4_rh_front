export enum MethodEnum {
  get = "GET",
  post = "POST",
  delete = "DELETE",
  put = "PUT",
}

export const formaterAux = (data: any) => {
  if (data == null) {
    return data;
  }

  const formdata = new FormData();
  Object.keys(data).forEach((_data) => formdata.append(_data, data[_data]));
  return formdata;
};

export const request = async (method: MethodEnum, data: any) => {
  const host = "http://localhost:8000/api/employee";
  // const host = "http://s4rhback.ftsw4800.odns.fr/api/employee";
  return fetch(host, { method: method, body: formaterAux(data) });
};

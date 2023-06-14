export enum MethodEnum {
  get = "GET",
  post = "POST",
  delete = "DELETE",
}

export const Formater = (data: any) => {
  const formdata = new FormData();
  Object.keys(data).forEach((_data) => formdata.append(_data, data[_data]));
  return formdata;
};

//TODO: factoriser => utlisier Formater directement ici => formaterAux() !
export const request = async (method: MethodEnum, data: any) => {
  const host = "http://localhost:8000/api/employee";
  return fetch(host, { method: method, body: data }); // , headers: {Authorization: String(token)}
};

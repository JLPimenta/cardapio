import api from "./api";
import { CheckInRequest } from "./interfaces/CheckInRequest";
import { ClientResponse } from "./interfaces/ClientResponse";

export const checkIn = async ({
  clientEmail,
  clientName,
  tableId,
}: CheckInRequest): Promise<ClientResponse> => {
  const response = await api
    .post("clients/checkin", { clientEmail, clientName, tableId })
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      return response.data;
    });

  return response;
};

import { serviceConstants } from '../constants/serviceConstants';

export const getServiceName = (serviceId: string): string | undefined => {
  const service = serviceConstants.find((s) => s.serviceID === serviceId);
  return service ? service.serviceName : undefined;
};

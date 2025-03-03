import { UserForm } from './../../../(types)/UserForm';

export const filterRequests = (data: UserForm[], searchQuery: string) => {
   return data.filter(
      (form) =>
         form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         form.phone.includes(searchQuery)
   );
};

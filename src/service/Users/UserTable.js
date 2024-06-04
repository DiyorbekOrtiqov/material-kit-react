import { useQuery } from 'react-query';

import {
  getyUserBithday,
  getUserTableData,
  getUsertableFilter,
  getUserTableDataEmpoloyee,
  getUserTableDataEmpoloyeeData,
} from './UserRequest';

export const UserTableData = (page, rowsPerPage) =>
  useQuery(['usertable', page, rowsPerPage], () => getUserTableData(page, rowsPerPage));
export const UserTableDataEmployee = (page, rowsPerPage) =>
  useQuery(['usertableemployee', page, rowsPerPage], () =>
    getUserTableDataEmpoloyee(page, rowsPerPage)
  );

export const EmployeeData = (page, rowsPerPage) =>
  useQuery(['employeetabledata', page, rowsPerPage], () =>
    getUserTableDataEmpoloyeeData(page, rowsPerPage)
  );

export const UserTableFilter = (filterName, page, rowsPerPage) =>
  useQuery(['usertablefilter', filterName, page, rowsPerPage], () =>
    getUsertableFilter(filterName, page, rowsPerPage)
  );

export const UserBirthday = () => useQuery('userbirthday', getyUserBithday);

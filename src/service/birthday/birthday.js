import { useQuery } from 'react-query';

import { getBirthdayData } from './BirthdayRequest';

export const useBirthdayData = () => useQuery('BirthdayData', getBirthdayData);

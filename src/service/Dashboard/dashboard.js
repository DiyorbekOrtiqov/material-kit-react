import { useQuery } from 'react-query';

import { getData, getProject, getDirectionsData } from './DashboardRequest';

export const useDashboardData = () => useQuery('dashboardData', getData);

export const useDirectionsData = () => useQuery('DirectionsData', getDirectionsData);

export const useProjectdData = () => useQuery('projectData', getProject);

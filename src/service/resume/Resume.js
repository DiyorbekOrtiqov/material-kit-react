import { useQuery } from 'react-query';

import { getResumeJob, getResumeSkill, getResumeRole } from './ResumeRequest';

export const useUserResumeJob = () => useQuery('userJob', getResumeJob);

export const useUserResumeSkills = () => useQuery(' userSkills', getResumeSkill);

export const useUserResumeRole = () => useQuery(' userSkills', getResumeRole);

import { useMutation } from 'react-query';

import { creteCandidate } from './CandidateRequest';

export const userCrateCandidate = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMutation('Candidate', creteCandidate);

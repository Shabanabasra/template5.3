import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token:"skuCOWEZLao0aQWCFiOtG86621uAaciuS8RsnmieG03wgnqWqScimpEqRyzMwBPAWWDPJ6vrEevnSLnV88b9EZeiNImEMYCD2ddmD9NlkviQRJMDhS0ya4O3hqqFsxRa4fNoqoiHMUogwyaLbJgWfcgVfst5b1wLv0JmK1Fda9sdz2rzOCVf" 
})

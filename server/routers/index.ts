import { router } from '../trpc';
import { softwareRouter } from './software';
import { hardwareRouter } from './hardware';
import { agencyRouter } from './agency';
import { campRouter } from './camp';
import { classRouter } from './class';
import { doctorRouter } from './doctor';
import { educationRouter } from './education';
import { legalRouter } from './legal';
import { mentalHealthRouter } from './mentalHealth';
import { organizationRouter } from './organization';
import { otherRouter } from './other';
import { residencyRouter } from './residency';
import { therapyRouter } from './therapy';
import { vocationRouter } from './vocation';

export const appRouter = router({
  agency: agencyRouter,
  camp: campRouter,
  class: classRouter,
  doctor: doctorRouter,
  education: educationRouter,
  hardware: hardwareRouter,
  legal: legalRouter,
  mentalHealth: mentalHealthRouter,
  organization: organizationRouter,
  other: otherRouter,
  residency: residencyRouter,
  software: softwareRouter,
  therapy: therapyRouter,
  vocation: vocationRouter
});

export type AppRouter = typeof appRouter;

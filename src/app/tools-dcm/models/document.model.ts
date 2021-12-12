export interface DocumentInfo {
  id: string;
  losId?: number;
  cif?: number;
  fullName?: string;
  timeStore?: number;
  sealCode?: string;
  stack?: number;
  track?: number;
  crown?: number;
  sealCrown?: number;
  status?: number;
  [key: string]: any;
}

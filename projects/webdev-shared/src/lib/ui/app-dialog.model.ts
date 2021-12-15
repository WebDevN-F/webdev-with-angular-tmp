export interface DataDialogModel<TModel> {
  title?: string;
  width?: string;
  isConfirm?: boolean;
  buttonYes?: {
    text: string;
    isVisible?: boolean;
  };
  buttonNo?: {
    text: string;
    isVisible?: boolean;
  };
  model?: TModel;
  component?: any;
}

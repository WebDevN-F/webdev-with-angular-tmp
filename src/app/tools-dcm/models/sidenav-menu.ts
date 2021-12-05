export interface SidenavMenuModel {
  id: number;
  title: string;
  icon?: any;
  level?: number;
  url?: string;
  isLink?: boolean;
  parentId?: number;
  childs?: SidenavMenuModel[];
}

import { SidenavMenuModel } from "../models/sidenav-menu";

export const SIDENAV_MENUS: SidenavMenuModel[] = [
  {
    id: 1, title: "Quản lý hồ sơ", icon: ["fas", "book-medical"], level: 0, parentId: 0, url: '/tools-dcm/document', childs: [
      { id: 11, title: "Tìm kiếm", icon: ["fas", "search"], level: 1, url: "/tools-dcm/document/doc-search", parentId: 1 },
      { id: 12, title: "Lưu kho ĐVKD", icon: ["fas", "archive"], level: 1, url: "/tools-dcm/document/doc-store", parentId: 1 },
      { id: 13, title: "Mượn trả", icon: ["fas", "exchange-alt"], level: 1, url: "/tools-dcm/document/doc-loan-payment", parentId: 1 },
      { id: 14, title: "Chuyển kho Crown", icon: ["fas", "sign-out-alt"], level: 1, url: "/tools-dcm/document/doc-move-crown", parentId: 1 },
      { id: 15, title: "Chuyển kho về ĐVKD", icon: ["fas", "sign-in-alt"], level: 1, url: "/tools-dcm/document/doc-move-bu", parentId: 1 },
      { id: 16, title: "Cập nhật thông tin Hồ sơ", icon: ["fas", "hdd"], level: 1, url: "/tools-dcm/document/doc-update", parentId: 1 },
      { id: 17, title: "Tiêu hủy", icon: ["fas", "trash-alt"], level: 1, url: "/tools-dcm/document/doc-revoke", parentId: 1 },
    ]
  },
  {
    id: 2, title: "Báo cáo", icon: ["fas", "file"], level: 0, parentId: 0, url: '/tools-dcm/report', childs: [
      { id: 21, title: "Hồ sơ đang lưu trữ", icon: ["fas", "file"], level: 1, url: "/tools-dcm/report/report-doc-pending", parentId: 2 },
      { id: 22, title: "Hồ sơ chưa lưu trữ", icon: ["fas", "file-alt"], level: 1, url: "/tools-dcm/report/report-doc-new", parentId: 2 },
      // { id: 24, title: "#Add Link custom", icon: ["fas", "plus"], level: 1, parentId: 2, isLink: true, url: "https://google.com.vn" },
    ]
  },
  {
    id: 3, title: "Cấu hình", icon: ["fas", "users-cog"], level: 0, parentId: 0, url: '/tools-dcm/setting', childs: [
      { id: 31, title: "Cấu hình hồ sơ", icon: ["fas", "user-cog"], level: 1, url: "/tools-dcm/setting/setting-doc", parentId: 3 },
      { id: 32, title: "Kho lưu trữ", icon: ["fas", "user-cog"], level: 1, url: "/tools-dcm/setting/setting-store", parentId: 3 },
      { id: 33, title: "Phân quyền hệ thống", icon: ["fas", "user-cog"], level: 1, url: "/tools-dcm/setting/setting-permission", parentId: 3 },
      { id: 34, title: "Cấu hình user", icon: ["fas", "user-cog"], level: 1, url: "/tools-dcm/setting/setting-user", parentId: 3 },
    ]
  },
  { id: 4, title: "#Add Link custom", icon: ["fas", "plus"], level: 0, parentId: 0, isLink: true, url: "https://github.com/ngnam" },

  // add multiple level
  {
    id: 5, title: "#Multiple Level 1", icon: ["fas", "plus"], level: 0, parentId: 0, childs: [
      {
        id: 51, title: "#Multiple Level 2", icon: ["fas", "plus"], level: 1, parentId: 5, childs: [
          { id: 511, title: "#Multiple Level 3", icon: ["fas", "plus"], level: 2, parentId: 51, isLink: true, url: "https://github.com/ngnam" },
          {
            id: 512, title: "#Multiple Level 3", icon: ["fas", "plus"], level: 2, parentId: 51, childs: [
              { id: 5121, title: "#Multiple Level 4", icon: ["fas", "plus"], level: 3, parentId: 512, isLink: true, url: "https://github.com/ngnam" },
              { id: 5122, title: "#Multiple Level 4", icon: ["fas", "plus"], level: 3, parentId: 512, isLink: true, url: "https://github.com/ngnam" },
              { id: 5123, title: "#Multiple Level 4", icon: ["fas", "plus"], level: 3, parentId: 512, isLink: true, url: "https://github.com/ngnam" },
              {
                id: 5124, title: "#Multiple Level 4", icon: ["fas", "plus"], level: 3, parentId: 512, childs: [
                  { id: 51241, title: "#Multiple Level 5", icon: ["fas", "plus"], level: 4, parentId: 5124, isLink: true, url: "https://github.com/ngnam" },
                  { id: 51242, title: "#Multiple Level 5", icon: ["fas", "plus"], level: 4, parentId: 5124, isLink: true, url: "https://github.com/ngnam" },
                  { id: 51243, title: "#Multiple Level 5", icon: ["fas", "plus"], level: 4, parentId: 5124, isLink: true, url: "https://github.com/ngnam" },
                  { id: 51244, title: "#Multiple Level 5", icon: ["fas", "plus"], level: 4, parentId: 5124, isLink: true, url: "https://github.com/ngnam" },
                ]
              },
            ]
          },
        ]
      },
      { id: 52, title: "#Multiple Level 2", icon: ["fas", "plus"], level: 1, parentId: 5, isLink: true, url: "https://github.com/ngnam" },
    ]
  },
]

export default {
  cargo: {
    permission: null,
    activated: true,
    authenticated: false,
    path: '/cargo/awb-tracking',
    name: 'qcargoagione.admin.cargo',
    crud : import('../_crud/cargo.vue'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/blank.vue'),
    title: 'icargo.cms.sidebar.cargoInfo',
    icon: 'fa-light fa-truck-container',
  }
}

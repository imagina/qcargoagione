export default {
    awbTracking: {
        permission: 'cargo.awb-tracking.manage',
        activated: true,
        authenticated: true,
        path: '/awb-tracking/index',
        name: 'qcargoagione.admin.cargoAdmin',
        crud : import('../_crud/cargo.vue'),
        page: () => import('modules/qcrud/_pages/admin/crudPage'),
        layout: () => import('layouts/master.vue'),
        title: 'icargo.cms.sidebar.awbTracking',
        icon: 'fa-light fa-plane-departure',
        subHeader: {
          refresh: true,
        }
    },
    scales: {
      permission: 'cargo.scales.manage',
      activated: true,
      authenticated: true,
      path: '/scale/index',
      name: 'qcargoagione.admin.scale',
      crud : import('../_components/scale/index.vue'),
      page: () => import('modules/qcrud/_pages/admin/crudPage'),
      layout: () => import('layouts/master.vue'),
      title: 'icargo.cms.sidebar.scaleTracking',
      icon: 'fa-thin fa-weight-scale',
      subHeader: {
        refresh: true,
      }
  },
  schedule: {
    permission: 'cargo.scheduled.manage',
    activated: true,
    authenticated: true,
    path: '/cargo/schedule/index',
    name: 'qcargoagione.admin.schedule',
    page: () => import('src/modules/qramp/_components/scheduleKanban'),
    layout: () => import('layouts/master.vue'),
    title: 'ifly.cms.sidebar.schedule',
    icon: 'fa-thin fa-calendar-days',
    subHeader: {
      refresh: true,
    }
  }
}

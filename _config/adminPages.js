export default {
    cargo: {
        //permission: 'page.pages.manage',
        activated: true,
        authenticated: true,
        path: '/cargo/index',
        name: 'qcargoagione.admin.cargo',
        crud : import('../_crud/cargo.vue'),
        page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'ireports.cms.sidebar.reportsInfo',
        icon: 'fas fa-file-alt',
        subHeader: {
          refresh: true,
        }
    }
}

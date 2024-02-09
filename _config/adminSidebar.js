import pages from 'src/config/pages' // Get Pages from config
export default [
    {
        title: 'icargo.cms.sidebar.cargoInfo',
        icon: 'fa-light fa-truck-container',
        children: [
            pages.qcargoagione.awbTracking,
            pages.qcargoagione.scales,
        ]
    },
]

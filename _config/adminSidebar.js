import pages from 'src/setup/pages' // Get Pages from config
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

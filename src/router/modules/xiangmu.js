import Layout from '@/views/Layout/Layout.vue'

const xiangmu = {
  path: '/xiangmu',
  name: '项目管理',
  iconcls: '111',
  component: Layout,
  children: [
    {
      path: 'xiangmu1',
      name: '项目1',
      component: () => import('@/views/xiangmu/components/xiangmu1')
    }
  ]
}
export default xiangmu

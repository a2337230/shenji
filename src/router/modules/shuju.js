import Layout from '@/views/Layout/Layout.vue'

const shuju = {
  path: '/shuju',
  name: '数据采集',
  iconcls: '111',
  component: Layout,
  children: [
    {
      path: 'shuju1',
      name: '数据采集1',
      component: () => import('@/views/xiangmu/components/xiangmu1')
    }
  ]
}
export default shuju

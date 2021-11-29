import loadable from '@/utils/loadable'
const Home = loadable(() => import('@/views/Home'))

// 通用
const ButtonView = loadable(() => import('@/views/Public/Button'))
const IconView = loadable(() => import('@/views/Public/Icon'))
const TaskView = loadable(() => import('@/views/Public/Task'))

//导航
const DropdownView = loadable(() => import('@/views/NavView/Dropdown'))
const MenuView = loadable(() => import('@/views/NavView/Menu'))
const StepView = loadable(() => import('@/views/NavView/Step'))

// 表单
const BasicForm = loadable(() => import('@/views/Form/BasicForm'))
const StepForm = loadable(() => import('@/views/Form/StepForm'))

// 展示
const TableView = loadable(() => import('@/views/Show/Table'))
const FoldingView = loadable(() => import('@/views/Show/Folding'))
const TreeView = loadable(() => import('@/views/Show/Tree'))
const TabsView = loadable(() => import('@/views/Show/Tabs'))

// 其他
const ProgressView = loadable(() => import('@/views/Other/Progress'))
const AnimationView = loadable(() => import('@/views/Other/Animation'))
const UploadView = loadable(() => import('@/views/Other/Upload'))

// 多级导航
const NavigationView = loadable(() => import('@/views/Navigation'))

// 关于
const AboutView = loadable(() => import('@/views/About'))

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
  {
    path: '/public/button',
    exact: true,
    name: 'false',
    component: ButtonView
  },
  {
    path: '/public/icon',
    exact: false,
    name: '按钮',
    component: IconView
  },
  {
    path: '/public/task',
    exact: false,
    name: '任务',
    component: TaskView
  },
  {
    path: '/nav/dropdown',
    exact: false,
    name: '图标',
    component: DropdownView
  },
  {
    path: '/nav/menu',
    exact: false,
    name: '菜单',
    component: MenuView
  },
  {
    path: '/nav/steps',
    exact: false,
    name: '菜单',
    component: StepView
  },
  {
    path: '/form/base-form',
    exact: false,
    name: '基础表单',
    component: BasicForm
  },
  {
    path: '/form/step-form',
    exact: false,
    name: '步骤表单',
    component: StepForm
  },
  {
    path: '/show/table',
    exact: false,
    name: '表格',
    component: TableView
  },
  {
    path: '/show/collapse',
    exact: false,
    name: '折叠面板',
    component: FoldingView
  },
  {
    path: '/show/tree',
    exact: false,
    name: '树形控件',
    component: TreeView
  },
  {
    path: '/show/tabs',
    exact: false,
    name: '标签页',
    component: TabsView
  },
  {
    path: '/other/progress',
    exact: false,
    name: '进度条',
    component: ProgressView
  },
  {
    path: '/other/animation',
    exact: false,
    name: '动画',
    component: AnimationView
  },
  {
    path: '/other/upload',
    exact: false,
    name: '上传',
    component: UploadView
  },
  {
    path: '/one/two/three',
    exact: false,
    name: '多级导航',
    component: NavigationView
  },
  {
    path: '/about',
    exact: false,
    name: '关于',
    component: AboutView
  }
]

export default routes

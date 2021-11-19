const menu = [
  {
    key: '/home',
    title: '首页',
    icon: 'HomeOutlined'
  },
  {
    title: '通用',
    key: '/public',
    icon: 'AlignCenterOutlined',
    subs: [
      { title: '按钮', key: '/public/button', icon: '' },
      { title: '图标', key: '/public/icon', icon: '' }
    ]
  },
  {
    title: '导航',
    key: '/nav',
    icon: 'CalculatorOutlined',
    subs: [
      { title: '下拉菜单', key: '/nav/dropdown', icon: '' },
      { title: '导航菜单', key: '/nav/menu', icon: '' },
      { title: '步骤条', key: '/nav/steps', icon: '' }
    ]
  },
  {
    title: '表单',
    key: '/form',
    icon: 'FormOutlined',
    subs: [
      { title: '基础表单', key: '/form/base-form', icon: '' },
      { title: '步骤表单', key: '/form/step-form', icon: '' }
    ]
  },
  {
    title: '展示',
    key: '/show',
    icon: 'AreaChartOutlined',
    subs: [
      { title: '表格', key: '/show/table', icon: '' },
      { title: '折叠面板', key: '/show/collapse', icon: '' },
      { title: '树形控件', key: '/show/tree', icon: '' },
      { title: '标签页', key: '/show/tabs', icon: '' }
    ]
  },
  {
    title: '其它',
    key: '/others',
    icon: 'PaperClipOutlined',
    subs: [
      { title: '进度条', key: '/other/progress', icon: '' },
      { title: '动画', key: '/other/animation', icon: '' },
      { title: '上传', key: '/other/upload', icon: '' },
      { title: '404', key: '/404', icon: '' },
      { title: '500', key: '/500', icon: '' }
    ]
  },
  {
    title: '多级导航',
    key: '/one',
    icon: 'FileDoneOutlined',
    subs: [
      {
        title: '二级',
        key: '/one/two',
        icon: '',
        subs: [{ title: '三级', key: '/one/two/three', icon: '' }]
      }
    ]
  },
  {
    title: '关于',
    key: '/about',
    icon: 'UserAddOutlined'
  }
]

export default menu

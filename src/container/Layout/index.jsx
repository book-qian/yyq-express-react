import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom'
import { Layout, message } from 'antd'
import routes from '@/routes'
import SideBar from '@/container/SideBar'
import HeaderBar from '@/container/HeaderBar'
import { ajaxRequest } from '@/api'
import menuData from './menu'
import { getMenu } from '@/redux/actions/menu'
import './layout.less'
const { Content } = Layout
class PublicLayout extends Component {
  state = {
    collapsed: false,
    menu: []
  }

  componentDidMount() {
    this.isLogin()
  }

  isLogin = () => {
    if (!sessionStorage.getItem('user')) {
      this.props.history.push('/login')
    } else {
      this.getMenuData()
    }
  }

  loginOut = () => {
    sessionStorage.clear()
    this.props.history.push('/login')
    message.success('操作成功')
  }

  getMenuData = () => {
    this.setState({ menu: menuData })
    const params = {
      input: {
        userac: JSON.parse(sessionStorage.getItem('user')).username
      },
      sys: {
        prcscd: 'lm4004'
      }
    }

    ajaxRequest('lm4004', params).then((res) => {
      this.props.fetchMenu(res.data)
    })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { collapsed, menu } = this.state
    return (
      <Layout className="main-container">
        {/* 侧边栏 */}
        <SideBar collapsed={collapsed} menu={menu} />

        <Layout className="site-layout">
          <HeaderBar
            loginOut={this.loginOut}
            collapsed={this.state.collapsed}
            toggle={this.toggle}
          />
          {/* 内容区 */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <Switch>
              {routes.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    exact={item.exact}
                    component={item.component}
                  ></Route>
                )
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(
  connect((reducer) => ({ menuData: reducer.menu }), {
    fetchMenu: getMenu
  })(PublicLayout)
)

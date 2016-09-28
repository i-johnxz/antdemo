import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'

import { IndexLink } from 'react-router'
const SubMenu = Menu.SubMenu
import './Main.css'

class SidebarComponent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      current: '1',
      openKeys: ['sub1']
    }
    this.handleClick = this.handleClick.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  handleClick(e) {
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1)
    })
  }

  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    })
  }

  render() {
    const tProps = {
      onClick: this.handleClick,
      openKeys: this.state.openKeys,
      onOpen: this.onToggle,
      onClose: this.onToggle,
      selectedKeys: [this.state.current],
      mode: 'inline',
      theme: 'dark'
    }
    return (
      <div className='ant-layout-aside'>
        <aside className='ant-layout-sider'>
          <div className='ant-layout-logo' />
          <Menu {...tProps}>
            <SubMenu key='sub1' title={<span><Icon type='mail' /><span>导航一</span></span>}>
              <Menu.Item key='1'>
                <IndexLink to='/'>Weclome</IndexLink>
              </Menu.Item>
              <Menu.Item key='2'>
                <IndexLink to='/last'>Last</IndexLink>
              </Menu.Item>
              <Menu.Item key='3'>
                <IndexLink to='/date'>Date</IndexLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title={<span><Icon type='appstore' /><span>导航二</span></span>}>
              <Menu.Item key='5'>选项5</Menu.Item>
              <Menu.Item key='6'>选项6</Menu.Item>
              <SubMenu key='sub3' title='三级导航'>
                <Menu.Item key='7'>选项7</Menu.Item>
                <Menu.Item key='8'>选项8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key='sub4' title={<span><Icon type='setting' /><span>导航三</span></span>}>
              <Menu.Item key='9'>选项9</Menu.Item>
              <Menu.Item key='10'>选项10</Menu.Item>
              <Menu.Item key='11'>选项11</Menu.Item>
              <Menu.Item key='12'>选项12</Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className='ant-layout-main'>
          <div className='ant-layout-header' />
          <div className='ant-layout-container'>
            <div className='ant-layout-content'>
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className='ant-layout-footer'>
           Ant Design 版权所有 © 2016 EcoEdu RD
          </div>
        </div>
      </div>
    )
  }
}

SidebarComponent.propTypes = {
  children: PropTypes.element.isRequired
}

export default SidebarComponent

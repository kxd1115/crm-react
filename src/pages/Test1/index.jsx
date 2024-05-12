import React, {useState} from 'react';
import './index.css'
import {
  AppstoreOutlined,
  HomeOutlined,
  AlertOutlined,
  ExportOutlined,
  UserAddOutlined,
  PieChartOutlined,
  ExceptionOutlined,
  PaperClipOutlined,
  UnorderedListOutlined,
  InsertRowAboveOutlined,
  SettingOutlined,
  WarningOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Breadcrumb } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function getitem(key, label, icon, children) {
  if (!key) {
    return {
      icon,
      children,
      label
    }
  } else {
    return {
      key,
      icon,
      children,
      label
    } 
  }
  
}

const items = [
  getitem("/","首页",<HomeOutlined />),
  getitem("/databoard","日常报表",<PieChartOutlined />),

  getitem("1","任务中心",<ExceptionOutlined />, [
    getitem("/workbench","任务进度",<AlertOutlined />),
    getitem("/task","任务列表",<PaperClipOutlined />),
    getitem("/releasetask","任务发布", <ExportOutlined />),

  ]),
  getitem("2","会员中心",<UnorderedListOutlined />, [
    getitem("/member","会员查询",<SearchOutlined />),
    getitem("/customerlist","会员列表",<InsertRowAboveOutlined />),
    getitem("/customersea","会员公海", <AppstoreOutlined />),
  ]),
  getitem("3","系统管理",<SettingOutlined />, [
    getitem("/user","新增用户", <UserAddOutlined />),
    getitem("/worktype","排班管理", <TeamOutlined />),
    getitem("/system","系统设置",<WarningOutlined />),
  ])
]

const Test = () => {
  const location = useLocation;
  const selectedKey = location.pathname;
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const navigate = useNavigate();

  const onMenuClick = (route) => {
    //navigate(route.key)
  }

  return (
    <Layout >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(49, 70, 89, 1)',
          height: 48,
        }}
      >
        <div className="demo-logo">111</div>
        <Breadcrumb
            style={{
              margin: '10px',
              color: 'white'
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
      </Header>
      <Layout 
       style={{
        marginLeft: collapsed ? 80 : 200,
        transition: '0.2s'
       }}
      >
        {/* Sider 和 menu */}
        <Sider
          theme='light'
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 48,
            bottom: 0,
          }}
          //trigger={null} 
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu 
            theme='light'
            mode="inline" 
            //className="no-animation"
            inlineCollapsed={collapsed}
            selectedKeys={selectedKey}
            items={items}
            onClick={onMenuClick}
            style={{
              border: 'none',
            }}
          />
        </Sider>
        <Content
          style={{
            overflow: 'initial',
            maxWidth: '100%',
            //overflow: 'auto',
            borderRadius: 'none',
            backgroundColor: '#f0f2f5'
          }}
        >
          test
        </Content>
      </Layout>
    </Layout>
  );
};
export default Test;
import React, { Component, createRef } from 'react'
import moment from 'moment'
import {
  Table,
  Form,
  Input,
  Button,
  Divider,
  Drawer,
  DatePicker,
  Space,
  message,
  Tag,
  Select
} from 'antd'
import { ajaxRequest } from '@/api'
import { PlusOutlined } from '@ant-design/icons'
const { Option } = Select

export default class task extends Component {
  formRef = createRef()

  state = {
    tableData: [],
    tableHead: [
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '任务状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          const color = status === 1 ? '#ddd' : status === 2 ? 'green' : 'red'
          const arr = ['待办', '完成', '删除']
          return <Tag color={color}>{arr[status - 1]}</Tag>
        },
        align: 'center'
      },
      {
        title: '描述',
        dataIndex: 'des',
        key: 'des',
        align: 'center'
      },
      {
        title: '截止时间',
        dataIndex: 'dealline',
        key: 'dealline',
        align: 'center'
      },
      {
        title: '改变状态',
        dataIndex: 'changeStatus',
        key: 'changeStatus',
        align: 'center',
        render: (text, item) => {
          return (
            <Select
              defaultValue={
                item.status === 1 ? '待办' : item.status === 2 ? '完成' : '删除'
              }
              style={{ width: 120 }}
              onChange={(val) => {
                this.handleStatus(val, item.id)
              }}
            >
              <Option value="1">待办</Option>
              <Option value="2">完成</Option>
              <Option value="3">删除</Option>
            </Select>
          )
        }
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                this.handleEdit(record)
              }}
            >
              修改
            </Button>
          </Space>
        )
      }
    ],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    },
    searchModel: {},
    visible: false,
    id: ''
  }

  handleStatus = (status, id) => {
    const params = {
      id,
      status
    }
    ajaxRequest('serve/todo/status', params).then((res) => {
      message.success('操作成功')
      this.getTask()
    })
  }
  getTask = () => {
    const { pagination, searchModel } = this.state
    const params = {
      ...pagination,
      ...searchModel
    }
    ajaxRequest('serve/todo/list', params).then((res) => {
      const {
        tasklist: { rows = [], count }
      } = res
      const arr = rows.map((t) => {
        return {
          key: t.id,
          id: t.id,
          name: t.name,
          status: t.status,
          des: t.des,
          dealline: moment(t.dealline).format('YYYY-MM-DD')
        }
      })
      this.setState({
        tableData: arr,
        pagination: {
          total: count,
          current: pagination.current,
          pageSize: pagination.pageSize
        }
      })
    })
  }
  handleSearch = (data) => {
    this.setState({
      searchModel: { ...data }
    })
    this.getTask()
  }
  onChange = (val) => {
    const { value: name } = val.target
    if (val.type !== 'change') {
      this.setState(
        {
          searchModel: { name }
        },
        () => {
          this.getTask()
        }
      )
    }
  }
  onClose = () => {
    this.setState({ visible: false })
  }
  handleAdd = () => {
    this.setState(
      {
        visible: true,
        option: 'add'
      },
      () => {
        this.formRef.current.resetFields()
      }
    )
  }
  handleEdit = (data) => {
    this.setState(
      {
        visible: true,
        option: 'edit',
        id: data.id
      },
      () => {
        this.formRef.current.setFieldsValue({
          ...data,
          dealline: moment(data.dealline)
        })
      }
    )
  }
  handleSave = (data) => {
    const { option, id } = this.state
    ajaxRequest(`serve/todo/${option}`, { ...data, id }).then((res) => {
      if (res) {
        message.success('操作成功')
        this.setState({ visible: false })
        this.getTask()
      }
    })
  }
  paginationChange = (page, pageSize) => {
    this.setState(
      {
        pagination: {
          current: page,
          pageSize
        }
      },
      () => {
        this.getTask()
      }
    )
  }
  componentDidMount() {
    this.getTask()
  }
  render() {
    const { tableData, tableHead, visible, pagination } = this.state
    return (
      <div>
        <Drawer
          width={720}
          title="新增任务"
          placement="right"
          onClose={this.onClose}
          visible={visible}
        >
          <Form
            ref={this.formRef}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={this.handleSave}
            autoComplete="off"
          >
            <Form.Item
              label="任务名称"
              name="name"
              rules={[{ required: true, message: '请输入任务名称' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="描述"
              name="des"
              rules={[{ required: true, message: '请输入描述' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="时间"
              name="dealline"
              rules={[{ required: true, message: '请输入时间' }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
                <Button htmlType="button">重置</Button>
              </Space>
            </Form.Item>
          </Form>
        </Drawer>
        <Form layout="inline" onFinish={this.handleSearch}>
          <Form.Item label="任务名称" name="name">
            <Input allowClear onChange={this.onChange} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button
              onClick={this.handleAdd}
              style={{ margin: '0 8px' }}
              icon={<PlusOutlined />}
            >
              新增
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <Table
          bordered
          columns={tableHead}
          dataSource={tableData}
          pagination={{ ...pagination, onChange: this.paginationChange }}
        />
      </div>
    )
  }
}

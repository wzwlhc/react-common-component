import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import WithGetLocalStorageData from './common/components/highOrderComponents/getStorage';


const AppOder = (props) => {
  console.log(props);
  const { data: propsData } = props;
  const [c, setC] = useState([]);
  const [a, setA] = useState([]);
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, row, index) => {
        console.log(row);
        if (index < 4) {
          return <>
            <td>{text}</td>
            <td>111</td>
          </>;
        }
        return {
          children: <a>{text}</a>,
          props: {
            colSpan: 5,
          },
        };
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      render: renderContent,
    },
    {
      title: 'Home phone',
      dataIndex: 'tel',
      // colSpan: 4,
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        }
        if (index === 2) {
          obj.props.rowSpan = 0.5;
        }
        if (index === 3) {
          obj.props.rowSpan = 0;
        }
        if (index === 4) {
          obj.props.colSpan = 0;
        }
        return obj;
      }
      // render: (value, row, index) => {
      //   const obj = {
      //     children: value,
      //     props: {},
      //   };
      //   if (index === 2) {
      //     obj.props.rowSpan = 2;
      //   }
      //   // These two are merged into above cell

      //   return obj;
      // },
    },
    {
      title: 'Phone',
      colSpan: 0,
      dataIndex: 'phone',
      render: renderContent,

    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: renderContent,

    },
  ];
  const data = [
    
  ];
  useEffect(() => {
    setC(columns);
    setA(data);
  }, [])

  const handleClickAdd = () => {
    const b = [...c];
    const d = [...a];
    b.splice(1, 0, {
      title: '111',
      dataIndex: '',
    })
    setC(b);
  }
  console.log(c);
  return (
    <div className="App">
      <Button type="primary" onClick={handleClickAdd}>增加一列</Button>
      {propsData}
      <p></p>
      <p>
        <Table columns={c} dataSource={a} bordered />
      </p>
    </div>
  );
}
const App = WithGetLocalStorageData()(AppOder);
export default App;
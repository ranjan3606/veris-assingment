import './App.css';
import { Col, Row, Divider } from 'antd';
import Sidebar from './component/Sidebar';
import ScheduleForm from './component/ScheduleForm';
import React, { useEffect, useState } from 'react';

const useResize = (size) => {
  const [isLower, setIsLower] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 990) {
      setIsLower(true)
    } else {
      setIsLower(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return isLower
}

function App() {
  const isLower = useResize(990);
  return (
    <div className="App">
      <div className={`container ${isLower ? 'mobile': 'desktop'}`}>
        <Row className='grid'>
          <Col span={24} lg={5}>
            <Sidebar />
          </Col>
          <Col span={24} lg={1}>
            <Divider type={isLower ? 'horizontal' : 'vertical'} style={{height: "100%"}}/>
          </Col>
          <Col span={24} lg={17}>
            <ScheduleForm />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

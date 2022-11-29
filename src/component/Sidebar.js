import React, { Fragment } from 'react'
import { Typography } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, GlobalOutlined } from '@ant-design/icons';

const { Text } = Typography;

function Sidebar() {
    return (
        <Fragment>
            <Text type="secondary" className='scheduler-name'>Gaurav Garg</Text> <br />
            <Text className="scheduler-time">15 Minute Meeting</Text>
            <div className='schedulers'>
                <ClockCircleOutlined className='icon'/>
                <Text type="secondary">15 Min</Text>
            </div>
            <div className='schedulers' >
                <CalendarOutlined className='icon'/>
                <Text type="secondary">9:30am - 9:45am, Friday, September 16, 2022</Text>
            </div>
            <div className='schedulers'>
                <GlobalOutlined  className='icon'/>
                <Text type="secondary">India Standard Time</Text>
            </div>
        </Fragment>
    )
}

export default Sidebar
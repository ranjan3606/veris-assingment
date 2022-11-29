import React, { Fragment, useState } from "react";
import { Typography, Input, Button, message } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const requiredFields = ["name", "email"];

function ScheduleForm() {
  const [messageApi, contextHolder] = message.useMessage({
    prefixCls: 'alert'
  });

  const [emptyErrors, setEmptyErrors] = useState({
    name: false,
    email: false,
  });

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    extraInfo: "",
  });
  const onChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onBlur = (e) => {
    if (requiredFields.includes(e.target.name) && !e.target.value) {
      setEmptyErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: true,
      }));
    } else {
      setEmptyErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: false,
      }));
    }
  };
  const nameProps = emptyErrors.name ? { type: "danger", status: "error" } : {};
  const emailProps = emptyErrors.email
    ? { type: "danger", status: "error" }
    : {};

  const stopDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onSubmit = (e) => {
    stopDefault(e);
    if (!payload.name) {
      messageApi.error("Name is required");
      return;
    }
    if (!payload.email) {
      message.error("Email is required");
      return;
    }

    messageApi.success(
      `Name: ${payload.name}, Email: ${payload.email} & ExtraInfo: ${payload.extraInfo}`
    );
  };

  return (
    <Fragment>
      {contextHolder}
      <form className="schedule-details">
        <Title level={3} className="scheduler-header-text">
          Enter Details
        </Title>
        <div className="scheduler-form">
          <label htmlFor="name">
            <Typography.Text strong={true} {...nameProps}>
              Name*
            </Typography.Text>
          </label>
          <Input
            id="name"
            name="name"
            onBlur={onBlur}
            {...nameProps}
            onChange={onChange}
            value={payload.name}
          />
        </div>
        <div className="scheduler-form">
          <label htmlFor="email">
            <Typography.Text strong {...emailProps}>
              Email*
            </Typography.Text>
          </label>
          <Input
            id="email"
            name="email"
            onBlur={onBlur}
            {...emailProps}
            onChange={onChange}
            value={payload.email}
          />
        </div>
        <Button type="primary" ghost shape="round" onClick={stopDefault}>
          Add Guest
        </Button>
        <div className="scheduler-form">
          <label htmlFor="extraInfo">
            <Typography.Text strong>
              Please share anything that will help prepare for our meeting.
            </Typography.Text>
          </label>
          <TextArea
            rows={4}
            onChange={onChange}
            id="extraInfo"
            name="extraInfo"
            value={payload.extraInfo}
          />
        </div>
        <Button type="primary" shape="round" onClick={onSubmit}>
          Schedule Event
        </Button>
      </form>
    </Fragment>
  );
}

export default ScheduleForm;

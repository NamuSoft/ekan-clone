import { Form, Button, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";

import styles from "./ContactUsFormComponent.module.css";

export const ContactUsFormComponent = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    void message.info(JSON.stringify(values));
  };

  return (
    <Form
      form={form}
      layout='horizontal'
      onFinish={onFinish}
      className={styles.formContainer}
    >
      <div className={styles.name}>
        <Form.Item name='Name'>
          <Input
            placeholder='Name'
            className='h-14 border-[--border3] bg-transparent'
          />
        </Form.Item>
      </div>

      <div className={styles.email}>
        <Form.Item name='Email'>
          <Input
            className='h-14 border-[--border3] bg-transparent'
            placeholder='Email'
          />
        </Form.Item>
      </div>

      <div className={styles.subject}>
        <Form.Item name='Subject'>
          <Input
            className='h-14 border-[--border3] bg-transparent'
            placeholder='Subject'
          />
        </Form.Item>
      </div>

      <div className={styles.message}>
        <Form.Item name='Message'>
          <TextArea
            placeholder='Message'
            className='border-[--border3] bg-transparent'
            autoSize={{
              minRows: 6,
            }}
          />
        </Form.Item>
      </div>

      <div className={styles.submit}>
        <Button
          type='default'
          htmlType='submit'
          className={styles.contactButton}
        >
          <span className='relative z-[4] text-[--text]'>send a message</span>
        </Button>
      </div>
    </Form>
  );
};

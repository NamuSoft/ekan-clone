import { Form, Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

import styles from "./AddCommentComponent.module.css";

type Props = {
  onFinish: () => void;
};

export const AddCommentComponent = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    props.onFinish();
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
            className='h-14 border-[--border3] bg-transparent'
            placeholder='Name'
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

      <div className={styles.message}>
        <Form.Item name='Message'>
          <TextArea
            className='border-[--border3] bg-transparent'
            placeholder='Message'
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
          <span className='relative z-[4] text-[--text]'>Post comment</span>
        </Button>
      </div>
    </Form>
  );
};

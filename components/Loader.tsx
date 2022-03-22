import { Spin, Space } from "antd";

type Props = { styles?: { [key: string]: string } };

const Loader = ({ styles }: Props) => {
  let defaultStyles = {
    width: "20px",
    height: '100%',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "200px",
  };

  if (styles) {
    defaultStyles = { ...defaultStyles, ...styles };
  }

  return (
    <div style={defaultStyles}>
      <Space size="middle" style={{margin: 'auto'}}>
        <Spin />
      </Space>
    </div>
  );
};

export default Loader;

type Props = { message?: string; styles?: { [key: string]: string } };

const Error = ({ message, styles }: Props) => {
  let defaultStyles = {
    width: "100%",
    marginTop: "50px",
    marginBottom: "50px",
  };

  if (styles) {
    defaultStyles = { ...defaultStyles, ...styles };
  }

  return (
    <div style={defaultStyles}>
        <span>{message || "Error Occured"}</span>
    </div>
  );
};

export default Error;

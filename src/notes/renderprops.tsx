const Renderprops = ({
  render,
}: {
  render: (isOn: boolean) => JSX.Element;
}) => {
  const isOn = true;
  return render(isOn);
};

export default Renderprops;

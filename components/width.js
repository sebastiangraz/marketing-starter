export const Width = ({ value = [], outerPadding, children, ...rest }) => {
  const padding = 48;
  let width = value.map((e) => {
    const gapSize = 56;
    const gap = 100 / (1288 / gapSize);
    const gapmath = (size) => -gap / (12 / size);
    return `${e !== 12 ? (100 * e) / 12 - gapmath(e) : "100"}%`;
  });
  return (
    <div {...rest} sx={{ width: width }}>
      {children}
    </div>
  );
};

export type FloatingImagesProps = {
  src: string;
  variant: string;
};

export const FloatingImages = (props: FloatingImagesProps) => {
  return (
    <img
      src={props.src}
      alt=""
      className={`box-border caret-transparent w-full ${props.variant}`}
    />
  );
};

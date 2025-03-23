import clsx from "clsx";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("mx-auto max-w-[120rem] px-4", className)}>
      {children}
    </div>
  );
};
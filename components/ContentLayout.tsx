import { FC } from "react";

type ContentLayoutProps = {
  title: string;
  children: React.ReactNode;
  direction?: "row" | "col";
};

const ContentLayout: FC<ContentLayoutProps> = ({
  title,
  children,
  direction,
}) => {
  return (
    <div
      className={`w-full flex flex-${
        direction || "col"
      } items-start justify-center mb-10 gap-5`}
    >
      <h1 className="text-white text-2xl font-bold mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default ContentLayout;

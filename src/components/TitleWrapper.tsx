

function TitleWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="text-center">{children}</div>;
}

export default TitleWrapper;
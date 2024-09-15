

function TitleWrapper({ children } : { children: React.ReactNode }) {
  return <div className="text-center py-[clamp(1rem,5vh,3rem)]">{children}</div>;
}

export default TitleWrapper;


function TitleWrapper({ children } : { children: React.ReactNode }) {
  return <div className="text-center">{children}</div>;
}

TitleWrapper.PreTitle = function ({text}: {text: string}) {
  return <p style={{ fontSize: "clamp(1.35rem, 1.5vw, 3rem)" }}>{text}</p>;
}

export default TitleWrapper;
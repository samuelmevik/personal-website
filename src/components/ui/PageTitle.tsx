function PageTitle({children, preTitle: title }: {children?: React.ReactNode, preTitle?: string }) {
  return (
    <div className="grid place-items-center" style={{ font: "Rubik" }}>
      <p className="peer-hover:hidden leading-tight" style={{ fontSize: "clamp(1.35rem, 1.5vw, 3rem)" }}>{title}</p>
      {children}
    </div>
  )
}

export default PageTitle;
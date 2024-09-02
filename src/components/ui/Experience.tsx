
function Experience({ children, title, date, place }: { children: React.ReactNode, title: string, date?: string, place?: string }) {
  return (
    <div className="flex flex-col p-1 gap-4">
      <div className="flex justify-between">
        <p className="font-semibold">{title}</p>
        {date && <p className="self-center" style={{fontSize: "clamp(0.5rem, 1vw, 1rem)"}}>{date}</p>}
      </div>
      
      {place && <p className="font-semibold">{place}</p>}
      {children}
    </div>
  )
}

export default Experience;
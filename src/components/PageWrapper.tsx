import { twMerge } from "tailwind-merge"

function PageWrapper ({ children, id, className } : { children: React.ReactNode, id?: string, className ?: string }) {
  return (
    <div className={twMerge("w-svw min-h-svh p-4 relative", className)} id={id}>
      {children}
    </div>
  )
}

export default PageWrapper
export function DefaultLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`container m-auto px-4 ${className}`}>
            {children}
        </div>
    )
}


type PageTitleProps = {
    title: string
}

function PageTitle({ title }: PageTitleProps) {
    return (
        <h1 className="p-4 bg-primary text-white uppercase font-semibold text-center">{title}</h1>
        
    )
}

export default PageTitle
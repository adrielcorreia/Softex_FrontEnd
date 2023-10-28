import '../styles/header.css'

export function Title(props:{title: string, description: string}) {
    return (
        <div className="header">
            <h1 id="title">{props.title}</h1>
            <p id='description'>{props.description}</p>
        </div>
    )
}
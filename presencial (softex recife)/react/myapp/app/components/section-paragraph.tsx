export function ParagraphCustomizable(props:{text: string}) {
    return (
        <section className="section paragraph-customizable">
            <div className="div-section">
                <h1 className="section-h1">Parágrafo personalizável</h1>
                <h2>Parágrafo: {props.text}</h2>
            </div>
        </section>
    )
}
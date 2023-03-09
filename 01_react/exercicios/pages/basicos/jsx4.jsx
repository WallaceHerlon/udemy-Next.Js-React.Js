
export default function jsx4() {
    const subtitulo = "JavaScript!"
    const trecho = <h2>{10 * 10}</h2>

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trecho}
            <h2>{Math.max(30, 70)}</h2>
        </div>
    )
}
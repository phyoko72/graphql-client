export default function Book({author, title, genres, published, id}) {
    return (
        <>
            <div className=" mb-6 border-b">
                <h5 className=" font-bold">{title}</h5>
                <span>{author}</span>/ <span>{published}</span>
                {/* <ul>
                    {genres.map(gn=> <li>{gn}</li> )}
                </ul> */}
            </div>
        </>
    )
}

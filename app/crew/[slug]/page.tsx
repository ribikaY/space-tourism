export default function Page({ params }: { params: { slug: string } }) {
    return <div>Crew: {params.slug}</div>
}
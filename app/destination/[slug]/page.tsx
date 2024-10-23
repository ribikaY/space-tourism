export default function Page({ params }: { params: { slug: string } }) {
    return <div>Destination: {params.slug}</div>
}
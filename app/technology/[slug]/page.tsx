export default function Page({ params }: { params: { slug: string } }) {
    return <div>Technology: {params.slug}</div>
}
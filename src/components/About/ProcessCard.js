export default function ProcessCard ({ index, heading, description }) {
    return (
        <div>
            <h4 className="text-8xl font-bold text-(--color-primary)">{index}.</h4>
            <h5 className="text-xl font-bold text-(--color-primary) mt-2">{heading}</h5>
            <p className="mt-8">{description}</p>
        </div>
    )
}
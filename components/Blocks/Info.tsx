import { StrapiImageVideo } from "../Layout/StrapiImageVideo";

export default function InfoBlock(block: any) {
    return (
        <div className={`info-block p-8 bg-gray-100 rounded-lg shadow-md flex gap-10 ${block.isReverse ? "flex-row-reverse" : "flex-row"}`}>
            <div className="w-1/2 flex items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">{block.title}</h2>
                <p className="text-lg mb-6">{block.description}</p>
            </div>
            <div className="w-1/2">
                {block.image && (
                    <StrapiImageVideo
                        height={300}
                        width={600}
                        src={block.image.url}
                        alt={block.image.alternativeText}
                        className="w-full h-auto mb-6 rounded-lg"
                    />
                )}
            </div>
        </div>
    );
}
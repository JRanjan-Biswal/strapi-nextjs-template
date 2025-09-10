import Link from "next/link";
import { StrapiImageVideo } from "../Layout/StrapiImageVideo";

export default function HeroSection(block: any) {
    return (
        <div className="relative w-full h-[calc(100svh_-_100px)]">
            <StrapiImageVideo
                src={block?.desktop_image_video?.url}
                alt={block?.desktop_image_video?.alternativeText}
                height={500} width={600} className="w-full h-[calc(100svh_-_100px)] object-cover absolute inset-0"
            />
            <div className="absolute top-1/2 left-20 -translate-y-1/2">
                <h1 className="font-extrabold text-white block w-1/2 text-6xl">{block.heading}</h1>
                <h5 className="font-bold text-white w-1/2 text-3xl mt-7">{block.description}</h5>
                {
                    block?.cta?.href &&
                    <Link href={block.cta.href} className="mt-7 block text-bold text-black font-semibold text-2xl bg-white w-max px-2 pt-2 pb-3 rounded-4xl">
                        {block?.cta?.text}
                    </Link>
                }
            </div>
        </div>
    );
}
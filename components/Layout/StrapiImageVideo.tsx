import Image from "next/image";
import { getBackendUrl } from "@/utils/get-backend-url";

interface StrapiImageProps {
    src: string;
    alt: string;
    className?: string;
    [key: string]: string | number | boolean | undefined;
}

export function StrapiImageVideo({
    src,
    alt,
    className,
    ...rest
}: Readonly<StrapiImageProps>) {

    const { src: mediaSrc, type } = getStrapiMedia(src);
    if (!mediaSrc) return null;

    if (type === "video") {
        return (
            <video className={className} {...rest} controls={false} autoPlay muted loop>
                <source src={mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
    return <Image src={mediaSrc} alt={"alt"} className={className} {...rest} />;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) return { src: null, type: null };
    if (url.startsWith("data:")) return { src: url, type: null };
    if (url.startsWith("http") || url.startsWith("//")) {
        return {
            src: url,
            type: url.match(/\.(mp4|webm)$/i) ? "video" : "image"
        };
    }
    const fullUrl = getBackendUrl() + url;
    return {
        src: fullUrl,
        type: fullUrl.match(/\.(mp4|webm)$/i) ? "video" : "image"
    };
}
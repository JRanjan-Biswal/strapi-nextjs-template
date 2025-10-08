import { BlockGenerator } from "@/components/Layout/BlockGenerator";
import { getPageData } from "@/data_fetcher/fetcher";
import { notFound, redirect } from "next/navigation";

async function fetchData(slug?: string) {
    try {
        const data = await getPageData(slug);

        if (!data || !data.data?.[0]) notFound();

        return data?.data?.[0] || {};
    }
    catch (error) {
        redirect('/setup');
        notFound();
    }
}

export default async function DynamicPage(
    { params }: { params: { slug: string } }
) {
    const slug = params?.slug;

    const data = await fetchData(slug);

    return (
        <div className="min-h-screen">
            <BlockGenerator blocks={data.blocks} />
        </div>
    );
}

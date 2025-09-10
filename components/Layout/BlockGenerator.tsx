import dynamic from "next/dynamic";

function blockGenerator(block: any, index: number) {

    if (!block || !block.__component) return <></>;


    const component = block.__component.split(".")[1].split("-").map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

    const DynamicComponent = dynamic(() =>
        import(`@/components/Blocks/${component}`)
            .catch(() => {
                console.error(`Component not found for block: ${component}`);
                return () => <div>Block component not found</div>;
            })
    );

    return <DynamicComponent {...block} key={index} />;

}

export function BlockGenerator({ blocks }: { blocks: any }) {
    return blocks.map((block: any, index: number) => blockGenerator(block, index));
}
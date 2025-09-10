'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page() {
    const strapiAdminUrl = "http://localhost:1337/admin";
    const [copySuccess, setCopySuccess] = React.useState<number | string>("");

    const copyToClipboard = async (text: string, index: number) => {
        try {
            if (!text) throw new Error("No text to copy");
            await navigator.clipboard.writeText(text);
            setCopySuccess(index);
            setTimeout(() => setCopySuccess(""), 2000);
        } catch (err) {
            setCopySuccess("");
            setTimeout(() => setCopySuccess(""), 2000);
        }
    };

    return <div className="min-h-[calc(100svh_-_195px)] pb-20 bg-[#0b192d] text-white">

        <h1 className="text-4xl font-bold mb-4 text-center pt-20">Welcome to Next.js with Strapi!</h1>
        <p className="text-lg text-center pb-10">This is the setup page. Follow the instruction below.</p>

        <div className="max-w-[1080px] mx-auto">
            <div className="bg-[#393939] text-white p-6 rounded-lg shadow-md mt-8">
                <h4 className="text-base mb-4 font-light">The open-source Headless CMS for developers that makes API creation easy, and supports your favorite frameworks. <br />Customize and host your projects in the cloud or on your own servers. <Link href="https://docs.strapi.io/cms/intro" target='_blank' className='text-sm text-[rgb(43,253,0)]'>Read More</Link></h4>
                <div className='grid grid-cols-12 items-center relative'>
                    <b className='col-start-1 col-end-2'>Step 1 :</b>
                    <code className="bg-gray-800 px-3 py-2 rounded col-start-2 col-end-11">npx create-strapi-app@latest</code>
                    <button
                        onClick={() => copyToClipboard('npx create-strapi-app@latest', 1)}
                        className="cursor-pointer px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white col-start-12"
                    >Copy</button>
                    {copySuccess == 1 && <p className="mt-2 text-green-400 absolute right-0 text-xs bottom-0 translate-y-full">Copied!</p>}
                </div>
            </div>

            <div className="bg-[#393939] text-white p-6 rounded-lg shadow-md mt-8">
                <h4 className="text-base mb-4 font-light"><u>Add deepPopulate plugin</u><br />
                    1. This plugin allows you to populate nested fields in your API responses, making it easier to retrieve related data in a single request.<br />
                    2. This package replace existing api, components and middleware folder for strapi js.
                </h4>
                <div className='grid grid-cols-12 items-center relative'>
                    <b className='col-start-1 col-end-2'>Step 2 :</b>
                    <code className="bg-gray-800 px-3 py-2 rounded col-start-2 col-end-11">npm install https://github.com/JRanjan-Biswal/strapi-deepopulate.git --foreground-scripts</code>
                    <button
                        onClick={() => copyToClipboard('npm install https://github.com/JRanjan-Biswal/strapi-deepopulate.git --foreground-scripts', 2)}
                        className="cursor-pointer px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white col-start-12"
                    >Copy</button>
                    {copySuccess == 2 && <p className="mt-2 text-green-400 absolute right-0 text-xs bottom-0 translate-y-full">Copied!</p>}
                </div>
            </div>

            <div className="bg-[#393939] text-white p-6 rounded-lg shadow-md mt-8">
                <h4 className="text-base mb-4 font-light">Add this script to package.json of strapi js. Check the image below. </h4>
                <div className='grid grid-cols-12 items-center relative'>
                    <b className='col-start-1 col-end-2'>Step 3 :</b>
                    <code className="bg-gray-800 px-3 py-2 rounded col-start-2 col-end-11">"deepopulate": "strapi-deepopulate"</code>
                    <button
                        onClick={() => copyToClipboard('"deepopulate": "strapi-deepopulate"', 3)}
                        className="cursor-pointer px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white col-start-12"
                    >Copy</button>
                    {copySuccess == 3 && <p className="mt-2 text-green-400 absolute right-0 text-xs bottom-0 translate-y-full">Copied!</p>}
                </div>
                <Image src="/image.png" alt="package.json" width={400} height={200} className="mt-4 border border-gray-600 rounded w-[400px] h-[200px]" />
            </div>

            <div className="bg-[#393939] text-white p-6 rounded-lg shadow-md mt-8">
                    <h4 className="text-base mb-4 font-light">This is the final step, inside the strapi project, now run the below command</h4>
                <div className='grid grid-cols-12 items-center relative'>
                    <b className='col-start-1 col-end-2'>Final step :</b>
                    <code className="bg-gray-800 px-3 py-2 rounded col-start-2 col-end-11">npm run dev</code>
                    <button
                        onClick={() => copyToClipboard('npm run dev', 4)}
                        className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white col-start-12"
                    >Copy</button>
                    {copySuccess == 3 && <p className="mt-2 text-green-400 absolute right-0 text-xs bottom-0 translate-y-full">Copied!</p>}
                </div>
            </div>
        </div>
    </div>;
}

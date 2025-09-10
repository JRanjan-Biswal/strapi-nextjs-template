import { fetchAPI } from "@/utils/fetch-api";
import { getBackendUrl } from "@/utils/get-backend-url";
import pageQuery from "@/utils/query";

export async function getPageData(slug: string = "home-page") {
  try {

    let pathSetter = (Array.isArray(slug) && slug.length > 1) ? `${slug[slug.length - 2]}s` : "pages";
    console.log('Determined pathSetter:', pathSetter, slug);
    const path = `/api/${pathSetter}`;
    const baseUrl = getBackendUrl();
    if (!baseUrl) throw new Error("BASE_URL is not defined");
    
    const url = new URL(path, baseUrl);

    console.log('Fetching page data for slug:', slug, 'from URL:', url.href);

    url.search = pageQuery(slug || 'home-page');

    return await fetchAPI(url.href, { method: "GET" });
  }
  catch (error) {
    throw error;
  }
}
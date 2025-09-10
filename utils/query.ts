import QueryString from "qs";

const pageQuery = (slug: string = "home-page") => {
    return QueryString.stringify({
        filters: { slug }
    })
};

export default pageQuery;
import ISearchParams from "./search-params";
export default interface IPageParams {
    params: {
        slug: string;
    };
    searchParams: ISearchParams;
}

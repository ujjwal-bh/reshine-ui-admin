import qs from "query-string"

interface IProps {
    page: number,
    limit: number
    offset?: number
}
export const query = ({page, limit, offset}: IProps) => {
    return qs.stringifyUrl({
        url: "",
        query: {
            page,
            limit,
            offset
        }
    }, {skipNull: true, skipEmptyString: true})
    
}
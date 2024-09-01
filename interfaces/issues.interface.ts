import { BaseInterface } from "./baseInterface";

export interface IIssues extends BaseInterface {
    results: IIssue[]
}

interface IIssue{
// properties
id: string
}

export interface IIssueTypes extends BaseInterface {
    results: IIssueType[]
}

interface IIssueType{
    id:string,
    name: string,
    active: boolean

}

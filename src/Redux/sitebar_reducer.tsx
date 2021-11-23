export type SitebarPropsType = {
    id: number
    name: string
    image: string
}

let initialState: SitebarPropsType[] = []

export type ActionSitebarPropsType = { type: "NOT-AN-ACTION" }

export const sitebarReducer = (state: SitebarPropsType[] = initialState, action: ActionSitebarPropsType) => {
    return state
}
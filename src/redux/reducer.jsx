export function isVisibleReducer(state = true, action) {
    if (action.type === "IS_VISIBLE") {
        return true
    } else {
        return false
    }
}
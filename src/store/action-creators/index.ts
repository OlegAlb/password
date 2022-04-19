import * as SessionActionCreators from "./session"
import * as SettingsActionCreators from "./settings"

export default {
    ...SessionActionCreators,
    ...SettingsActionCreators
}
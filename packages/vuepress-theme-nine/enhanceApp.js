import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { registerCodeThemeCss } from '@theme/helpers/other'

export default ({
  Vue,
  siteData,
  isServer
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  if (!isServer) {
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }
}

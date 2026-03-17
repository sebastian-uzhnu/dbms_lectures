
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppDocSearch': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue")['default']
    'AppFooter': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppFooter.vue")['default']
    'AppHeader': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeader.vue")['default']
    'AppHeaderDialog': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue")['default']
    'AppHeaderLogo': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue")['default']
    'AppHeaderNavigation': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue")['default']
    'AppLayout': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLayout.vue")['default']
    'AppLoadingBar': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue")['default']
    'AppSearch': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSearch.vue")['default']
    'AppSocialIcons': typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue")['default']
    'DocumentDrivenNotFound': typeof import("../node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue")['default']
    'Ellipsis': typeof import("../node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue")['default']
    'Logo': typeof import("../node_modules/@nuxt-themes/docus/components/app/Logo.vue")['default']
    'ThemeSelect': typeof import("../node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue")['default']
    'DocsAside': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue")['default']
    'DocsAsideTree': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue")['default']
    'DocsPageBottom': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue")['default']
    'DocsPageLayout': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue")['default']
    'DocsPrevNext': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue")['default']
    'DocsToc': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue")['default']
    'DocsTocLinks': typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue")['default']
    'EditOnLink': typeof import("../node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue")['default']
    'SourceLink': typeof import("../node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCode.vue")['default']
    'ProseCodeInline': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseP.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseUl.vue")['default']
    'ProseCodeCopyButton': typeof import("../node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue")['default']
    'Alert': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Alert.vue")['default']
    'Badge': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Badge.vue")['default']
    'ButtonLink': typeof import("../node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue")['default']
    'Callout': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Callout.vue")['default']
    'CodeBlock': typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue")['default']
    'CodeGroup': typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue")['default']
    'Container': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Container.vue")['default']
    'CopyButton': typeof import("../node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue")['default']
    'List': typeof import("../node_modules/@nuxt-themes/elements/components/globals/List.vue")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue")['default']
    'Props': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Props.vue")['default']
    'Sandbox': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue")['default']
    'TabsHeader': typeof import("../node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue")['default']
    'Terminal': typeof import("../node_modules/@nuxt-themes/elements/components/globals/Terminal.vue")['default']
    'VideoPlayer': typeof import("../node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue")['default']
    'IconCodeSandBox': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue")['default']
    'IconDocus': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue")['default']
    'IconNuxt': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue")['default']
    'IconNuxtContent': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue")['default']
    'IconNuxtLabs': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue")['default']
    'IconNuxtStudio': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue")['default']
    'IconStackBlitz': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue")['default']
    'IconVueTelescope': typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue")['default']
    'BlockHero': typeof import("../node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue")['default']
    'Card': typeof import("../node_modules/@nuxt-themes/elements/components/landing/Card.vue")['default']
    'CardGrid': typeof import("../node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue")['default']
    'VoltaBoard': typeof import("../node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue")['default']
    'ComponentPlayground': typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue")['default']
    'ComponentPlaygroundData': typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue")['default']
    'ComponentPlaygroundProps': typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue")['default']
    'ComponentPlaygroundSlots': typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue")['default']
    'ComponentPlaygroundTokens': typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue")['default']
    'PreviewLayout': typeof import("../node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue")['default']
    'TokensPlayground': typeof import("../node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue")['default']
    'ContentDoc': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
    'ContentList': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
    'ContentNavigation': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
    'ContentQuery': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'ContentRendererMarkdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
    'ContentSlot': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
    'DocumentDrivenEmpty': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
    'Markdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'Icon': typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
    'IconCSS': typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAppDocSearch': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue")['default']>
    'LazyAppFooter': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeader.vue")['default']>
    'LazyAppHeaderDialog': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue")['default']>
    'LazyAppHeaderLogo': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue")['default']>
    'LazyAppHeaderNavigation': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue")['default']>
    'LazyAppLayout': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLayout.vue")['default']>
    'LazyAppLoadingBar': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue")['default']>
    'LazyAppSearch': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSearch.vue")['default']>
    'LazyAppSocialIcons': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue")['default']>
    'LazyDocumentDrivenNotFound': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue")['default']>
    'LazyEllipsis': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue")['default']>
    'LazyLogo': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/Logo.vue")['default']>
    'LazyThemeSelect': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue")['default']>
    'LazyDocsAside': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue")['default']>
    'LazyDocsAsideTree': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue")['default']>
    'LazyDocsPageBottom': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue")['default']>
    'LazyDocsPageLayout': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue")['default']>
    'LazyDocsPrevNext': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue")['default']>
    'LazyDocsToc': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue")['default']>
    'LazyDocsTocLinks': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue")['default']>
    'LazyEditOnLink': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue")['default']>
    'LazySourceLink': LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCode.vue")['default']>
    'LazyProseCodeInline': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseP.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseUl.vue")['default']>
    'LazyProseCodeCopyButton': LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue")['default']>
    'LazyAlert': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Alert.vue")['default']>
    'LazyBadge': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Badge.vue")['default']>
    'LazyButtonLink': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue")['default']>
    'LazyCallout': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Callout.vue")['default']>
    'LazyCodeBlock': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue")['default']>
    'LazyCodeGroup': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue")['default']>
    'LazyContainer': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Container.vue")['default']>
    'LazyCopyButton': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue")['default']>
    'LazyList': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/List.vue")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue")['default']>
    'LazyProps': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Props.vue")['default']>
    'LazySandbox': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue")['default']>
    'LazyTabsHeader': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue")['default']>
    'LazyTerminal': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Terminal.vue")['default']>
    'LazyVideoPlayer': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue")['default']>
    'LazyIconCodeSandBox': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue")['default']>
    'LazyIconDocus': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue")['default']>
    'LazyIconNuxt': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue")['default']>
    'LazyIconNuxtContent': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue")['default']>
    'LazyIconNuxtLabs': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue")['default']>
    'LazyIconNuxtStudio': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue")['default']>
    'LazyIconStackBlitz': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue")['default']>
    'LazyIconVueTelescope': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue")['default']>
    'LazyBlockHero': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue")['default']>
    'LazyCard': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/landing/Card.vue")['default']>
    'LazyCardGrid': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue")['default']>
    'LazyVoltaBoard': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue")['default']>
    'LazyComponentPlayground': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue")['default']>
    'LazyComponentPlaygroundData': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue")['default']>
    'LazyComponentPlaygroundProps': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue")['default']>
    'LazyComponentPlaygroundSlots': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue")['default']>
    'LazyComponentPlaygroundTokens': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue")['default']>
    'LazyPreviewLayout': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue")['default']>
    'LazyTokensPlayground': LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue")['default']>
    'LazyContentDoc': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
    'LazyContentList': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
    'LazyContentNavigation': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
    'LazyContentQuery': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyContentRendererMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
    'LazyContentSlot': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
    'LazyDocumentDrivenEmpty': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
    'LazyMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
    'LazyIconCSS': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppDocSearch: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue")['default']
export const AppFooter: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppFooter.vue")['default']
export const AppHeader: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeader.vue")['default']
export const AppHeaderDialog: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue")['default']
export const AppHeaderLogo: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue")['default']
export const AppHeaderNavigation: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue")['default']
export const AppLayout: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLayout.vue")['default']
export const AppLoadingBar: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue")['default']
export const AppSearch: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSearch.vue")['default']
export const AppSocialIcons: typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue")['default']
export const DocumentDrivenNotFound: typeof import("../node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue")['default']
export const Ellipsis: typeof import("../node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue")['default']
export const Logo: typeof import("../node_modules/@nuxt-themes/docus/components/app/Logo.vue")['default']
export const ThemeSelect: typeof import("../node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue")['default']
export const DocsAside: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue")['default']
export const DocsAsideTree: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue")['default']
export const DocsPageBottom: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue")['default']
export const DocsPageLayout: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue")['default']
export const DocsPrevNext: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue")['default']
export const DocsToc: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue")['default']
export const DocsTocLinks: typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue")['default']
export const EditOnLink: typeof import("../node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue")['default']
export const SourceLink: typeof import("../node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCode.vue")['default']
export const ProseCodeInline: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseP.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseUl.vue")['default']
export const ProseCodeCopyButton: typeof import("../node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue")['default']
export const Alert: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Alert.vue")['default']
export const Badge: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Badge.vue")['default']
export const ButtonLink: typeof import("../node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue")['default']
export const Callout: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Callout.vue")['default']
export const CodeBlock: typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue")['default']
export const CodeGroup: typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue")['default']
export const Container: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Container.vue")['default']
export const CopyButton: typeof import("../node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue")['default']
export const List: typeof import("../node_modules/@nuxt-themes/elements/components/globals/List.vue")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue")['default']
export const Props: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Props.vue")['default']
export const Sandbox: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue")['default']
export const TabsHeader: typeof import("../node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue")['default']
export const Terminal: typeof import("../node_modules/@nuxt-themes/elements/components/globals/Terminal.vue")['default']
export const VideoPlayer: typeof import("../node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue")['default']
export const IconCodeSandBox: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue")['default']
export const IconDocus: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue")['default']
export const IconNuxt: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue")['default']
export const IconNuxtContent: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue")['default']
export const IconNuxtLabs: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue")['default']
export const IconNuxtStudio: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue")['default']
export const IconStackBlitz: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue")['default']
export const IconVueTelescope: typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue")['default']
export const BlockHero: typeof import("../node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue")['default']
export const Card: typeof import("../node_modules/@nuxt-themes/elements/components/landing/Card.vue")['default']
export const CardGrid: typeof import("../node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue")['default']
export const VoltaBoard: typeof import("../node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue")['default']
export const ComponentPlayground: typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue")['default']
export const ComponentPlaygroundData: typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue")['default']
export const ComponentPlaygroundProps: typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue")['default']
export const ComponentPlaygroundSlots: typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue")['default']
export const ComponentPlaygroundTokens: typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue")['default']
export const PreviewLayout: typeof import("../node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue")['default']
export const TokensPlayground: typeof import("../node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue")['default']
export const ContentDoc: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
export const ContentList: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
export const ContentNavigation: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
export const ContentQuery: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const ContentRendererMarkdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
export const ContentSlot: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
export const DocumentDrivenEmpty: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
export const Markdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const Icon: typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const IconCSS: typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAppDocSearch: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeader.vue")['default']>
export const LazyAppHeaderDialog: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue")['default']>
export const LazyAppHeaderLogo: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue")['default']>
export const LazyAppHeaderNavigation: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue")['default']>
export const LazyAppLayout: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLayout.vue")['default']>
export const LazyAppLoadingBar: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue")['default']>
export const LazyAppSearch: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSearch.vue")['default']>
export const LazyAppSocialIcons: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue")['default']>
export const LazyDocumentDrivenNotFound: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue")['default']>
export const LazyEllipsis: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue")['default']>
export const LazyLogo: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/Logo.vue")['default']>
export const LazyThemeSelect: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue")['default']>
export const LazyDocsAside: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue")['default']>
export const LazyDocsAsideTree: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue")['default']>
export const LazyDocsPageBottom: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue")['default']>
export const LazyDocsPageLayout: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue")['default']>
export const LazyDocsPrevNext: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue")['default']>
export const LazyDocsToc: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue")['default']>
export const LazyDocsTocLinks: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue")['default']>
export const LazyEditOnLink: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue")['default']>
export const LazySourceLink: LazyComponent<typeof import("../node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCode.vue")['default']>
export const LazyProseCodeInline: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseP.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/global/ProseUl.vue")['default']>
export const LazyProseCodeCopyButton: LazyComponent<typeof import("../node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue")['default']>
export const LazyAlert: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Alert.vue")['default']>
export const LazyBadge: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Badge.vue")['default']>
export const LazyButtonLink: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue")['default']>
export const LazyCallout: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Callout.vue")['default']>
export const LazyCodeBlock: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue")['default']>
export const LazyCodeGroup: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue")['default']>
export const LazyContainer: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Container.vue")['default']>
export const LazyCopyButton: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue")['default']>
export const LazyList: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/List.vue")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue")['default']>
export const LazyProps: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Props.vue")['default']>
export const LazySandbox: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue")['default']>
export const LazyTabsHeader: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue")['default']>
export const LazyTerminal: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/Terminal.vue")['default']>
export const LazyVideoPlayer: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue")['default']>
export const LazyIconCodeSandBox: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue")['default']>
export const LazyIconDocus: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue")['default']>
export const LazyIconNuxt: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue")['default']>
export const LazyIconNuxtContent: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue")['default']>
export const LazyIconNuxtLabs: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue")['default']>
export const LazyIconNuxtStudio: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue")['default']>
export const LazyIconStackBlitz: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue")['default']>
export const LazyIconVueTelescope: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue")['default']>
export const LazyBlockHero: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue")['default']>
export const LazyCard: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/landing/Card.vue")['default']>
export const LazyCardGrid: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue")['default']>
export const LazyVoltaBoard: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue")['default']>
export const LazyComponentPlayground: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue")['default']>
export const LazyComponentPlaygroundData: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue")['default']>
export const LazyComponentPlaygroundProps: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue")['default']>
export const LazyComponentPlaygroundSlots: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue")['default']>
export const LazyComponentPlaygroundTokens: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue")['default']>
export const LazyPreviewLayout: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue")['default']>
export const LazyTokensPlayground: LazyComponent<typeof import("../node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue")['default']>
export const LazyContentDoc: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
export const LazyContentList: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
export const LazyContentNavigation: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
export const LazyContentQuery: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyContentRendererMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
export const LazyContentSlot: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
export const LazyDocumentDrivenEmpty: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
export const LazyMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
export const LazyIconCSS: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]

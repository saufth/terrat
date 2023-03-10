// Components
import GSearchSchemaScript from './GSearchSchemaScript'
import Head from 'next/head'
// Global store
import { useLanguageStore } from '../../modules/app/store/AppStore'
import { shallow } from 'zustand/shallow'
// Config
import {
  baseUrl,
  coverImageUrl,
  descriptionConfig,
  keywords,
  organization,
  twitter
} from '../../modules/app/config'
// Types
import { ParentProps } from '../../types/layout'

const AppLayout = ({ children } : ParentProps) => {
  const { lang } = useLanguageStore(state => ({
    lang: state.lang
  }), shallow)

  const description = descriptionConfig[lang]
  const title = `${organization} – ${description}`

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='canonical' href={baseUrl} />
        <meta name='theme-color' content='#003A70' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={organization} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:site_name' content={organization} />
        <meta property='og:image' content={coverImageUrl} />
        <meta property='og:image:secure_url' content={coverImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={organization} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:site' content={twitter} />
        <meta name='twitter:image' content={coverImageUrl} />
      </Head>
      <main>
        {children}
      </main>
      <GSearchSchemaScript />
    </>
  )
}

export default AppLayout

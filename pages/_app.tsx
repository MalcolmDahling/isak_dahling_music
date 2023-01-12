import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <RecoilRoot>
            <Head>
                <meta name="description" content="Music by Isak Dahling" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Component {...pageProps}/>
        </RecoilRoot>
    );
}

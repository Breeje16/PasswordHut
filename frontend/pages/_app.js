import '../styles/globals.css'
import merge from 'lodash.merge';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Theme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const { chains, provider } = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID}),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'PasswordHut',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#9C27B0',
  },
}, Theme);

function MyApp({ Component, pageProps }) {
  return <>
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} theme={myTheme}>
      <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </div>
    </RainbowKitProvider>
  </WagmiConfig>
  </>
}

export default MyApp

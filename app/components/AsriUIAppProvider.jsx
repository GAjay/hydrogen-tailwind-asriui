import {AsriUIProvider} from 'asriui/config';

/**
 * App-wide AsriUI theme and config. Analytics/monitoring stay off unless you opt in.
 * @param {{children: React.ReactNode}}
 */
export function AsriUIAppProvider({children}) {
  return (
    <AsriUIProvider
      config={{
        theme: 'system',
        analytics: {enabled: false},
        monitoring: {enabled: false},
      }}
    >
      {children}
    </AsriUIProvider>
  );
}

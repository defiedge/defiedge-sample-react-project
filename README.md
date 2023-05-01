# React Component Project using `@defiedge/react`

This is a sample project demonstrating the use of `@defiedge/react` package to create a React component. `@defiedge/react` is a collection of reusable React components, styled with Tailwind CSS, that can be easily integrated into any React project.

## Installation

1. Clone this repository using 
    ```bash
    git clone https://github.com/unboundfinance/defiedge-sample-react-project.git
    ```
2. Change into the project directory 
    ```bash
    cd defiedge-sample-react-project
    ```
3. Install the required dependencies using 
    ```bash
    yarn install 
    ```
4. Start local dev server and open `http://localhost:3000` in the browser
    ```bash
    yarn dev # or npm run dev
    ```


## Usage

1. The `<DefiedgeProvider>` component sets up the context for the @defiedge/react. It takes a `children` prop that should be a React component or a tree of components that will have access to the context.
    ```tsx
    import { DefiedgeProvider } from '@defiedge/react'

    function App() {
      return (
        <DefiedgeProvider>
          <MyComponent />
        </DefiedgeProvider>
      )
    }
    ```

2. The `<LiquidityCard>` component provides a button that allows users to connect their wallet to the DefiEdge protocol. It takes an `strategyAddress` and `network` prop that with show stats and functionality for that strategy.
    ```tsx
    import { LiquidityCard, SupportedChainId } from '@defiedge/react'

    function MyComponent() {
      const strategyAddress: string = '0xc3ad...72bf9eb'
      const network: SupportedChainId = SupportedChainId.bsc

      return <LiquidityCard address={strategyAddress} network={network} />
    }
    ```

3. For more information on the available components and their usage, please refer to the [`@defiedge/react`](https://github.com/unbound-finance/defiedge-react-sdk#readme) package documentation.

## Contributing

If you'd like to contribute to `@defiedge/react`, please create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

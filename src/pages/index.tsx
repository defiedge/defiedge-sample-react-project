import { LiquidityCard, SupportedChainId } from "@defiedge/react";
import { isAddress } from "ethers/lib/utils";
import { useRef, useState } from "react";

const singleTokenOnlyMap: Partial<
  Record<SupportedChainId, Record<string, string>>
> = {
  [SupportedChainId.optimism]: {
    "0x97b9cdfc6cfdf997eed3068cb0eb317e7c783e49":
      "0x4200000000000000000000000000000000000042",
  },
  [SupportedChainId.polygon]: {
    "0x9610b3c59fee79d0f8b53a468aa2df3a8e17370f":
      "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  },
};

export default function Home() {
  const [state, setState] = useState<{
    network: SupportedChainId;
    address: string;
  } | null>({
    address: "0x648d923a8a95a08c15b6243960615b5913700a3e",
    network: SupportedChainId.arbitrum,
  });
  const addressRef = useRef<HTMLInputElement | null>(null);
  const networkRef = useRef<HTMLSelectElement | null>(null);

  return (
    <div className="flex">
      <div className="mx-auto min-w-[480px] py-8">
        {state ? (
          <>
            <div className="mb-8 text-right">
              <button
                className="rounded  bg-zinc-950 hover:bg-opacity-60 text-white px-9 py-2"
                onClick={() => setState(null)}
              >
                Reset
              </button>
            </div>
            <LiquidityCard
              allowedTokenForSingleSide={
                singleTokenOnlyMap[state.network]?.[state.address]
              }
              network={+state.network}
              strategyAddress={state.address}
            />
          </>
        ) : (
          <form
            onSubmit={(e) => {
              if (!isAddress(addressRef.current?.value || ""))
                return alert("Invalid address");

              setState({
                network: networkRef.current
                  ?.value as unknown as SupportedChainId,
                address: addressRef.current?.value!,
              });
              e.preventDefault();
            }}
          >
            <div className="flex space-x-4">
              <input
                type="text"
                value={addressRef.current?.value}
                className="border border-zinc-500 rounded px-4 py-2"
                ref={addressRef}
              />
              <select
                className="border border-zinc-500 rounded px-4 py-2 capitalize"
                value={networkRef.current?.value}
                ref={networkRef}
              >
                {Object.keys(SupportedChainId)
                  .filter((e) => !+e)
                  .map((key) => (
                    <option
                      key={key}
                      className="capitalize"
                      value={SupportedChainId[key as any]}
                    >
                      {key}
                    </option>
                  ))}
              </select>
              <button
                style={{
                  transitionProperty: "opacity",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "150ms",
                  backgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity))",
                }}
                className="rounded bg-black transition-opacity hover:bg-opacity-60 text-white px-9 py-2"
                type="submit"
              >
                Go
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

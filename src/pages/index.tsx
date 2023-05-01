import { LiquidityCard, SupportedChainId } from "@defiedge/react";
import { isAddress } from "ethers/lib/utils";
import { useRef, useState } from "react";

export default function Home() {
  const [state, setState] = useState<{
    network: SupportedChainId;
    address: string;
  } | null>({
    address: "0x3d6f08ae8c2931e27e95811e42f5d70164759a94",
    network: SupportedChainId.mainnet,
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

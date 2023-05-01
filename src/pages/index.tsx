import Image from "next/image";
import { Inter } from "next/font/google";
import { LiquidityCard, SupportedChainId } from "@defiedge/react";

export default function Home() {
  return (
    <div className="flex justify-center py-8">
      <LiquidityCard
        network={SupportedChainId.mainnet}
        strategyAddress="0x3d6f08ae8c2931e27e95811e42f5d70164759a94"
      />
    </div>
  );
}

import BcPnpCalculator from "@/components/Calculator/BcPnpCalculator";
import Bcpnpherro from "@/components/herroforbcnp";

export const metadata = {
  title: 'BC PNP Calculator | Canada PR Points - New Version 2026',
  description: 'BC PNP Calculator - New Version 2026 | Canada PR Points Calculator | Express Entry Canada | Permanent Resident Points Calculator | PR Visa Points Calculator',
};

export default function PageBcPnpCalculator() {
  return (
    <>
      <Bcpnpherro />
      <BcPnpCalculator/>
    </>
  );
}
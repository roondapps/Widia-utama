import { Hero } from "@/components/home/Hero";
import { TrustIntro } from "@/components/home/TrustIntro";
import { ProductCategories } from "@/components/home/ProductCategories";
import { WhyWidiaUtama } from "@/components/home/WhyWidiaUtama";
import { CustomOrder } from "@/components/home/CustomOrder";
import { ProductionProcess } from "@/components/home/ProductionProcess";
import { FactorySection } from "@/components/home/FactorySection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CatalogCTA } from "@/components/home/CatalogCTA";
import { CTASection } from "@/components/cta/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <ProductCategories />
      <WhyWidiaUtama />
      <CustomOrder />
      <ProductionProcess />
      <FactorySection />
      <PortfolioPreview />
      <CatalogCTA />
      <CTASection
        title={
          <>
            LET&apos;S BUILD
            <br />
            SOMETHING FOR
            <br />
            YOUR BUSINESS.
          </>
        }
        description="Ceritakan kebutuhan apparel Anda kepada kami."
      />
    </>
  );
}

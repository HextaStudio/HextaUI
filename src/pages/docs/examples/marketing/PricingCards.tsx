import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Badge } from "@/components/hexta-ui/Badge";
import { Button } from "@/components/hexta-ui/Button";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface PricingCardProps {
  items: PricingItem[];
  price: string;
  title: string;
  popular?: boolean;
  className?: string;
  period?: string;
}

export interface PricingItem {
  features: string[];
}

export const PricingCard = ({
  items,
  title,
  price,
  popular,
  className,
  period = "month",
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={cn(
        "flex flex-col p-6 bg-zinc-950 rounded-xl relative",
        "border border-white/10 hover:border-white/20",
        "transition-all duration-300 grow",
        popular &&
          "scale-105 border-purple-500/30 shadow-lg shadow-purple-500/10",
        "min-w-[300px]",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-300 to-blue-300">
          Most Popular
        </Badge>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black">{price}</span>
          {price !== "Free" && (
            <span className="text-sm text-white/60">/{period}</span>
          )}
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        {items[0].features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <div
              className={cn(
                "p-1 rounded-full",
                "bg-white/5 group-hover:bg-white/10",
                "transition-colors duration-200"
              )}
            >
              <FaCheck size={12} className="text-purple-500" />
            </div>
            <span className="text-sm text-white/80">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={cn(
          "w-full justify-center",
          popular
            ? "bg-gradient-to-r bg-white/90 hover:bg-white"
            : "bg-white/80 hover:bg-white"
        )}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

const pricing = () => {
  return (
    <>
      <DocsSEO
        title="Pricing Cards - hextastudio/ui"
        description="A ready to use pricing section with modern and reponsive pricing cards."
        image="https://i.imgur.com/TQqIiSH.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Pricing Cards"
            description="A ready to use pricing section with modern and reponsive pricing cards."
          />
          <DocsPreview className="flex flex-row flex-wrap gap-4 min-h-[30rem] p-2 items-end">
            <PricingCard
              title="Basic"
              price="$199"
              items={[
                {
                  features: [
                    "5GB Storage",
                    "Unlimited Public Repositories",
                    "Community Support",
                    "Access to Basic Tutorials",
                    "Email Support",
                  ],
                },
              ]}
            />
            <PricingCard
              title="Premium ++"
              price="$799"
              popular={true}
              items={[
                {
                  features: [
                    "Unlimited Storage",
                    "Unlimited Private Repositories",
                    "24/7 Support",
                    "Live Chat Support",
                    "Dedicated Account Manager",
                  ],
                },
              ]}
            />
            <PricingCard
              title="Premium"
              price="$399"
              items={[
                {
                  features: [
                    "50GB Storage",
                    "Dedicated Support",
                    "Access to Premium Tutorials",
                    "Priority Email Support",
                    "Live Chat Support",
                  ],
                },
              ]}
            />
          </DocsPreview>
          <InstallationSteps
            title="Complete Code"
            component={["Button", "Badge"]}
            imports={["Button", "Badge"]}
          />
          <CodeBlock
            lang="tsx"
            filename="PricingCard.tsx"
            code={`import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface PricingCardProps {
  items: PricingItem[];
  price: string;
  title: string;
  popular?: boolean;
  className?: string;
  period?: string;
}

export interface PricingItem {
  features: string[];
}

export const PricingCard = ({
  items,
  title,
  price,
  popular,
  className,
  period = "month",
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={cn(
        "flex flex-col p-6 bg-zinc-950 rounded-xl relative",
        "border border-white/10 hover:border-white/20",
        "transition-all duration-300 grow",
        popular &&
          "scale-105 border-purple-500/30 shadow-lg shadow-purple-500/10",
        "min-w-[300px]",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-300 to-blue-300">
          Most Popular
        </Badge>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black">{price}</span>
          {price !== "Free" && (
            <span className="text-sm text-white/60">/{period}</span>
          )}
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-8">
        {items[0].features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <div
              className={cn(
                "p-1 rounded-full",
                "bg-white/5 group-hover:bg-white/10",
                "transition-colors duration-200"
              )}
            >
              <FaCheck size={12} className="text-purple-500" />
            </div>
            <span className="text-sm text-white/80">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={cn(
          "w-full justify-center",
          popular
            ? "bg-gradient-to-r bg-white/90 hover:bg-white"
            : "bg-white/80 hover:bg-white"
        )}
      >
        Get Started
      </Button>
    </motion.div>
  );
};
`}
          />
          <CodeBlock
            lang="tsx"
            title="Usage"
            filename="tsx"
            code={`<div className="flex flex-row flex-wrap min-h-[30rem] p-2 items-end">
    <PricingCard
        title="Basic"
        price="$199"
        items={[
        {
            features: [
            "5GB Storage",
            "Unlimited Public Repositories",
            "Community Support",
            "Access to Basic Tutorials",
            "Email Support",
            ],
        },
        ]}
    />
    <PricingCard
        title="Premium ++"
        price="$799"
        popular={true}
        items={[
        {
            features: [
            "Unlimited Storage",
            "Unlimited Private Repositories",
            "24/7 Support",
            "One-click Deploy",
            "Free Domain",
            "Access to All Tutorials",
            "Priority Email Support",
            "Live Chat Support",
            "Dedicated Account Manager",
            ],
        },
        ]}
    />
    <PricingCard
        title="Premium"
        price="$399"
        items={[
        {
            features: [
            "50GB Storage",
            "Unlimited Private Repositories",
            "Dedicated Support",
            "Access to Premium Tutorials",
            "Priority Email Support",
            "Live Chat Support",
            ],
        },
        ]}
    />
</div>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default pricing;

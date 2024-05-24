import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Badge } from "@/components/hexta-ui/Badge";
import { Button } from "@/components/hexta-ui/Button";

interface PricingCardProps {
  items: PricingItem[];
  price: string;
  title: string;
  popular?: boolean;
}

export interface PricingItem {
  features: string[];
}

export const PricingCard = ({
  items,
  title,
  price,
  popular,
}: PricingCardProps) => {
  return (
    <>
      <div
        className={`flex flex-col gap-3 p-4 bg-zinc-950 m-3 grow rounded-lg relative border border-white  ${
          !popular && "border-opacity-10"
        }`}
      >
        {popular && (
          <Badge className="w-fit text-xs absolute top-[-13px] left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
        )}
        <div>
          <h4 className="text-xl font-semibold opacity-80">{title}</h4>
          <p className="text-3xl font-black">{price}</p>
        </div>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <ul className="flex flex-col gap-1">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1 text-[14px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                      />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grow flex">
          <Button className="grow text-center items-center flex justify-center">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

const pricing = () => {
  return (
    <>
      <DocsSEO
        title="Pricing Cards"
        description="A ready to use pricing section with modern and reponsive pricing cards."
        image="https://i.imgur.com/TQqIiSH.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Pricing Cards"
            description="A ready to use pricing section with modern and reponsive pricing cards."
          />
          <DocsPreview className="flex flex-row flex-wrap min-h-[30rem] p-2 items-end">
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
          </DocsPreview>
          <InstallationSteps
            title="Complete Code"
            component={["Button", "Badge"]}
            imports={["Button", "Badge"]}
          />
          <CodeBlock
            lang="tsx"
            filename="PricingCard.tsx"
            code={`interface PricingCardProps {
  items: PricingItem[];
  price: string;
  title: string;
  popular?: boolean;
}

export interface PricingItem {
  features: string[];
}

export const PricingCard = ({
  items,
  title,
  price,
  popular,
}: PricingCardProps) => {
  return (
    <>
      <div
        className={\`flex flex-col gap-3 p-4 bg-zinc-950 m-3 grow rounded-lg relative border border-white  $\{
          !popular && "border-opacity-10"
        }\`}
     className={\`flex flex-col gap-3 p-4 bg-zinc-950 m-3 grow rounded-lg relative border border-white  $\{
         !popular && "border-opacity-10"
        }\`}
        {popular && (
          <Badge className="w-fit text-xs absolute top-[-13px] left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
        )}
        <div>
          <h4 className="text-xl font-semibold opacity-80">{title}</h4>
          <p className="text-3xl font-black">{price}</p>
        </div>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <ul className="flex flex-col gap-1">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1 text-[14px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                      />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grow flex">
          <Button className="grow text-center items-center flex justify-center">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};`}
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

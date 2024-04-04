import Image from "next/image";
import Sidebar from "./Sidebar";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function Home() {
  return (
    <div className='flex w-full h-full'>
      <div className='flex flex-col flex-grow bg-white p-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Technical Specifications
        </h2>
        <p className='mt-4 text-gray-500'>
          The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active cards
          from new ones, or can be used to archive important task lists.
        </p>

        <div className='grid grid-cols-1 mt-8 gap-y-6 sm:grid-cols-2'>
          {features.map((feature) => (
            <div key={feature.name}>
              <h3 className='font-medium text-gray-900'>{feature.name}</h3>
              <p className='mt-2 text-sm text-gray-500'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-8 sm:gap-6 lg:gap-8'>
          <img
            src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg'
            alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg'
            alt='Top down view of walnut card tray with embedded magnets and card groove.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg'
            alt='Side of walnut card tray with card groove and recessed card area.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'
            alt='Walnut card tray filled with cards and card angled in dedicated groove.'
            className='rounded-lg bg-gray-100'
          />
        </div>
      </div>
    </div>
  );
}

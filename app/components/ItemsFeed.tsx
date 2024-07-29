import Image from "next/image";
import Link from "next/link";

export default function ItemsFeed({
  group,
}: {
  group: {
    id: number;
    name: string;
    itemList: {
      category: string;
      description: string;
      items: {
        id: number;
        name: string;
        photos: string[];
        rentalPeriod: number;
        descriptionList: string[];
      }[];
    }[];
  };
}) {
  return (
    <div className="pt-8 pb-24">
      {group.itemList.map((itemGroup, idx) => (
        <div key={idx} className="pl-4">
          <div className="text-xl font-semibold">{itemGroup.category}</div>
          <div className="text-sm opacity-50 pb-4">{itemGroup.description}</div>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide pr-4">
            {itemGroup.items.map((item, idx) => (
              <Link
                key={idx}
                href={{
                  pathname: `/rent/itemDetail`,
                  query: {
                    groupName: group.name,
                    groupId: group.id,
                    itemId: item.id,
                  },
                }}
                // as={`/rent/itemDetail`}
              >
                <div className="pb-6">
                  <div className="relative w-[150px] h-[150px] mb-2 border-[1px] rounded-xl overflow-hidden">
                    <Image
                      src={item.photos[0]}
                      fill
                      alt="itemPhoto"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm">{item.name}</div>
                  <div className="text-xs opacity-50">
                    대여 가능 기간: {item.rentalPeriod}일
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker } from 'react-icons/fa';

// 定义 Property 类型
interface Property {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// 定义 PropertyCard 组件的 props 类型
interface PropertyCardProps {
  property: Property;
}

// React.FC是泛型函数组件，用于定义函数组件的类型，其中传入的props 类型 是PropertyCardProps类型
const PropertyCard: React.FC<PropertyCardProps> = ({property}) => {

  const getRateDisplay = () => {

    // 检查 property 是否有 rates 属性，并且 rates 属性是否有 monthly 属性
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className='inline mr-2'/> {property.beds}{" "}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-2'/> {property.baths}{" "}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-2'/>
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">

          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-2'/> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-2'/> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-2'/> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className='text-orange-700 mt-1'/>
            <span className="text-orange-700"> {' '}{property.location.city} {property.location.state}{' '} </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

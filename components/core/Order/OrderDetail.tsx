import { ISelectedClothServicePricing } from "@/app/(auth)/orders/order/page";
import { useGetServiceTypeQuery } from "@/app/_global-redux/services/service-type-api";
import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/ui/sectionTitle";
import { TAX_RATE } from "@/lib/constants";
import { FaShirt } from "react-icons/fa6";

interface IProps {
  selectedClothesServicePricing: ISelectedClothServicePricing[];
  serviceTypeId: string;
}
const OrderDetail = ({
  selectedClothesServicePricing,
  serviceTypeId,
}: IProps) => {
  const { data: serviceTypeData } = useGetServiceTypeQuery({
    id: serviceTypeId,
  });
  console.log(serviceTypeData, "service type data");

  const subTotalOfClothes = selectedClothesServicePricing.reduce(
    (total, item) => {
      return total + item.count * item.price;
    },
    0
  );

  const serviceTypeCost =
    serviceTypeData?.rateType === "percentage"
      ? (serviceTypeData?.rate / 100) * subTotalOfClothes
      : serviceTypeData?.rate || 0;

  const roundedServiceTypeCost = parseFloat(serviceTypeCost.toFixed(2));

  const subTotal = parseFloat(
    (subTotalOfClothes + roundedServiceTypeCost).toFixed(2)
  );

  const tax = parseFloat((TAX_RATE * subTotal).toFixed(2));

  const total = parseFloat((subTotal + tax).toFixed(2));

  return (
    <div className="w-full">
      <SectionTitle>Order details</SectionTitle>
      <div className="flex mt-4 gap-x-2 gap-y-8 flex-wrap">
        {/* order details */}
        {selectedClothesServicePricing.map((item, index) => {
          return (
            <div
              className="flex flex-col font-medium items-center gap-2"
              key={index}
            >
              <h1>x {item.count}</h1>
              <Card className="p-4 bg-background text-primary">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xl">
                    <FaShirt />
                  </div>
                  <h1>{item.clothName}</h1>
                </div>
                <div>{item.serviceName}</div>
              </Card>
              <h1>Rs {item.price * item.count}</h1>
            </div>
          );
        })}
      </div>
      <Card className="mt-8 border-0 bg-primaryTransparent text-gray-400">
        <div className="flex justify-between gap-2 px-4 pt-4">
          <span>Order Total</span>
          <span>Rs {subTotalOfClothes}</span>
        </div>
        <div className="flex justify-between gap-2 px-4">
          <span>Service charge ({serviceTypeData?.rateType === "fixed" && "Rs"} {serviceTypeData?.rate}{serviceTypeData?.rateType === "percentage" && "%"})</span>
          <span>Rs {serviceTypeCost}</span>
        </div>
        <div className="flex justify-between gap-2 px-4 pt-4">
          <span>Sub Total</span>
          <span>Rs {subTotal}</span>
        </div>
        <div className="flex justify-between gap-2 px-4 ">
          <span>taxes</span>
          <span>Rs {tax}</span>
        </div>
        <div className="flex justify-between gap-2 p-4 bg-primary rounded-b-md text-background text-lg">
          <span>Invoice total</span>
          <span>Rs {total}</span>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetail;

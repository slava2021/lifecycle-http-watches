import { ClockModel } from "../models/clockModel";
import ClockItem from "./ClockItem";

const ClockList = ({ itemsData, onRemove }: ClockModel[]) => {
  return (
    <div className="clock-list">
      {itemsData.map((item, index) => (
        <ClockItem key={index} item={item} remove={onRemove} />
      ))}
    </div>
  );
};

export default ClockList;

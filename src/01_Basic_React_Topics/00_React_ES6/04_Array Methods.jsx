import React from "react";

const ArrayMethods = () => {
  // 1.Map()
  const Numbers = [1, 2, 3, 4, 5];
  const NewNumbers = Numbers.map((num) => {
    return num * 4;
  });
  console.log(NewNumbers);

  // 2.reduce()
  const Values = [1, 2, 3, 4, 5];
  const newValue = Values.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(newValue);

  // 3.filter()
  const Data = [1, 2, 3, 4, 5, 6, 7];
  const newData = Data.filter((number) => number >= 3);
  console.log(newValue);

  //4.includes()

  const Datas = [1, 2, 3, 4, 5];
  const newDatas = Datas.includes(3);

  //5.find()
  const num = [1, 2, 3, 4];
  const newNum = num.find((number) => number > 3);
  console.log(newValue);

  return (
    <>
      <h3>4.1 Map( )</h3>
      {NewNumbers}
      <h3>4.2 Reduce( )</h3>
      {newValue}
      <h3>4.3 Filter( )</h3>
      {newData}
      <h3>4.4 Includes( )</h3>
      {console.log(newDatas)}
      <h3>4.5 find( )</h3>
      {newNum}
    </>
  );
};

export default ArrayMethods;

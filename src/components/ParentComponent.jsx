import React, { useCallback } from "react";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import ClassPureComponent from "./ClassPureComponent";
import DataCount from "./DataCount";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(10000);

  //it return the memoised function

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <ClassPureComponent />
      <DataCount count={age} text="age" />
      <ButtonComponent handleClick={incrementAge}>
        Increment Age
      </ButtonComponent>
      <DataCount count={salary} text="Salary" />
      <ButtonComponent handleClick={incrementSalary}>
        Increment Salary
      </ButtonComponent>
    </div>
  );
};

export default ParentComponent;

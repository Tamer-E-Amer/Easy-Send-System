/**
 * @description contains function that process data in home page
 */
import { depData } from "../data/layoutText.jsx";
import { Department, Icon, ProblemsCount } from "../components";

/**
 * @description this function is used to get the department data.It accept prameter string in order to return suitable jsx component
 * @param {*} component
 * @returns sjx component
 * // component === "depComponent" ? return <Department/> component
 * // component === "problemsCount"? return <ProblemsCount/> component
 * // otherwise return <Icon/> component
 */
export const gteDepartmentData = (component) => {
  const dep = depData.map((el) => {
    if (component === "depComponent") {
      return el.about && <Department key={el.id} department={el} />;
    } else if (component === "problemsCount") {
      return el.about && <ProblemsCount key={el.id} dept={el} />;
    } else {
      return <Icon key={el.id} dep={el} />;
    }
  });
  return dep;
};

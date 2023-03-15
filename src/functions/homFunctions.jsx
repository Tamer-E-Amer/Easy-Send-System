/**
 * @description contains function that process data in home page
 */
import { depData } from "../data/layoutText.jsx";
import { Department, Icon } from "../components";

export const gteDepartmentData = (component) => {
  const dep = depData.map((el) => {
    return component === "depComponent" ? (
      el.about && <Department key={el.id} department={el} /> // Render only Departments with about data
    ) : (
      <Icon key={el.id} dep={el} />
    );
  });
  return dep;
};

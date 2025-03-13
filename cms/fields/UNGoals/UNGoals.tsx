const sdgs = [
  { label: "1. No Poverty", value: "sdg-1" },
  { label: "2. Zero Hunger", value: "sdg-2" },
  { label: "3. Good Health and Well-being", value: "sdg-3" },
  { label: "4. Quality Education", value: "sdg-4" },
  { label: "5. Gender Equality", value: "sdg-5" },
  { label: "6. Clean Water and Sanitation", value: "sdg-6" },
  { label: "7. Affordable and Clean Energy", value: "sdg-7" },
  { label: "8. Decent Work and Economic Growth", value: "sdg-8" },
  { label: "9. Industry, Innovation and Infrastructure", value: "sdg-9" },
  { label: "10. Reduced Inequality", value: "sdg-10" },
  { label: "11. Sustainable Cities and Communities", value: "sdg-11" },
  { label: "12. Responsible Consumption and Production", value: "sdg-12" },
  { label: "13. Climate Action", value: "sdg-13" },
  { label: "14. Life Below Water", value: "sdg-14" },
  { label: "15. Life on Land", value: "sdg-15" },
  { label: "16. Peace, Justice and Strong Institutions", value: "sdg-16" },
  { label: "17. Partnerships for the Goals", value: "sdg-17" },
];

import { fields } from "@keystatic/core";

export const UNGoals = fields.array(
  fields.select({ label: "UN SDG", options: sdgs, defaultValue: "sdg-1" }),
  {
    label: "UN Sustainable Development Goals",
    itemLabel(props) {
      return (
        sdgs.find((item) => {
          return item.value == props.value;
        })?.label || "Unknown SDG"
      );
    },
  }
);

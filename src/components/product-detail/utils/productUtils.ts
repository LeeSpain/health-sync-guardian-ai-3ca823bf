
export const getProductPrice = (productName: string): string => {
  switch (productName) {
    case "iHealth Dashboard Tablet":
      return "€99.99";
    case "Guardian Button":
      return "€49.99";
    case "Heart Rate Monitor":
      return "€79.99";
    case "Smart Scales":
      return "€89.99";
    case "Thermometer":
      return "€39.99";
    case "Bed Sensor":
      return "€129.99";
    case "SOS Call Centre":
      return "€89.99";
    case "Medication Dispenser":
      return "€199.99";
    case "Glucose Monitor":
      return "€199.99";
    case "Nurse-Sync":
      return "€149.99";
    case "Medic-Sync":
      return "€149.99";
    default:
      return "€99.99";
  }
};

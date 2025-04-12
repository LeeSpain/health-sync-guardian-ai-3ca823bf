
export const getProductPrice = (productName: string): string => {
  switch (productName) {
    case "iHealth Dashboard Tablet":
      return "€120.99";
    case "Guardian Button":
      return "€60.49";
    case "Heart Rate Monitor":
      return "€96.79";
    case "Smart Scales":
      return "€108.89";
    case "Thermometer":
      return "€48.39";
    case "Bed Sensor":
      return "€157.29";
    case "SOS Call Centre":
      return "€108.89";
    case "Medication Dispenser":
      return "€241.99";
    case "Glucose Monitor":
      return "€241.99";
    case "Nurse-Sync":
      return "€149.99";
    case "Medic-Sync":
      return "€149.99";
    default:
      return "€99.99";
  }
};

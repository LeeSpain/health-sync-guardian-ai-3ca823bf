
interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
  downlink?: number;
  downlinkMax?: number;
  rtt?: number;
  type?: string;
  onChange?: EventListener;
}

interface Navigator {
  connection?: NetworkInformation;
}

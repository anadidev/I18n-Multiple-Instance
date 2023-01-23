import i18nInstance1 from "../i18n/i18n-Instance1";
import { I18nextProvider } from "react-i18next";
import InstanceOne from "./InstanceOne";

const InstanceOneParent = () => {
  return (
    <div>
      <I18nextProvider i18n={i18nInstance1}>
        <div>
          <h2>Instance 1 Parent</h2>
          <InstanceOne/>
        </div>
      </I18nextProvider>
    </div>
  );
};

export default InstanceOneParent;
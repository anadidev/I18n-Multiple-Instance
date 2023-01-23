import i18nInstance1 from "../i18n/i18n-Instance1";
import i18nInstance2 from "../i18n/i18n-Instance2";
import { I18nextProvider } from "react-i18next";


import InstanceOneParent from "../components/InstanceOneParent";
import InstanceOne from "../components/InstanceOne";
import InstanceTwo from "../components/InstanceTwo";

const PageOne = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "30px",
        padding: "10px",
      }}
    >
      <I18nextProvider i18n={i18nInstance1}>
        <div style={{ border: "1px solid black" }}>
          <h2>Instance 1</h2>
          <InstanceOne />
        </div>
      </I18nextProvider>
      <div style={{ border: "1px solid black" }}>
        <h2>Instance 2</h2>
        <I18nextProvider i18n={i18nInstance1}>
          <InstanceOne />
          <I18nextProvider i18n={i18nInstance2}>
            <InstanceTwo />
            <div style={{color:'red'}}>
              <InstanceOneParent />
            </div>
          </I18nextProvider>
        </I18nextProvider>
      </div>
    </div>
  );
};

export default PageOne;

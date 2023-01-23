import React from "react";
import { useTranslation } from "react-i18next";

const InstanceTwo = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t("Instance2key")}</h3>
    </div>
  );
};

export default InstanceTwo;

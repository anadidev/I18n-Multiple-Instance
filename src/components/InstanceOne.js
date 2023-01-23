import React from "react";
import { useTranslation } from "react-i18next";

const InstanceOne = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t("Instance1key")}</h3>
    </div>
  );
};

export default InstanceOne;

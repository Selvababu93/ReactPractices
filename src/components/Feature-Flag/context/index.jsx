import React, { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      // Original service call will come here.
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  });
  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;

import React from "react";

const useLocalData = <T1>(endpoint: string, ...updaters: any[]) => {
  const [localData, setLocalData] = React.useState<T1 | null>(null);
  React.useEffect(() => {
    fetch(`http://localhost:8888${endpoint}`)
      .then((res) => res.json())
      .then(setLocalData);
  }, updaters);
  return localData;
};

export default useLocalData;

import { useEffect, useState } from "react";
import { API } from "../../server/endpoint";

const Index = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [cta, setCta] = useState<any>([]);

  const getCta = async () => {
    setLoading(true);
    const { data, error } = await API.service("Links").find();

    if (data) {
      setCta(data);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    let mount = true;

    if (mount) {
      getCta();
    }
    return () => {
      mount = false;
    };
  }, []);

  return {
    cta,
  };
};

export default Index;

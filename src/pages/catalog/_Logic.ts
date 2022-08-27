import { useEffect, useState } from "react";
import { API } from "../../server/endpoint";

const Index = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);

  const getCategory = async () => {
    setLoading(true);
    const { data, error } = await API.service("Category").find();

    if (data) {
      setCategory(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    const { data, error } = await API.service("Prods").find({
      lookup: '*',
    });

    if (data) {
      let arr: any = [];
      data.map((item: any) => {
        const obj = {
          ...item,
          prod_category: item.prod_category[0].name,
          prod_thumb: item.prod_thumb[0].url,
          prod_img1: item.prod_img1[0].url,
          prod_img2: item.prod_img2[0].url,
          prod_img3: item.prod_img3[0].url,
        }
      arr.push(obj)
      })
      setProduct(arr);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const getProductsByCategory = async (id: string) => {
    setLoading(true);
    const { data, error } = await API.service('Prods').find({
      where: { prod_category: id },
    })

    if (data) {
      let arr: any = [];
      data.map((item: any) => {
        const obj = {
          ...item,
          prod_category: item.prod_category[0].name,
          prod_thumb: item.prod_thumb[0].url,
          prod_img1: item.prod_img1[0].url,
          prod_img2: item.prod_img2[0].url,
          prod_img3: item.prod_img3[0].url,
        }
      arr.push(obj)
      })
      setProduct(arr);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    let mount = true;

    if (mount) {
      getCategory();
      getProducts();
    }
    return () => {
      mount = false;
    };
  }, []);

  return {
    loading,
    category,
    product,
    getProducts,
    getProductsByCategory,
  };
};

export default Index;

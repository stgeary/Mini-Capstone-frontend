import {ProductsNew} from "./productsnew"
import {ProductsIndex} from "./ProductsIndex"
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";
import {Modal} from "./modal"
import {ProductsShow} from "./ProductsShow";
import {Signup} from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";


export function Content() {
    const [products, setProducts] = useState([]);
    const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleIndexProducts = () => {
        axios.get("http://localhost:3000/products.json").then((response) => {
            setProducts(response.data);
            console.log(products);
        });
    };

    const handleShowProduct = (product) => {
        setIsProductsShowVisible(true);
        setCurrentProduct(product);
    }

    const handleClose = () => {
        setIsProductsShowVisible(false);
      };

      const handleCreateProduct = (params) => {
        axios.product("http://localhost:3000/products.json", params).then((response) => {
            setProducts([...products, response.data]);
        });
      }
      
    const handleUpdateProduct = (id, params) => {
        axios.patch("http://localhost:3000/products/" + id + ".json", params).then((response) => {
          setProducts(
            products.map((product) => {
              if (product.id === response.data.id) {
                return response.data;
              } else {
                return product;
              }
            })
          );
        });
      };
    const handleDestroyProduct = (id) => {
        // eslint-disable-next-line no-unused-vars
        axios.delete("http://localhost:3000/products/" + id + ".json", id).then((response) => {
            setProducts(products.filter((product) => product.id !== id));
            handleClose();
          });
    };



    useEffect(handleIndexProducts, []);

    return (
        <>
        <div className = "container">
            <Signup />
            <Login />
            <LogoutLink />
        <ProductsNew onCreateProduct={handleCreateProduct}/>
        <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
        <Modal show={isProductsShowVisible} onClose={handleClose}>
            <ProductsShow 
            product = {currentProduct} 
            onUpdateProduct={handleUpdateProduct} 
            onDestroyProduct={handleDestroyProduct} />
        </Modal>
        </div>
      </>
    );
  }
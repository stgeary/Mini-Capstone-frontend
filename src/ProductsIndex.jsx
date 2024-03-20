/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function ProductsIndex(props) {
    console.log(props);
  
    return (
        <div id="products-index">
        <h2>{props.name}</h2>
        <h1>All products</h1>
        <div className="cards">
          {props.products.map((product) => (
            <div key={product.id} className="products card">
              <h2>{product.title}</h2>
              <p>{product.body}</p>
              <img src={product.image} alt="" />
              <div className="card-body">
              <h2>{product.title}</h2>
              <p>{product.body} </p>
              <button onClick={() => props.onShowProduct(product)}>More info</button>

            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

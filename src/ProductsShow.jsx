/* eslint-disable react/prop-types */
export function ProductsShow(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdateProduct(props.product.id, params);
        event.target.reset();
      };
    
      const handleClick = () => {
        props.onDestroyProduct(props.product.id);
      };
    return (
    <>
      <div id="products-show">
        <h2>{props.product.name}</h2>
        <p>{props.product.price}</p>
        <p>{props.product.description}</p>
        <p>{props.product.color}</p>
        <p>{props.product.quantity}</p>
        <p>{props.product.supplier_id}</p>
        <p>{props.product.imageid}</p>
      </div>

    <h2>Edit this product!</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
            <input defaultValue={props.product.price} name="price" type="integer" />
        </div>
        <div>
            <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <div>
            <input defaultValue={props.product.color} name="color" type="integer" />
        </div>
        <div>
            <input defaultValue={props.product.quantity} name="quantity" type="integer" />
        </div>
        <div>
            <input defaultValue={props.product.supplier_id} name="supplier_id" type="integer" />
        </div>
        <div>
            <input defaultValue={props.product.imageid} name="imageid" type="integer" />
        </div>
  
        <button type="submit">Update product</button>
        </form>
            <button onClick={handleClick}>Delete product</button>
    </>
);
}
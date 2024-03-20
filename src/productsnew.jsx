/* eslint-disable react/prop-types */
export function ProductsNew() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("yo"); // hello???
        const params = new FormData(event.target);
        props.onCreateProduct(params);
        event.target.reset();
    }
    return (
      <div id="products-new">
        <h1>New product</h1>
        <form onSubmit={handleSubmit}>
        <div>
            Name: <input type="text" />
        </div>
        <div>
            Description: <input type="integer" />
        </div>
        <div>
            Price: <input type="text" />
        </div>
        <div>
            Color: <input type="text" />
        </div>
        <div>
            Quantity: <input type="integer" />
        </div>
        <div>
            supplier id: <input type="integer" />
        </div>
        <div>
            image id: <input type="integer" />
        </div>
          <button type="submit">Create new creation</button>
        </form>
      </div>
    );
  }
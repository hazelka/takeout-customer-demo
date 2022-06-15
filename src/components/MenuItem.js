import './MenuItem.css';

const MenuItem = ({ name, desc, price, url, addToCart }) => {
  return (
    <div className="menu-item-container">
      <div className='menu-img-container'>
        <img 
        className="menu-item-img"
        alt="item" 
        src={url}
        />
        <p className="menu-item-desc">{desc}</p>
      </div>
      <div className="menu-item-body">
        <h6 className="menu-item-name ls-4">{name}</h6>
        <div className="menu-item-price">
          <p>{price}</p>
          <button className="add-btn" onClick={addToCart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
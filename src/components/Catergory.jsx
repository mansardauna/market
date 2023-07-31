import React, { useState } from 'react'
import catergories from './catergories';
import Catergories from './catergories';
import Navbar from './Navbar';
import '../index.css'


const Catergory = () => {
  const [data, setData] = useState(Catergories)
  const filterResult = (catItems) => {
    const result = Catergories.filter((curData) => {
      return curData.Catergory === catItems;
    });
    setData(result)
  }


  return (
    <>
      <div className=''>
        <div className="flex">
          <div className=" w-1/4 grid hidden md:block h-fit">
            <div className="category m-auto font-semibold text-2xl uppercase text-amber-400 font-light">Products</div>

            <div className="flex" onClick={() => filterResult('men')}>
              <img src='/icons/car.svg' className='w-5' />
              <div className="label ml-2">Automobile</div>
            </div>

            <div className="flex" onClick={() => filterResult('women')}>
              <img src='/icons/phone.svg' className='w-5' />
              <div className="label ml-2">Phones and Gadgets</div>
            </div>

            <div className="flex" onClick={() => filterResult('white')}>
              <img src='/icons/books.svg' className='w-5' />
              <div className="label ml-2">Books</div>
            </div>

            <div className="flex" onClick={() => filterResult('child')}>
              <img src='/icons/electronic.svg' className='w-5' />
              <div className="label ml-2">Electronics</div>
            </div>

            <div className="flex" onClick={() => filterResult('white')}>
              <img src='/icons/food.svg' className='w-5' />
              <div className="label ml-2">Food Items</div>
            </div>

            <div className="flex" onClick={() => filterResult('white')}>
              <img src='/icons/music.svg' className='w-5' />
              <div className="label ml-2">Music</div>
            </div>

            <div className="flex" onClick={() => setData(catergories)}>
              <img src='/icons/all.svg' className='w-5' />
              <div className="label ml-2">All</div>
            </div>




          </div>
          <div className=" container">
            <div className="grid-card">
              {data.map((values) => {
                const { id, title, price, image } = values
                return (
                  <>
                    <div className="col-sm-4 mt-2" key={id}>
                      <div className="card">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <h5>{price}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn uppercase">Cart</a>
                          <a href="#" className="btn uppercase">buy</a>
                        </div>
                      </div>





                    </div>
                  </>
                )
              })}





            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default Catergory;
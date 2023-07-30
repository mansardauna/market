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
      <div className='container-fluid  mx-2'>
        <div className="row mt-2 mx-2">
          <div className="col-sm-2">
            <button className="btn w-100 mb-2" onClick={() => filterResult('men')}>
              Men
            </button>
            <button className="btn w-100 mb-2" onClick={() => filterResult('women')} >
              Women
            </button>
            <button className="btn w-100 mb-2"
              onClick={() => filterResult('child')}>
              Children
            </button>
            <button className="btn w-100 mb-2"
              onClick={() => filterResult('black')}>              Black
            </button>
            <button className="btn w-100 mb-2"
              onClick={() => filterResult('white')}>              White
            </button>
            <button className="btn w-100 mb-4"
              onClick={() => setData(catergories)}>              All
            </button>


          </div>
          <div className="col-sm-10">
            <div className="row">
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
                          <a href="#" className="btn btn-primary">Go somewhere</a>
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
"use client";
import React, { useState } from "react";
// this is the page where the form will be displayed
// this form page will be used to add a new product

export default function Page() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme gönderme işlemleri burada gerçekleştirilebilir
    console.log("Ürün Adı:", productName);
    console.log("Fiyatı:", price);
    console.log("Stok Miktarı:", stock);

    // Formun gönderildikten sonra alanları sıfırla
    setProductName("");
    setPrice("");
    setStock("");
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Ürün Ekle</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='productName'
            className='block font-medium text-gray-700'
          >
            Ürün Adı:
          </label>
          <input
            type='text'
            id='productName'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className='mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>
        <div>
          <label htmlFor='price' className='block font-medium text-gray-700'>
            Price:
          </label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className='mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>
        <div>
          <label htmlFor='stock' className='block font-medium text-gray-700'>
            Stok Miktarı:
          </label>
          <input
            type='number'
            id='stock'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className='mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>
        <button
          type='submit'
          className='bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300'
        >
          Ürün Ekle
        </button>
      </form>
    </div>
  );
}

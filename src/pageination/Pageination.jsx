import React, { useEffect, useState } from "react";
import "./Pageination.css";

const Pageination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(posts.length / postPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="page-full">
      <div>
        <h1>Pagination</h1>
      </div>
      <div className="page-data">
        <table className="tables-data">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts?.map((items) => (
              <tr key={items.id} className="page-info">
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td>{items.category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttonsss">
        <button onClick={handlePrevious}>Previous</button>
        <p>{currentPage}</p>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Pageination;

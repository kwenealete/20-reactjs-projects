import useFetch from "../use-fetch";
import { useRef } from "react";

export default function ScrollToTopAndButtom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>There is an error ! kindly try again</h1>;
  }

  if (pending) {
    return <h1>Loading data ! please be patient</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Buttom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map(item => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  // const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const  res  = await fetch(
          "http://localhost:3000/backend/message/getall"
        );
        const data = await res.json();
        console.log(data);
        setMessages(data.messages);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <section className="page messages">
      <h1>MESSAGE</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="details">
                  <p>
                    First Name: <span>{element.firstname}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastname}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;

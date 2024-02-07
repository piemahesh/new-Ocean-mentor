import { useState } from "react";
import { SIX_JARS } from "../../constant/ApiEndpoint";
// import UseQueryRe from "../../customHooks/UseQueryRe";
import api from "../../ApiService";
import "./_jars.scss";

export const Jars = () => {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handlePost = async () => {
    await api.post(SIX_JARS,{query,email,name});
    console.log({ query, email, name });
  };

  return (
    <main className="formHead">
      <div className="forms">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter name"
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter email"
        />
        <input
          type="query"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Enter query"
        />
        <button onClick={handlePost}>submit</button>
      </div>
    </main>
  );
};
